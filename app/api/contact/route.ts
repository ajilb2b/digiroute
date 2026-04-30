import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { ContactEmailHtml } from "@/lib/email-template";

// Force this route to always be dynamic (never statically analyzed at build)
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  // Initialise lazily so build-time static analysis never touches it
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await req.json();
    const { name, email, company, message } = body;

    // Basic validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Send notification email to DigiRoute team
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "DigiRoute <onboarding@resend.dev>",
      to:   process.env.RESEND_TO_EMAIL   || "info@digiroute.me",
      replyTo: email,
      subject: `New Enquiry from ${name} — ${company || "Individual"}`,
      html: ContactEmailHtml({ name, email, company, message }),
    });

    if (error) {
      console.error("[Resend error]", error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again." },
        { status: 500 }
      );
    }

    // Optional: send auto-reply to the user
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "DigiRoute <onboarding@resend.dev>",
      to:   email,
      subject: "We received your message — DigiRoute",
      html: `
        <div style="font-family:'Segoe UI',Arial,sans-serif;max-width:520px;margin:0 auto;padding:40px 20px;color:#0E1530;">
          <h2 style="font-size:22px;font-weight:700;margin:0 0 16px;">Thanks, ${name}!</h2>
          <p style="font-size:15px;color:#4B5563;line-height:1.65;margin:0 0 12px;">
            We've received your message and a member of our commercial team will get back to you within one working day.
          </p>
          <p style="font-size:15px;color:#4B5563;line-height:1.65;margin:0 0 28px;">
            In the meantime, feel free to call us at <strong>+974 4140 4004</strong> (Qatar) or <strong>+971 50 981 3825</strong> (UAE).
          </p>
          <p style="font-size:13px;color:#9CA3AF;margin:0;">
            — DigiRoute Logistics Services W.L.L<br/>Doha, Qatar &amp; Dubai, UAE
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (err) {
    console.error("[Contact API error]", err);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}

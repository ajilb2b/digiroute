interface ContactEmailProps {
  name: string;
  email: string;
  company: string;
  message: string;
}

export function ContactEmailHtml({ name, email, company, message }: ContactEmailProps): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Contact Form Submission</title>
</head>
<body style="margin:0;padding:0;background:#F5F4FB;font-family:'Segoe UI',Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(125deg,#1A0658 0%,#2E0A8A 35%,#4516C7 65%,#5B21F0 100%);border-radius:16px 16px 0 0;padding:36px 40px;text-align:center;">
              <p style="margin:0 0 6px;font-size:11px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:rgba(255,255,255,0.55);">DigiRoute Logistics Services W.L.L</p>
              <h1 style="margin:0;font-size:26px;font-weight:700;color:#ffffff;letter-spacing:-0.03em;">New Enquiry Received</h1>
              <p style="margin:10px 0 0;font-size:13px;color:rgba(255,255,255,0.65);">Someone just submitted the contact form on digiroute.me</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#ffffff;padding:36px 40px;border-left:1px solid #E8E6F4;border-right:1px solid #E8E6F4;">

              <!-- Field: Name -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
                <tr>
                  <td style="padding:16px 20px;background:#F9F8FE;border-radius:10px;border-left:3px solid #5B21F0;">
                    <p style="margin:0 0 4px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:#9CA3AF;">Full Name</p>
                    <p style="margin:0;font-size:16px;font-weight:600;color:#0E1530;">${name}</p>
                  </td>
                </tr>
              </table>

              <!-- Field: Email -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
                <tr>
                  <td style="padding:16px 20px;background:#F9F8FE;border-radius:10px;border-left:3px solid #5B21F0;">
                    <p style="margin:0 0 4px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:#9CA3AF;">Email Address</p>
                    <p style="margin:0;font-size:16px;font-weight:600;color:#0E1530;">
                      <a href="mailto:${email}" style="color:#5B21F0;text-decoration:none;">${email}</a>
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Field: Company -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
                <tr>
                  <td style="padding:16px 20px;background:#F9F8FE;border-radius:10px;border-left:3px solid #5B21F0;">
                    <p style="margin:0 0 4px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:#9CA3AF;">Company</p>
                    <p style="margin:0;font-size:16px;font-weight:600;color:#0E1530;">${company || "—"}</p>
                  </td>
                </tr>
              </table>

              <!-- Field: Message -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr>
                  <td style="padding:16px 20px;background:#F9F8FE;border-radius:10px;border-left:3px solid #F97316;">
                    <p style="margin:0 0 10px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:#9CA3AF;">Message</p>
                    <p style="margin:0;font-size:15px;color:#1A2247;line-height:1.65;white-space:pre-wrap;">${message}</p>
                  </td>
                </tr>
              </table>

              <!-- CTA -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a href="mailto:${email}?subject=Re: Your DigiRoute Enquiry"
                       style="display:inline-block;padding:13px 28px;background:#F97316;color:#ffffff;font-size:14px;font-weight:700;border-radius:999px;text-decoration:none;letter-spacing:0.01em;">
                      Reply to ${name} →
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#F5F4FB;border-radius:0 0 16px 16px;border:1px solid #E8E6F4;border-top:none;padding:20px 40px;text-align:center;">
              <p style="margin:0;font-size:11px;color:#9CA3AF;letter-spacing:0.04em;">
                © 2026 DigiRoute Logistics Services W.L.L · Doha, Qatar &amp; Dubai, UAE
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
  `.trim();
}

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";

const sections = [
  {
    title: "1. Parties and Acceptance",
    body: `These Terms of Service ("Terms") govern your use of the DigiRoute website at digiroute.me and any related services provided by DigiRoute Logistics Services W.L.L ("DigiRoute", "we", "us", "our"), a company registered in the State of Qatar.

By accessing our website, submitting an enquiry, or entering into a commercial agreement with DigiRoute, you agree to be bound by these Terms. If you do not agree, please do not use our website or services.`,
  },
  {
    title: "2. Our Services",
    body: `DigiRoute provides logistics services including last-mile delivery, rider outsourcing, fleet management, and commercial logistics operations across Qatar and the UAE. The specific scope, service levels, pricing, and obligations for any commercial engagement are set out in a separate Master Service Agreement ("MSA") or Statement of Work ("SOW") signed between DigiRoute and the client.

These Terms govern use of our website and general communications. They do not override or replace the terms of any signed commercial agreement.`,
  },
  {
    title: "3. Use of Our Website",
    body: `You may use our website for lawful purposes only. You agree not to:

— Use the website in any way that violates applicable law or regulation in Qatar, the UAE, or your jurisdiction
— Attempt to gain unauthorised access to any part of our systems or infrastructure
— Transmit spam, malware, or any harmful or disruptive content
— Scrape, crawl, or systematically extract data from our website without our prior written consent
— Impersonate DigiRoute, its employees, or any other person or entity

We reserve the right to restrict or terminate access to our website at our sole discretion without notice.`,
  },
  {
    title: "4. Intellectual Property",
    body: `All content on this website — including text, graphics, logos, images, software, and the DigiRoute brand — is the property of DigiRoute Logistics Services W.L.L or its licensors and is protected by applicable intellectual property law.

You may not reproduce, distribute, modify, or create derivative works from any content on this website without our prior written permission. You may share links to our website for non-commercial purposes.`,
  },
  {
    title: "5. Contact Form and Communications",
    body: `When you submit an enquiry through our contact form, you consent to DigiRoute contacting you by email or telephone to respond to your enquiry. We will handle your personal data in accordance with our Privacy Policy.

Submitting an enquiry does not create a contractual obligation on either party. Any commercial engagement requires a separate signed agreement.`,
  },
  {
    title: "6. Third-Party Links",
    body: `Our website may contain links to third-party websites or services. These links are provided for your convenience only. DigiRoute has no control over the content of third-party sites and is not responsible for their content, privacy practices, or terms of use. Accessing any linked third-party site is at your own risk.`,
  },
  {
    title: "7. Disclaimer of Warranties",
    body: `Our website and its content are provided on an "as is" and "as available" basis without any warranties of any kind, express or implied. We do not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.

To the fullest extent permitted by applicable law, DigiRoute disclaims all warranties, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.`,
  },
  {
    title: "8. Limitation of Liability",
    body: `To the fullest extent permitted by Qatar and UAE law, DigiRoute shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of our website or services, even if we have been advised of the possibility of such damages.

Our total liability to you in connection with the use of our website shall not exceed QAR 1,000 (one thousand Qatari Riyals).

Nothing in these Terms excludes or limits our liability for death or personal injury caused by our negligence, fraud, or any other liability that cannot be excluded or limited under applicable law.`,
  },
  {
    title: "9. Governing Law and Dispute Resolution",
    body: `These Terms are governed by and construed in accordance with the laws of the State of Qatar. Any dispute arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of Qatar.

For commercial disputes arising under a signed MSA or SOW, the dispute resolution provisions of that agreement shall take precedence over this clause.`,
  },
  {
    title: "10. Changes to These Terms",
    body: `We reserve the right to update these Terms at any time. The most recent version will always be available on this page, with the date of the last revision noted at the top. Your continued use of our website after any changes constitutes your acceptance of the updated Terms.`,
  },
  {
    title: "11. Contact",
    body: `If you have any questions about these Terms, please contact us:

DigiRoute Logistics Services W.L.L
Office #7, 3rd Floor, Building 01
Muntazah Commercial Complex, Doha, Qatar

Email: info@digiroute.me
Phone: +974 4140 4004`,
  },
];

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageBanner
          tag="Legal"
          title="Terms of"
          titleEm="Service."
          sub="Last updated: 1 May 2026. Please read these terms carefully before using our website or services."
          breadcrumb="Terms of Service"
        />

        <section style={{ background: "var(--paper)", paddingTop: 80, paddingBottom: 120 }}>
          <div className="container">
            <div style={{ maxWidth: 760, margin: "0 auto" }}>
              {sections.map((s) => (
                <div key={s.title} style={{ marginBottom: 48, paddingBottom: 48, borderBottom: "1px solid var(--border)" }}>
                  <h2 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--ink)", marginBottom: 16 }}>{s.title}</h2>
                  <div style={{ fontSize: "0.95rem", color: "var(--muted)", lineHeight: 1.8, whiteSpace: "pre-line" }}>{s.body}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

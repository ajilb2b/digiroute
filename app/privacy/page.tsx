import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";

const sections = [
  {
    title: "1. Who We Are",
    body: `DigiRoute Logistics Services W.L.L ("DigiRoute", "we", "our", "us") is a logistics company registered in the State of Qatar, with registered offices at Office #7, 3rd Floor, Building 01, Muntazah Commercial Complex, Doha, Qatar, and a commercial presence in Dubai, UAE.

We operate a last-mile delivery platform, fleet management services, and a rider network across Qatar and the United Arab Emirates. This Privacy Policy explains how we collect, use, disclose, and protect personal data in connection with our website (digiroute.me), our client operations portal, and our rider mobile application.`,
  },
  {
    title: "2. Data We Collect",
    body: `We collect the following categories of personal data:

Website visitors: Name, email address, company name, phone number, and any information submitted through our contact form.

Platform clients: Business contact details, email addresses, billing information, and operational preferences necessary to deliver our contracted services.

Riders and driver applicants: Full name, national ID or passport number, contact details, vehicle registration information, driving licence details, bank account details for payment, and location data during active delivery shifts.

All users: Device information, IP address, browser type, and pages visited — collected automatically via standard web analytics tools.`,
  },
  {
    title: "3. How We Use Your Data",
    body: `We use the personal data we collect to:

— Respond to enquiries submitted through our contact form
— Deliver the logistics and dispatch services contracted by our clients
— Process rider applications, onboarding, and payroll
— Send service updates, operational alerts, and communications directly related to our services
— Monitor and improve our dispatch platform and rider app
— Comply with our legal obligations under Qatar and UAE law
— Detect and prevent fraud or misuse of our systems

We do not use your data for unsolicited marketing without your explicit consent.`,
  },
  {
    title: "4. Legal Basis for Processing",
    body: `We process personal data on the following legal bases:

Contractual necessity: Processing required to fulfil a contract with you or your employer, or to take steps prior to entering into such a contract.

Legitimate interests: Processing necessary for our legitimate business interests, including operating our dispatch platform, managing our rider network, and improving our services — where those interests are not overridden by your rights.

Compliance with legal obligations: Processing required by applicable law in Qatar (Law No. 13 of 2016 on Personal Data Protection) and the UAE (Federal Decree-Law No. 45 of 2021 on Personal Data Protection).

Consent: Where you have provided explicit consent, such as subscribing to our newsletter. You may withdraw consent at any time.`,
  },
  {
    title: "5. How We Share Your Data",
    body: `We do not sell your personal data. We may share your data with:

Service providers: Third-party companies that help us operate our platform, including email delivery services (Resend), cloud hosting providers, and mapping and navigation services. These providers are contractually bound to protect your data and may only process it on our instructions.

Clients: Relevant delivery and operational data is shared with the businesses that contract our services in order to fulfil those services.

Legal authorities: Where required to do so by law, court order, or regulatory authority in Qatar or the UAE.

Business transfers: In the event of a merger, acquisition, or sale of all or part of our business, personal data may be transferred to the relevant acquiring party.`,
  },
  {
    title: "6. Data Retention",
    body: `We retain personal data for as long as is necessary to fulfil the purpose for which it was collected, to comply with our legal obligations, and to resolve disputes.

Contact form submissions: Up to 24 months from the date of submission.

Client operational data: For the duration of the client contract, plus a minimum of 5 years thereafter in accordance with commercial record-keeping obligations under Qatar law.

Rider data: For the duration of the rider's engagement with DigiRoute, plus 5 years thereafter for payroll and compliance purposes.

When data is no longer required, it is securely deleted or anonymised.`,
  },
  {
    title: "7. Your Rights",
    body: `Subject to applicable law, you have the following rights in relation to your personal data:

Right of access: You may request a copy of the personal data we hold about you.

Right to rectification: You may request that we correct inaccurate or incomplete data.

Right to erasure: You may request that we delete your personal data, subject to our legal obligations to retain certain records.

Right to restriction: You may request that we restrict the processing of your data in certain circumstances.

Right to object: You may object to our processing of your data where that processing is based on legitimate interests.

To exercise any of these rights, please contact us at info@digiroute.me. We will respond within 30 days.`,
  },
  {
    title: "8. Data Security",
    body: `We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, destruction, or alteration. These measures include encrypted data transmission (TLS), access controls, and regular security reviews of our platform infrastructure.

No method of electronic transmission or storage is completely secure. While we strive to protect your personal data, we cannot guarantee absolute security. In the event of a data breach that is likely to result in a risk to your rights and freedoms, we will notify you and the relevant authorities as required by law.`,
  },
  {
    title: "9. International Data Transfers",
    body: `Our operations are based in Qatar and the UAE. Some of our third-party service providers may process your data outside these jurisdictions. Where such transfers occur, we ensure that appropriate safeguards are in place in accordance with applicable data protection law.`,
  },
  {
    title: "10. Cookies",
    body: `Our website uses essential cookies to ensure the website functions correctly. We do not use third-party advertising or tracking cookies. If you prefer to disable cookies, you may do so through your browser settings, though some parts of the website may not function as intended.`,
  },
  {
    title: "11. Changes to This Policy",
    body: `We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. The date of the most recent revision will be shown at the top of this page. We encourage you to review this policy periodically.`,
  },
  {
    title: "12. Contact Us",
    body: `If you have any questions about this Privacy Policy or wish to exercise your data rights, please contact our Data Protection contact:

DigiRoute Logistics Services W.L.L
Office #7, 3rd Floor, Building 01
Muntazah Commercial Complex, Doha, Qatar

Email: info@digiroute.me
Phone: +974 4140 4004`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageBanner
          tag="Legal"
          title="Privacy"
          titleEm="Policy."
          sub="Last updated: 1 May 2026. This policy explains how DigiRoute Logistics Services W.L.L collects, uses, and protects your personal data."
          breadcrumb="Privacy Policy"
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

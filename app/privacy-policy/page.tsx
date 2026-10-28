
const sections = [
  {
    title: "1. Information We Collect",
    text: "We may receive information that you voluntarily provide when contacting us or making a business enquiry, such as your name, email address, phone number and message. The information actually collected will depend on the features enabled on this website.",
  },
  {
    title: "2. How We Use Information",
    text: "Information may be used to respond to enquiries, provide requested product or business information, improve our website and protect the website from misuse.",
  },
  {
    title: "3. Product Enquiries",
    text: "Information submitted through a product or partnership enquiry may be used to respond to that request. Do not submit passwords, financial account details or other sensitive personal information through general enquiry forms.",
  },
  {
    title: "4. Cookies and Technical Data",
    text: "Our hosting provider or services added to this website may process technical information such as browser type, device information and server logs. Any analytics or cookies will depend on the tools enabled on the live website.",
  },
  {
    title: "5. Sharing of Information",
    text: "We do not intend to sell personal information. Information may be processed by service providers needed to operate the website, or disclosed where required by applicable law. Appropriate safeguards should be applied when configuring these services.",
  },
  {
    title: "6. Data Security and Retention",
    text: "We take reasonable steps to protect information handled through our website. No online transmission or storage method can be guaranteed to be completely secure. Information should be retained only as long as reasonably necessary for its purpose or as required by law.",
  },
  {
    title: "7. Your Choices",
    text: "You may contact us to ask about personal information you have submitted or to request correction or deletion where applicable law permits. We will need verified contact details to process such requests.",
  },
  {
    title: "8. Children's Privacy",
    text: "This website is intended for a general audience and is not designed to knowingly collect personal information from children without appropriate permission where required by law.",
  },
  {
    title: "9. Changes to This Policy",
    text: "We may update this policy when website features or legal requirements change. The updated version will be published on this page with a revised effective date.",
  },
  {
    title: "10. Contact Us",
    text: "For privacy-related questions, please use the Contact Us page on this website. Verified business contact details should be added before the website is published.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main>
      <section className="section section-sage">
        <div className="container">
          <span className="eyebrow">YOUR PRIVACY</span>
          <h1 className="section-title">Privacy Policy</h1>
          <p className="section-description">
            This page explains how information may be handled when
            you visit the Bhagwati Ayurved Pharmacy website or
            contact us through its available features.
          </p>
          <p className="text-muted">
            Effective date: 29 October 2026
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p>
            Bhagwati Ayurved Pharmacy respects your privacy.
            This policy describes our intended practices for
            personal information handled through this website.
            The final policy must reflect the services and
            processes actually used by the business.
          </p>

          <div className="grid" style={{ marginTop: "28px" }}>
            {sections.map((section) => (
              <section key={section.title} className="card card-content">
                <h2 style={{ fontSize: "21px", marginTop: 0 }}>
                  {section.title}
                </h2>
                <p style={{ marginBottom: 0 }}>{section.text}</p>
              </section>
            ))}
          </div>

          <p className="text-muted" style={{ marginTop: "28px" }}>
            This template is for website setup and is not legal
            advice. Review it against your actual business practices
            and applicable Indian privacy laws before publication.
          </p>
        </div>
      </section>
    </main>
  );
}

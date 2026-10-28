
const terms = [
  {
    title: "1. Acceptance of Terms",
    text: "By accessing or using this website, you agree to these Terms & Conditions. If you do not agree, please discontinue using the website.",
  },
  {
    title: "2. Website Information",
    text: "The website is intended to provide general information about Bhagwati Ayurved Pharmacy, its products and business activities. We aim to keep information accurate and current, but errors or omissions may occur.",
  },
  {
    title: "3. Product Information",
    text: "Product descriptions, ingredients, packaging, availability and other details must be verified against the actual product label and information supplied by the business. Website content should not be treated as a substitute for the product label or professional advice.",
  },
  {
    title: "4. No Medical Advice",
    text: "Content on this website is for general informational and educational purposes only. It is not intended to diagnose, treat, cure or prevent any disease, or to replace advice from a qualified healthcare professional. Consult an appropriate professional before using a product for a health concern.",
  },
  {
    title: "5. Enquiries and Partnerships",
    text: "Submitting an enquiry does not guarantee an order, dealership, distribution arrangement or business partnership. Any commercial arrangement is subject to separate confirmation and agreed terms.",
  },
  {
    title: "6. Prices and Availability",
    text: "Unless explicitly confirmed by the business, any displayed prices, stock status or product details are indicative only. Final terms should be confirmed directly before a purchase or business transaction.",
  },
  {
    title: "7. Acceptable Use",
    text: "You must not misuse this website, attempt unauthorized access, interfere with its operation, submit unlawful content or use the website in a way that violates applicable law.",
  },
  {
    title: "8. Intellectual Property",
    text: "Website text, branding, logos, graphics and other content may be protected by intellectual property laws. Do not copy, republish or commercially use protected material without appropriate permission.",
  },
  {
    title: "9. Third-Party Services",
    text: "The website may link to third-party websites or use external services. We are not responsible for the content, availability or privacy practices of third-party services, which are governed by their own terms.",
  },
  {
    title: "10. Limitation of Liability",
    text: "To the extent permitted by applicable law, the business is not responsible for losses arising from temporary website unavailability, technical errors or reliance on unverified website information. Nothing in these terms excludes liability that cannot lawfully be excluded.",
  },
  {
    title: "11. Changes to These Terms",
    text: "These terms may be updated as the website or business practices change. Updates will be published on this page with a revised effective date.",
  },
  {
    title: "12. Governing Law and Contact",
    text: "These terms are subject to applicable laws of India. Any dispute will be handled by the competent authorities or courts as determined under applicable law. For questions, use the Contact Us page.",
  },
];

export default function TermsAndConditionsPage() {
  return (
    <main>
      <section className="section section-sage">
        <div className="container">
          <span className="eyebrow">WEBSITE GUIDELINES</span>
          <h1 className="section-title">Terms & Conditions</h1>
          <p className="section-description">
            Please read these terms before using the
            Bhagwati Ayurved Pharmacy website.
          </p>
          <p className="text-muted">
            Effective date: 29 October 2026
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p>
            These terms apply to your access to and use of
            this website. They should be reviewed and finalized
            to reflect the actual business and applicable law
            before the website is published.
          </p>

          <div className="grid" style={{ marginTop: "28px" }}>
            {terms.map((item) => (
              <section key={item.title} className="card card-content">
                <h2 style={{ fontSize: "21px", marginTop: 0 }}>
                  {item.title}
                </h2>
                <p style={{ marginBottom: 0 }}>{item.text}</p>
              </section>
            ))}
          </div>

          <p className="text-muted" style={{ marginTop: "28px" }}>
            This template is for general website setup and is not
            legal advice. Have the final terms reviewed for your
            business and applicable Indian laws.
          </p>
        </div>
      </section>
    </main>
  );
}

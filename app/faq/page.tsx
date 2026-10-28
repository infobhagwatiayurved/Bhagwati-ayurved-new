
const faqs = [
  {
    question: "Bhagwati Ayurved Pharmacy kya hai?",
    answer:
      "Bhagwati Ayurved Pharmacy ki website par aap Ayurvedic products, company information aur business enquiries se judi jaankari dekh sakte hain.",
  },
  {
    question: "Products ki information kahan milegi?",
    answer:
      "Our Products page par jaakar available catalogue dekhein. Kisi product ke ingredients, pack size ya use se judi jaankari ke liye actual product label aur verified details check karein.",
  },
  {
    question: "Main product ke baare mein enquiry kaise karoon?",
    answer:
      "Contact Us page par jaakar enquiry form bhar sakte hain. Filhaal form demo hai, isliye submit ki gayi details abhi save ya send nahi hoti hain.",
  },
  {
    question: "Kya main dealership ya distribution ke liye apply kar sakta hoon?",
    answer:
      "Haan, aap Partner With Us page par business partnership, dealership ya distribution se judi enquiry ke liye ja sakte hain. Partnership ki confirmation business team par nirbhar karegi.",
  },
  {
    question: "Products ki price aur availability kaise pata chalegi?",
    answer:
      "Price aur stock availability ki pushti ke liye business se directly contact karein. Jab tak verified information add nahi hoti, website par sample details ko final na samjhein.",
  },
  {
    question: "Kya Ayurvedic products sabhi ke liye safe hain?",
    answer:
      "Har product har vyakti ke liye suitable nahi hota. Product label padhein aur kisi health concern, pregnancy, existing condition ya medicine use karne ki sthiti mein qualified healthcare professional se salah lein.",
  },
  {
    question: "Ayurvlogs par kya milega?",
    answer:
      "Ayurvlogs section Ayurveda, herbal ingredients aur product-label education se judi informative articles aur videos ke liye hai. Wahan sample content ko published content samajhne se pehle verify karein.",
  },
  {
    question: "Main Bhagwati Ayurved Pharmacy se contact kaise karoon?",
    answer:
      "Website ke Contact Us page par jaayein. Verified phone number, email aur business address website par confirm hone ke baad hi use karein.",
  },
];

export default function FAQPage() {
  return (
    <main>
      <section className="section section-sage">
        <div className="container">
          <span className="eyebrow">HELP & SUPPORT</span>
          <h1 className="section-title">
            Frequently Asked Questions
          </h1>
          <p className="section-description">
            Bhagwati Ayurved Pharmacy ke baare mein aam
            sawaalon ke jawaab yahan dekhein.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid">
            {faqs.map((faq, index) => (
              <details className="card" key={faq.question}>
                <summary
                  style={{
                    cursor: "pointer",
                    fontWeight: 700,
                    padding: "20px",
                    color: "var(--charcoal)",
                  }}
                >
                  {index + 1}. {faq.question}
                </summary>

                <div style={{ padding: "0 20px 20px" }}>
                  <p style={{ margin: 0 }}>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>

          <div
            className="card card-content"
            style={{ marginTop: "32px", textAlign: "center" }}
          >
            <h2>Still have a question?</h2>
            <p className="text-muted">
              Apni enquiry ke liye hamare Contact Us page par jaayein.
            </p>
            <a href="/contact-us" className="button button-primary">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

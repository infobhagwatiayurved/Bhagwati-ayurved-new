const faqs = [
  {
    question: "Bhagwati Ayurved Pharmacy kya hai?",
    answer:
      "Bhagwati Ayurved Pharmacy Ayurvedic products ki information aur catalogue provide karne ke liye banayi gayi website hai.",
  },
  {
    question: "Main products ki information kaise paa sakta hoon?",
    answer:
      "Aap Our Products page par products browse kar sakte hain. Kisi product ke baare mein aur jaankari ke liye Contact Us page ka use karein.",
  },
  {
    question: "Kya main dealership ya partnership ke liye enquiry kar sakta hoon?",
    answer:
      "Haan, aap Partner With Us page par jaakar apni business enquiry submit kar sakte hain.",
  },
  {
    question: "Products ki price aur availability kaise pata chalegi?",
    answer:
      "Price aur availability ki pushti ke liye hamari team se contact karein. Website par dikhayi gayi information ko final confirmation samajhne se pehle verify karein.",
  },
  {
    question: "Main Bhagwati Ayurved Pharmacy se contact kaise karoon?",
    answer:
      "Contact Us page par di gayi contact information ke madhyam se humse sampark karein.",
  },
  {
    question: "Kya Ayurvedic products har kisi ke liye suitable hote hain?",
    answer:
      "Har product har vyakti ke liye suitable nahi hota. Product label padhein aur zaroorat par qualified healthcare professional se salah lein.",
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
            Bhagwati Ayurved Pharmacy ke baare mein aam sawaalon
            ke jawaab yahan dekhein.
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
                    padding: "8px",
                  }}
                >
                  {index + 1}. {faq.question}
                </summary>

                <p
                  style={{
                    padding: "8px",
                    marginBottom: 0,
                    color: "var(--charcoal)",
                  }}
                >
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

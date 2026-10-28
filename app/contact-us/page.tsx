"use client";
export default function ContactUsPage() {
  return (
    <main>
      <section className="section section-sage">
        <div className="container">
          <span className="eyebrow">GET IN TOUCH</span>
          <h1 className="section-title">Contact Us</h1>
          <p className="section-description">
            Bhagwati Ayurved Pharmacy se sampark karein.
            Product information, business enquiries aur
            partnership ke liye humse baat karein.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div className="card card-content">
              <h2>Contact Information</h2>
              <p className="text-muted">
                Hamari verified contact details jald yahan
                add ki jayengi.
              </p>

              <div style={{ marginTop: "24px" }}>
                <h3>Email</h3>
                <p>
                  Apni enquiry ke liye neeche diye gaye
                  form ka use karein.
                </p>

                <h3>Business Enquiries</h3>
                <p>
                  Distribution, dealership aur retail
                  partnership ke liye Partner With Us page
                  dekhein.
                </p>

                <h3>Office Address</h3>
                <p>Verified business address jald add hoga.</p>
              </div>
            </div>

            <div className="card card-content">
              <h2>Send an Enquiry</h2>
              <p className="text-muted">
                Neeche apni enquiry ki details bharein.
              </p>

              <form
                action="/contact-us"
                method="get"
                onSubmit={(event) => {
                  event.preventDefault();
                  alert(
                    "Thank you! Contact form ko active karne ke liye backend integration abhi baaki hai."
                  );
                }}
              >
                <div style={{ marginBottom: "16px" }}>
                  <label htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Apna naam likhein"
                    required
                  />
                </div>

                <div style={{ marginBottom: "16px" }}>
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Apna email likhein"
                    required
                  />
                </div>

                <div style={{ marginBottom: "16px" }}>
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Apna phone number"
                  />
                </div>

                <div style={{ marginBottom: "20px" }}>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Apni enquiry likhein"
                    required
                  />
                </div>

                <button className="button button-primary" type="submit">
                  Submit Enquiry
                </button>

                <p className="text-muted" style={{ fontSize: "13px" }}>
                  Note: Yeh abhi demo form hai. Details abhi
                  email ya database mein save nahi hongi.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

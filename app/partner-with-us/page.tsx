
"use client";

import { useState } from "react";

export default function PartnerWithUsPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      <section className="section section-sage">
        <div className="container">
          <span className="eyebrow">PARTNERSHIP ENQUIRIES</span>
          <h1 className="section-title">Partner With Us</h1>
          <p className="section-description">
            Bhagwati Ayurved Pharmacy ke saath business partnership ke
            potential opportunities par baat karne ke liye humse sampark karein.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-3">
          <article className="card card-content">
            <h2>Distributors</h2>
            <p className="text-muted">
              Distribution opportunities ke baare mein jaankari ke liye enquiry karein.
            </p>
          </article>

          <article className="card card-content">
            <h2>Retailers</h2>
            <p className="text-muted">
              Product catalogue aur business enquiries ke liye humse baat karein.
            </p>
          </article>

          <article className="card card-content">
            <h2>Business Enquiries</h2>
            <p className="text-muted">
              Apni business requirements share karein, hamari team aapse sampark karegi.
            </p>
          </article>
        </div>
      </section>

      <section className="section section-sage">
        <div className="container" style={{ maxWidth: "760px" }}>
          <h2 className="section-title">Send a Partnership Enquiry</h2>
          <p className="section-description">
            Neeche apni basic details bharein.
          </p>

          {submitted ? (
            <div className="card card-content" role="status">
              <h3>Form demo complete</h3>
              <p>
                Aapki details is demo form se kahin send nahi hui hain.
                Live enquiry submission ke liye database integration abhi
                configure karna baaki hai.
              </p>
              <button
                className="button"
                type="button"
                onClick={() => setSubmitted(false)}
              >
                Form dobara bharein
              </button>
            </div>
          ) : (
            <form
              className="card card-content"
              onSubmit={handleSubmit}
              style={{ display: "grid", gap: "16px" }}
            >
              <div>
                <label htmlFor="partner-name">Full Name *</label>
                <input id="partner-name" name="name" required />
              </div>

              <div>
                <label htmlFor="partner-business">Business Name</label>
                <input id="partner-business" name="businessName" />
              </div>

              <div>
                <label htmlFor="partner-mobile">Mobile Number *</label>
                <input
                  id="partner-mobile"
                  name="mobile"
                  type="tel"
                  inputMode="tel"
                  required
                />
              </div>

              <div>
                <label htmlFor="partner-email">Email Address</label>
                <input id="partner-email" name="email" type="email" />
              </div>

              <div>
                <label htmlFor="partner-city">City / State *</label>
                <input id="partner-city" name="city" required />
              </div>

              <div>
                <label htmlFor="partner-type">Partnership Type *</label>
                <select id="partner-type" name="type" required defaultValue="">
                  <option value="" disabled>Select an option</option>
                  <option value="Distributor">Distributor</option>
                  <option value="Retailer">Retailer</option>
                  <option value="Other">Other business enquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="partner-message">Message</label>
                <textarea id="partner-message" name="message" />
              </div>

              <button className="button" type="submit">
                Submit Demo Form
              </button>

              <p className="text-muted" style={{ fontSize: "13px" }}>
                Note: Abhi ye demo form hai. Data save ya send nahi hota.
                Live form ke liye secure backend aur database connect karenge.
              </p>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}

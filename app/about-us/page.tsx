
export default function AboutUsPage() {
  return (
    <main>
      <section className="section section-sage">
        <div className="container">
          <span className="eyebrow">ABOUT US</span>
          <h1 className="section-title">
            Bhagwati Ayurved Pharmacy
          </h1>
          <p className="section-description">
            Welcome to Bhagwati Ayurved Pharmacy. Explore our Ayurvedic
            product catalogue and learn more about our company, our values,
            and our approach to product information and quality.
          </p>
          <a className="button" href="/products">
            Explore Our Products →
          </a>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-3">
          <article className="card card-content">
            <h2>Who We Are</h2>
            <p className="text-muted">
              Bhagwati Ayurved Pharmacy brings its product information
              together in one place so visitors can explore our range
              and contact our team.
            </p>
          </article>

          <article className="card card-content">
            <h2>Our Mission</h2>
            <p className="text-muted">
              Our aim is to make our company and product information
              accessible and help customers and potential business partners
              connect with us.
            </p>
          </article>

          <article className="card card-content">
            <h2>Our Values</h2>
            <p className="text-muted">
              We value clear communication, responsible product information,
              customer service, and respect for Ayurvedic traditions.
            </p>
          </article>
        </div>
      </section>

      <section className="section section-sage">
        <div className="container">
          <h2 className="section-title">Our Approach to Quality</h2>
          <p className="section-description">
            Product details, ingredients, manufacturing information,
            certifications, and other claims should be checked against
            approved product labels and company records before publication.
          </p>
          <a className="button button-gold" href="/contact-us">
            Contact Our Team
          </a>
        </div>
      </section>
    </main>
  );
}

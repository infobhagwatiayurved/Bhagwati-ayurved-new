
const featuredProducts = [
  {
    name: "Herbal Wellness",
    category: "Daily Wellness",
    description:
      "Discover Ayurvedic products made for your everyday wellness routine.",
  },
  {
    name: "Traditional Care",
    category: "Personal Care",
    description:
      "Explore products inspired by traditional Ayurvedic care practices.",
  },
  {
    name: "Herbal Essentials",
    category: "Herbal Range",
    description:
      "Browse our collection of herbal essentials and learn about each product.",
  },
];

export default function HomePage() {
  return (
    <main>
      <header className="site-header">
        <div className="container" style={styles.header}>
          <a href="/" style={styles.brand}>
            <span style={styles.logoMark}>B</span>
            <span>
              <strong>Bhagwati Ayurved</strong>
              <small style={styles.brandSub}>PHARMACY</small>
            </span>
          </a>

          <nav style={styles.nav}>
            <a href="/">Home</a>
            <a href="/about-us">About Us</a>
            <a href="/products">Products</a>
            <a href="/partner-with-us">Partner With Us</a>
            <a href="/ayurvlogs">Ayurvlogs</a>
            <a href="/faq">FAQ</a>
            <a href="/contact-us">Contact</a>
          </nav>
        </div>
      </header>

      <section style={styles.hero}>
        <div className="container" style={styles.heroGrid}>
          <div>
            <span className="eyebrow">
              WELCOME TO BHAGWATI AYURVED PHARMACY
            </span>

            <h1 style={styles.heading}>
              Tradition of Ayurveda,
              <br />
              <span style={{ color: "var(--olive)" }}>
                Care for Everyday Life.
              </span>
            </h1>

            <p style={styles.intro}>
              Explore our Ayurvedic product catalogue, learn about our
              company, and connect with us for product and business enquiries.
            </p>

            <div style={styles.actions}>
              <a className="button" href="/products">
                Explore Products →
              </a>
              <a className="button button-gold" href="/about-us">
                About Our Company
              </a>
            </div>

            <p style={styles.note}>
              Discover our range and get in touch with our team.
            </p>
          </div>

          <div style={styles.heroArt}>
            <div style={styles.artCircle}>
              <span style={styles.artLeaf}>❧</span>
              <p style={styles.artTitle}>BHAGWATI</p>
              <p style={styles.artSubtitle}>AYURVED PHARMACY</p>
              <div style={styles.artLine} />
              <p style={styles.artText}>Inspired by Ayurveda</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center">
            <span className="eyebrow">GET TO KNOW US</span>
            <h2 className="section-title">Welcome to Our Ayurvedic World</h2>
            <p className="section-description" style={styles.centerText}>
              Bhagwati Ayurved Pharmacy invites you to explore our company,
              browse our product range, and learn more about our approach
              to Ayurvedic products.
            </p>
          </div>

          <div className="grid grid-3" style={styles.infoGrid}>
            <article className="card card-content">
              <span style={styles.cardIcon}>✿</span>
              <h3>Our Company</h3>
              <p className="text-muted">
                Learn about our background, values, and commitment to quality.
              </p>
              <a href="/about-us" style={styles.textLink}>
                Know About Us →
              </a>
            </article>

            <article className="card card-content">
              <span style={styles.cardIcon}>❋</span>
              <h3>Our Products</h3>
              <p className="text-muted">
                Browse our catalogue and discover detailed product information.
              </p>
              <a href="/products" style={styles.textLink}>
                View Catalogue →
              </a>
            </article>

            <article className="card card-content">
              <span style={styles.cardIcon}>⌘</span>
              <h3>Partner With Us</h3>
              <p className="text-muted">
                Contact our team to discuss potential business partnerships.
              </p>
              <a href="/partner-with-us" style={styles.textLink}>
                Explore Partnership →
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-sage">
        <div className="container">
          <div style={styles.sectionHeader}>
            <div>
              <span className="eyebrow">EXPLORE OUR CATALOGUE</span>
              <h2 className="section-title">Discover Our Product Range</h2>
              <p className="section-description">
                Explore our catalogue and visit the products page for
                available products and their verified details.
              </p>
            </div>
            <a className="button" href="/products">
              View All Products →
            </a>
          </div>

          <div className="grid grid-3">
            {featuredProducts.map((product) => (
              <article className="card" key={product.name}>
                <div style={styles.productVisual}>
                  <span style={styles.productSymbol}>✿</span>
                  <span style={styles.productLabel}>AYURVEDIC COLLECTION</span>
                </div>
                <div className="card-content">
                  <span className="eyebrow">{product.category}</span>
                  <h3>{product.name}</h3>
                  <p className="text-muted">{product.description}</p>
                  <a href="/products" style={styles.textLink}>
                    Explore Catalogue →
                  </a>
                </div>
              </article>
            ))}
          </div>

          <p style={styles.disclaimer}>
            These are introductory catalogue categories, not confirmed
            product names. Actual products and their details will be added
            after verification.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={styles.partnerBanner}>
            <div>
              <span className="eyebrow">GROW WITH US</span>
              <h2 style={styles.partnerHeading}>
                Interested in Working Together?
              </h2>
              <p>
                Connect with Bhagwati Ayurved Pharmacy to enquire about
                potential partnership opportunities.
              </p>
            </div>
            <a className="button button-gold" href="/partner-with-us">
              Partnership Enquiry →
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <div className="grid grid-3">
            <div>
              <h3>Bhagwati Ayurved Pharmacy</h3>
              <p>
                Explore our Ayurvedic product catalogue and learn more
                about our company.
              </p>
            </div>

            <div>
              <h3>Quick Links</h3>
              <p><a href="/about-us">About Us</a></p>
              <p><a href="/products">Our Products</a></p>
              <p><a href="/partner-with-us">Partner With Us</a></p>
              <p><a href="/ayurvlogs">Ayurvlogs</a></p>
            </div>

            <div>
              <h3>Help & Information</h3>
              <p><a href="/faq">Frequently Asked Questions</a></p>
              <p><a href="/contact-us">Contact Us</a></p>
              <p><a href="/privacy-policy">Privacy Policy</a></p>
              <p><a href="/terms-and-conditions">Terms & Conditions</a></p>
            </div>
          </div>

          <div style={styles.footerBottom}>
            © {new Date().getFullYear()} Bhagwati Ayurved Pharmacy.
            All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "24px",
    paddingTop: "16px",
    paddingBottom: "16px",
    flexWrap: "wrap",
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "var(--charcoal)",
  },
  logoMark: {
    display: "grid",
    placeItems: "center",
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    background: "var(--olive)",
    color: "var(--white)",
    fontSize: "25px",
    fontWeight: 700,
  },
  brandSub: {
    display: "block",
    letterSpacing: "3px",
    fontSize: "10px",
  },
  nav: {
    display: "flex",
    gap: "14px",
    alignItems: "center",
    flexWrap: "wrap",
    fontSize: "13px",
    fontWeight: 600,
  },
  hero: {
    background:
      "linear-gradient(120deg, var(--sage) 0%, var(--white) 70%)",
    padding: "64px 0",
  },
  heroGrid: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1.2fr) minmax(240px, 0.8fr)",
    alignItems: "center",
    gap: "36px",
  },
  heading: {
    fontSize: "clamp(36px, 5vw, 58px)",
    lineHeight: 1.13,
    letterSpacing: "-2px",
    margin: "18px 0",
  },
  intro: {
    maxWidth: "590px",
    fontSize: "17px",
    color: "var(--muted)",
  },
  actions: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
    marginTop: "26px",
  },
  note: {
    fontSize: "12px",
    color: "var(--muted)",
    marginTop: "20px",
  },
  heroArt: {
    display: "grid",
    placeItems: "center",
    minHeight: "340px",
  },
  artCircle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "min(300px, 100%)",
    aspectRatio: "1",
    borderRadius: "50%",
    border: "2px solid var(--olive)",
    outline: "8px solid var(--gold)",
    background: "var(--white)",
    textAlign: "center",
    padding: "24px",
  },
  artLeaf: {
    fontSize: "68px",
    color: "var(--olive)",
    lineHeight: 1,
  },
  artTitle: {
    fontSize: "23px",
    fontWeight: 800,
    letterSpacing: "2px",
    margin: "12px 0 0",
  },
  artSubtitle: {
    fontSize: "11px",
    letterSpacing: "3px",
    margin: "4px 0",
  },
  artLine: {
    width: "70px",
    height: "2px",
    background: "var(--gold)",
    margin: "12px",
  },
  artText: {
    color: "var(--muted)",
    fontSize: "13px",
  },
  centerText: {
    margin: "0 auto",
  },
  infoGrid: {
    marginTop: "36px",
  },
  cardIcon: {
    color: "var(--olive)",
    fontSize: "34px",
  },
  textLink: {
    display: "inline-block",
    marginTop: "8px",
    color: "var(--olive)",
    fontWeight: 700,
  },
  sectionHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "end",
    gap: "20px",
    flexWrap: "wrap",
    marginBottom: "30px",
  },
  productVisual: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "180px",
    background: "var(--sage)",
    color: "var(--olive)",
  },
  productSymbol: {
    fontSize: "58px",
  },
  productLabel: {
    fontSize: "10px",
    letterSpacing: "2px",
    fontWeight: 700,
  },
  disclaimer: {
    fontSize: "12px",
    color: "var(--muted)",
    marginTop: "22px",
  },
  partnerBanner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "24px",
    padding: "34px",
    borderRadius: "14px",
    background: "var(--olive)",
    color: "var(--white)",
  },
  partnerHeading: {
    margin: "10px 0",
    fontSize: "clamp(24px, 4vw, 36px)",
  },
  footerBottom: {
    borderTop: "1px solid rgba(255,255,255,0.2)",
    marginTop: "30px",
    paddingTop: "20px",
    fontSize: "13px",
  },
};
      

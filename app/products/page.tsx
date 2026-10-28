"use client";

import { useState } from "react";

const products = [
  {
    name: "Sample Product 1",
    category: "Herbal Care",
    description:
      "Yahan verified product description aur label ke anusaar details dikhengi.",
  },
  {
    name: "Sample Product 2",
    category: "Daily Wellness",
    description:
      "Product ke actual ingredients aur pack details verify hone par add ki jayengi.",
  },
  {
    name: "Sample Product 3",
    category: "Personal Care",
    description:
      "Hamare catalogue mein uplabdh product information yahan dikhayi jayegi.",
  },
  {
    name: "Sample Product 4",
    category: "Herbal Care",
    description:
      "Product ki sahi jaankari aur availability ke liye humse sampark karein.",
  },
  {
    name: "Sample Product 5",
    category: "Daily Wellness",
    description:
      "Verified catalogue details jald hi yahan update ki jayengi.",
  },
  {
    name: "Sample Product 6",
    category: "Personal Care",
    description:
      "Actual product details confirm hone ke baad is card ko update karenge.",
  },
];

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...Array.from(new Set(products.map((product) => product.category))),
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <main>
      <section className="section section-sage">
        <div className="container">
          <span className="eyebrow">OUR CATALOGUE</span>
          <h1 className="section-title">Our Ayurvedic Products</h1>
          <p className="section-description">
            Bhagwati Ayurved Pharmacy ke product catalogue ko explore karein.
            Product ki verified jaankari ke liye humse sampark karein.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <label htmlFor="product-search">
            <strong>Search Products</strong>
          </label>

          <input
            id="product-search"
            type="search"
            placeholder="Product ka naam search karein..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            style={{ marginTop: "8px", marginBottom: "20px" }}
          />

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginBottom: "28px",
            }}
          >
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                aria-pressed={category === item}
                style={{
                  padding: "10px 16px",
                  borderRadius: "8px",
                  border: "1px solid var(--olive)",
                  background:
                    category === item ? "var(--olive)" : "var(--white)",
                  color:
                    category === item
                      ? "var(--white)"
                      : "var(--charcoal)",
                }}
              >
                {item}
              </button>
            ))}
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-3">
              {filteredProducts.map((product) => (
                <article className="card" key={product.name}>
                  <div
                    style={{
                      minHeight: "170px",
                      display: "grid",
                      placeItems: "center",
                      background: "var(--sage)",
                      color: "var(--olive)",
                      fontSize: "48px",
                    }}
                    aria-hidden="true"
                  >
                    ✿
                  </div>

                  <div className="card-content">
                    <span className="eyebrow">{product.category}</span>
                    <h2 style={{ fontSize: "21px" }}>{product.name}</h2>
                    <p className="text-muted">{product.description}</p>
                    <a
                      className="button"
                      href="/contact-us"
                      style={{ marginTop: "12px" }}
                    >
                      Product Enquiry
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p>Koi product nahi mila. Doosra naam search karein.</p>
          )}

          <p className="text-muted" style={{ marginTop: "28px" }}>
            Note: Ye sample cards hain, asli products ki list nahi.
            Inhe verified product names aur details se replace karna hai.
          </p>
        </div>
      </section>
    </main>
  );
}

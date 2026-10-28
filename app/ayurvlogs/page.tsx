
"use client";

import { useState } from "react";

const articles = [
  {
    title: "Introduction to Ayurveda",
    category: "Ayurveda Basics",
    description:
      "Ayurveda ke basic concepts aur traditional wellness approach ka parichay.",
    type: "Article",
  },
  {
    title: "Understanding Herbal Ingredients",
    category: "Herbal Education",
    description:
      "Herbal ingredients ke baare mein sahi aur bharosemand information kaise padhein.",
    type: "Article",
  },
  {
    title: "How to Read a Product Label",
    category: "Product Education",
    description:
      "Ingredients, pack size, storage aur label instructions ko samajhne ke tips.",
    type: "Video",
  },
];

export default function AyurvlogsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...Array.from(new Set(articles.map((item) => item.category))),
  ];

  const filteredArticles = articles.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || item.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <main>
      <section className="section section-sage">
        <div className="container">
          <span className="eyebrow">LEARN WITH US</span>
          <h1 className="section-title">Ayurvlogs & Articles</h1>
          <p className="section-description">
            Ayurveda, herbal ingredients aur product-label education se
            judi informative content explore karein.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <label htmlFor="ayurvlog-search">
            <strong>Search content</strong>
          </label>

          <input
            id="ayurvlog-search"
            type="search"
            placeholder="Video ya article search karein..."
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
                  padding: "10px 14px",
                  border: "1px solid var(--olive)",
                  borderRadius: "8px",
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

          {filteredArticles.length > 0 ? (
            <div className="grid grid-3">
              {filteredArticles.map((item) => (
                <article className="card" key={item.title}>
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
                    {item.type === "Video" ? "▶" : "✿"}
                  </div>

                  <div className="card-content">
                    <span className="eyebrow">{item.category}</span>
                    <h2 style={{ fontSize: "21px" }}>{item.title}</h2>
                    <p className="text-muted">{item.description}</p>
                    <span
                      style={{
                        display: "inline-block",
                        padding: "5px 10px",
                        borderRadius: "20px",
                        background: "var(--sage)",
                        color: "var(--olive)",
                        fontSize: "12px",
                        fontWeight: 700,
                      }}
                    >
                      {item.type}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p>Koi content nahi mila. Doosra keyword try karein.</p>
          )}

          <p className="text-muted" style={{ marginTop: "24px" }}>
            Note: Ye sample topics hain, published videos ya articles nahi.
            Actual content aur video links baad mein add karenge.
          </p>
        </div>
      </section>
    </main>
  );
                      }

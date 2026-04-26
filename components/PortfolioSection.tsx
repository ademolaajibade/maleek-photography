"use client";
import { useState } from "react";

const categories = [
  {
    title: "Birthday Portrait",
    description: "Special birthday portrait sessions capturing timeless memories",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80",
  },
  {
    title: "Celebrity Portraits",
    description: "Exclusive celebrity portrait photography capturing star power",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&q=80",
  },
  {
    title: "Wedding Portraits",
    description: "Timeless wedding portraits capturing your special day",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
  },
  {
    title: "Fashion Collection",
    description: "High fashion photography that tells a visual story",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80",
  },
  {
    title: "Family Portraits",
    description: "Warm and authentic family moments preserved forever",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191011?w=600&q=80",
  },
];

export default function PortfolioSection() {
  const [current, setCurrent] = useState(0);
  const active = categories[current];

  return (
    <section
      id="portfolio"
      className="py-24 px-6 overflow-hidden"
      style={{ background: "var(--light-bg)" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Label */}
        <div className="flex items-center gap-3 mb-14">
          <span
            className="block w-10 h-0.5"
            style={{ background: "var(--accent)" }}
          />
          <span className="text-xs tracking-widest uppercase text-gray-400 font-semibold">
            Our Work
          </span>
        </div>

        {/* Split: featured image left, category list right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">

          {/* Featured image */}
          <div
            className="md:col-span-7 relative overflow-hidden rounded-sm group"
            style={{ height: "520px" }}
          >
            <img
              src={active.image}
              alt={active.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 flex flex-col justify-end p-8"
              style={{
                background:
                  "linear-gradient(transparent 35%, rgba(0,0,0,0.72) 100%)",
              }}
            >
              <h3 className="text-white text-2xl font-bold mb-1">
                {active.title}
              </h3>
              <p className="text-white/70 text-sm mb-5">{active.description}</p>
              <button className="outline-btn self-start text-xs">
                View Gallery &rarr;
              </button>
            </div>
          </div>

          {/* Category list */}
          <div className="md:col-span-5 flex flex-col">
            <div className="flex justify-between items-baseline mb-5">
              <h2 className="text-2xl md:text-3xl font-bold">Portfolio</h2>
              <span className="text-xs text-gray-400 tracking-widest">
                {String(current + 1).padStart(2, "0")} /{" "}
                {String(categories.length).padStart(2, "0")}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              {categories.map((cat, i) => (
                <button
                  key={cat.title}
                  onClick={() => setCurrent(i)}
                  className="flex items-center gap-4 p-3 rounded-sm text-left transition-all duration-200"
                  style={{
                    background: i === current ? "white" : "transparent",
                    boxShadow:
                      i === current ? "0 1px 6px rgba(0,0,0,0.07)" : "none",
                  }}
                >
                  <div className="w-14 h-14 rounded-sm overflow-hidden shrink-0">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-sm font-bold truncate"
                      style={{ color: i === current ? "#1a1a1a" : "#9ca3af" }}
                    >
                      {cat.title}
                    </p>
                    <p className="text-xs text-gray-400 truncate mt-0.5">
                      {cat.description}
                    </p>
                  </div>
                  {i === current && (
                    <span
                      className="w-1 h-8 rounded-full shrink-0"
                      style={{ background: "var(--accent)" }}
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="mt-6">
              <a href="#" className="accent-btn text-sm block text-center">
                Explore Full Gallery
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

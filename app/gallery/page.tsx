"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = [
  {
    slug: "fashion",
    title: "Fashion Collection",
    description: "Professional fashion photography showcasing style and elegance.",
    cover: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
    photos: [
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80",
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&q=80",
      "https://images.unsplash.com/photo-1581338834647-b0fb40704e21?w=600&q=80",
    ],
  },
  {
    slug: "celebrity",
    title: "Celebrity Portraits",
    description: "Exclusive celebrity portrait photography capturing star power.",
    cover: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=80",
    photos: [
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&q=80",
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&q=80",
    ],
  },
  {
    slug: "convocation",
    title: "Convocation",
    description: "Memorable graduation photography capturing academic achievements.",
    cover: "https://images.unsplash.com/photo-1627556704302-624286467c65?w=800&q=80",
    photos: [
      "https://images.unsplash.com/photo-1627556704302-624286467c65?w=600&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80",
      "https://images.unsplash.com/photo-1604134967494-8a9ed3adea0d?w=600&q=80",
    ],
  },
  {
    slug: "birthday",
    title: "Birthday Portrait",
    description: "Special birthday portrait sessions celebrating milestones.",
    cover: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
    photos: [
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80",
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&q=80",
      "https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?w=600&q=80",
      "https://images.unsplash.com/photo-1602631985686-1bb0e6a8696e?w=600&q=80",
      "https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?w=600&q=80",
    ],
  },
  {
    slug: "family",
    title: "Family Portrait",
    description: "Heartwarming family portraits capturing precious moments.",
    cover: "https://images.unsplash.com/photo-1511895426328-dc8714191011?w=800&q=80",
    photos: [
      "https://images.unsplash.com/photo-1511895426328-dc8714191011?w=600&q=80",
      "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?w=600&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
      "https://images.unsplash.com/photo-1470116945706-e6bf5d5a53ca?w=600&q=80",
      "https://images.unsplash.com/photo-1484665754804-74b091211472?w=600&q=80",
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
    ],
  },
  {
    slug: "maternity",
    title: "Maternity",
    description: "Beautiful maternity photography celebrating motherhood.",
    cover: "https://images.unsplash.com/photo-1578496781197-b85385e38b3f?w=800&q=80",
    photos: [
      "https://images.unsplash.com/photo-1578496781197-b85385e38b3f?w=600&q=80",
      "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&q=80",
      "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&q=80",
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&q=80",
    ],
  },
  {
    slug: "wedding",
    title: "Wedding Portraits",
    description: "Timeless wedding portraits capturing the joy and love of your special day.",
    cover: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    photos: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80",
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=600&q=80",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80",
      "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=600&q=80",
      "https://images.unsplash.com/photo-1591604021695-0c69b7c05981?w=600&q=80",
    ],
  },
  {
    slug: "pre-wedding",
    title: "Pre Wedding Portraits",
    description: "Romantic pre-wedding portraits to celebrate your journey together.",
    cover: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80",
    photos: [
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=80",
      "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600&q=80",
      "https://images.unsplash.com/photo-1583939411023-14783179e581?w=600&q=80",
      "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=600&q=80",
      "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=600&q=80",
    ],
  },
  {
    slug: "events",
    title: "Events Candids",
    description: "Candid event photography capturing genuine moments and emotions.",
    cover: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    photos: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80",
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600&q=80",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80",
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&q=80",
    ],
  },
  {
    slug: "call-to-bar",
    title: "Call to Bar",
    description: "Special collection from the Call to Bar event.",
    cover: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=800&q=80",
    photos: [
      "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=600&q=80",
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",
      "https://images.unsplash.com/photo-1575505586569-646b2ca898fc?w=600&q=80",
      "https://images.unsplash.com/photo-1593115057322-e94b77572f20?w=600&q=80",
    ],
  },
];

type Category = (typeof categories)[number];

export default function GalleryPage() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [lightbox, setLightbox] = useState<string | null>(null);

  const activeCategory = categories.find((c) => c.slug === activeSlug) ?? null;

  function selectCategory(cat: Category) {
    setActiveSlug(cat.slug);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function reset() {
    setActiveSlug(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <Navbar />

      <main className="pt-20 min-h-screen bg-white">

        {/* Page header */}
        <div className="text-center py-14 px-6" style={{ background: "var(--light-bg)" }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Our Portfolio</h1>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Explore our diverse collection of photography work, capturing
            life&apos;s precious moments with artistry and authenticity.
          </p>
        </div>

        {/* Filter tabs */}
        <div
          className="sticky top-[64px] z-30 bg-white border-b border-gray-100 px-6 py-3"
        >
          <div className="max-w-6xl mx-auto flex flex-wrap gap-2">
            {/* All button */}
            <button
              onClick={reset}
              className="px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200"
              style={{
                background: activeSlug === null ? "var(--accent)" : "var(--light-bg)",
                color: activeSlug === null ? "white" : "#6b7280",
              }}
            >
              All
            </button>

            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => selectCategory(cat)}
                className="px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200"
                style={{
                  background: activeSlug === cat.slug ? "var(--accent)" : "var(--light-bg)",
                  color: activeSlug === cat.slug ? "white" : "#6b7280",
                }}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-12">

          {/* ── CATEGORY OVERVIEW (All) ── */}
          {activeCategory === null && (
            <>
              <p className="text-xs text-gray-400 mb-8 uppercase tracking-widest">
                {categories.length} Categories
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {categories.map((cat) => (
                  <button
                    key={cat.slug}
                    onClick={() => selectCategory(cat)}
                    className="relative overflow-hidden rounded-sm group text-left"
                    style={{ height: "280px" }}
                  >
                    <img
                      src={cat.cover}
                      alt={cat.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 flex flex-col justify-end p-5"
                      style={{
                        background:
                          "linear-gradient(transparent 30%, rgba(0,0,0,0.72) 100%)",
                      }}
                    >
                      <p className="text-white font-bold text-base leading-tight">
                        {cat.title}
                      </p>
                      <p className="text-white/70 text-xs mt-1 mb-3">
                        {cat.description}
                      </p>
                      <span className="text-xs border border-white text-white px-3 py-1 rounded self-start group-hover:bg-white group-hover:text-black transition-colors duration-200">
                        View Gallery &rarr;
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </>
          )}

          {/* ── SINGLE CATEGORY PHOTOS ── */}
          {activeCategory !== null && (
            <>
              {/* Back + heading */}
              <div className="flex items-center gap-4 mb-8">
                <button
                  onClick={reset}
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 transition-colors"
                >
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M19 12H5M12 5l-7 7 7 7" />
                  </svg>
                  All Categories
                </button>
                <span className="text-gray-200">/</span>
                <span className="text-sm font-semibold text-gray-800">
                  {activeCategory.title}
                </span>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-1">
                  {activeCategory.title}
                </h2>
                <p className="text-gray-500 text-sm">{activeCategory.description}</p>
              </div>

              <p className="text-xs text-gray-400 mb-6 uppercase tracking-widest">
                {activeCategory.photos.length} Photos
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {activeCategory.photos.map((photo, i) => (
                  <button
                    key={i}
                    onClick={() => setLightbox(photo)}
                    className="relative overflow-hidden rounded-sm group"
                    style={{ height: "260px" }}
                  >
                    <img
                      src={photo}
                      alt={`${activeCategory.title} ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      style={{ background: "rgba(0,0,0,0.35)" }}>
                      <svg width="28" height="28" fill="none" stroke="white" strokeWidth="1.8" viewBox="0 0 24 24">
                        <circle cx="11" cy="11" r="8" />
                        <path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
                      </svg>
                    </div>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </main>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{ background: "rgba(0,0,0,0.92)" }}
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 text-white opacity-70 hover:opacity-100 transition"
            aria-label="Close"
          >
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={lightbox}
            alt="Full size"
            className="max-w-full max-h-[90vh] object-contain rounded-sm"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </>
  );
}

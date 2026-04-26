"use client";
import { useState } from "react";

const testimonials = [
  {
    name: "Ademola Ajibade",
    role: "Graduation Client",
    text: "Working with Maleek for my graduation was the best call I made. He didn't just take photos — he felt the room, caught every real moment, and gave me images I'll still be looking at when I'm old. You have my heart on lockdown bro.",
  },
  {
    name: "Chioma Okonkwo",
    role: "Portrait Session",
    text: "I walked in nervous and left completely blown away. Somehow he made me forget there was a camera in the room — and the photos showed a version of me I'd never seen before. Honest magic.",
  },
  {
    name: "Oluwaseun Abisofe",
    role: "Family Photoshoot",
    text: "Our toddler ran circles around everyone and he still got the most perfect shots. The whole family laughed the entire time, and every single photo felt alive. That's rare.",
  },
  {
    name: "Folake Adeyemi",
    role: "Engagement Photos",
    text: "Every shot looked like a scene from a film we'd always wanted to live in. The creativity, the attention to detail — it turned our engagement into something we'll show our grandchildren.",
  },
];

function Stars({ size = 14 }: { size?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 20 20" fill="#e07b39">
          <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.44.91-5.32L2.27 6.62l5.34-.78z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const featured = testimonials[active];
  const rest = testimonials.filter((_, i) => i !== active);

  return (
    <section
      id="testimonials"
      className="py-24 px-6 overflow-hidden"
      style={{ background: "var(--light-bg)" }}
    >
      <div className="max-w-5xl mx-auto">

        {/* Label */}
        <div className="flex items-center gap-3 mb-14">
          <span className="block w-10 h-0.5" style={{ background: "var(--accent)" }} />
          <span className="text-xs tracking-widest uppercase text-gray-400 font-semibold">
            What Clients Say
          </span>
        </div>

        {/* Mosaic grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">

          {/* Featured card — large */}
          <div
            className="md:col-span-7 bg-white rounded-sm shadow-sm p-8 flex flex-col justify-between"
            style={{ minHeight: "360px" }}
          >
            <div>
              {/* Open quote + stars row */}
              <div className="flex items-start justify-between mb-4">
                <span
                  className="font-serif text-5xl leading-none select-none"
                  style={{ color: "var(--accent)" }}
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <Stars size={15} />
              </div>

              <p className="text-base md:text-lg font-medium leading-relaxed text-gray-800">
                {featured.text}
              </p>
            </div>

            {/* Footer */}
            <div
              className="flex items-center gap-3 mt-8 pt-6"
              style={{ borderTop: "1px solid #f3f4f6" }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                style={{ background: "var(--accent)" }}
              >
                {featured.name[0]}
              </div>
              <div>
                <p className="font-bold text-sm">{featured.name}</p>
                <p className="text-xs text-gray-400 mt-0.5">{featured.role}</p>
              </div>
            </div>
          </div>

          {/* Right: 3 compact preview cards */}
          <div className="md:col-span-5 flex flex-col gap-4">
            {rest.map((t) => {
              const idx = testimonials.indexOf(t);
              return (
                <button
                  key={t.name}
                  onClick={() => setActive(idx)}
                  className="bg-white rounded-sm shadow-sm p-5 text-left group transition-all duration-200 hover:shadow-md"
                >
                  {/* Name row */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                        style={{ background: "#f3f4f6", color: "#6b7280" }}
                      >
                        {t.name[0]}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-700">{t.name}</p>
                        <p className="text-xs text-gray-400">{t.role}</p>
                      </div>
                    </div>
                    <span
                      className="text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0"
                      style={{ color: "var(--accent)" }}
                    >
                      Read &rarr;
                    </span>
                  </div>

                  {/* Truncated quote */}
                  <p
                    className="text-xs text-gray-500 leading-relaxed"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    &ldquo;{t.text}&rdquo;
                  </p>

                  {/* Stars */}
                  <div className="mt-3">
                    <Stars size={11} />
                  </div>
                </button>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

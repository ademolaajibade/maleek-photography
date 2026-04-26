"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    image: "/p3.png",
  },
  {
    id: 2,
    image: "/p4.png",
  },
  {
    id: 3,
    image: "/p5.png",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      80000,
    );
    return () => clearInterval(interval);
  }, []);

  console.log({ data });

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center text-white"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${data[currentSlide].image}) center/cover no-repeat`,
      }}
    >
      {/* Scroll indicator */}
      <div className="absolute bottom-8 flex flex-col items-center gap-1 opacity-70">
        <div className="w-px h-8 bg-white" />
        <span className="text-xs tracking-widest uppercase">Scroll</span>
      </div>

      <div className="max-w-2xl px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
          Maleek Photography
        </h1>
        <p className="text-sm md:text-base font-light leading-relaxed mb-8 opacity-90">
          Specializing in capturing unforgettable moments: from high-end fashion
          and celebrity portraits to life&apos;s milestones, such as weddings,
          pregnancies, and graduations.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="#portfolio" className="outline-btn">
            View Portfolio
          </Link>
          <Link href="/book" className="accent-btn">
            Book a Session
          </Link>
        </div>
      </div>
    </section>
  );
}

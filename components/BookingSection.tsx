export default function BookingSection() {
  const steps = [
    {
      title: "Pick Your Moment",
      desc: "Browse available dates, lock in your session, and we'll handle the rest — no back-and-forth.",
    },
    {
      title: "Shape Your Story",
      desc: "Every shoot is built around you — your vision, your vibe, your people. We just bring the light.",
    },
    {
      title: "Fast in Your Hands",
      desc: "Fully edited, gallery-ready images delivered within two weeks. No waiting in the dark.",
    },
  ];

  return (
    <section id="book" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto">

        {/* Label */}
        <div className="flex items-center gap-3 mb-16">
          <span
            className="block w-10 h-0.5"
            style={{ background: "var(--accent)" }}
          />
          <span className="text-xs tracking-widest uppercase text-gray-400 font-semibold">
            How It Works
          </span>
        </div>

        {/* Split layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left: Heading + CTA */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Three Steps to<br />
              Something{" "}
              <span style={{ color: "var(--accent)" }}>Unforgettable</span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-10">
              From your first click to the moment your gallery lands in your
              inbox, we&apos;ve made every step as smooth as the shots you
              &apos;ll walk away with.
            </p>
            <a href="#contact" className="accent-btn text-sm">
              Book Your Session
            </a>
          </div>

          {/* Right: Numbered steps with connecting line */}
          <div className="flex flex-col">
            {steps.map((step, i) => (
              <div key={step.title} className="flex gap-5 items-start relative pb-10 last:pb-0">
                {/* Vertical connector */}
                {i < steps.length - 1 && (
                  <div
                    className="absolute left-5 top-11 bottom-0 w-px"
                    style={{ background: "#e5e7eb" }}
                  />
                )}

                {/* Step badge */}
                <div
                  className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{ background: "var(--accent)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Content */}
                <div className="pt-1">
                  <h3 className="font-bold text-base mb-1">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default function AboutSection() {
  const stats = [
    { value: "6+", label: "Services" },
    { value: "100+", label: "Happy Clients" },
    { value: "500+", label: "Photos Delivered" },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto">

        {/* Main layout: large heading left, image right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-14">

          {/* Left: Big heading + body */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
              Every Frame<br />
              Has a{" "}
              <span style={{ color: "var(--accent)" }}>Heartbeat</span>
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Maleek Photography was born from one simple belief — that the
              moments you can&apos;t hold onto are the ones worth capturing
              forever. We don&apos;t just take photos; we chase the light, read
              the room, and wait for the split second that says everything words
              never could.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              From the quiet pride of a convocation morning to the electric
              energy of a fashion set, from Call to Bar celebrations to the
              unscripted laughter of family — we show up with intention and
              leave you with imagery that still moves you ten years from now.
            </p>
          </div>

          {/* Right: Image, slightly taller, offset upward */}
          <div className="relative md:-mt-10">
            {/* Decorative accent block behind image */}
            <div
              className="absolute -bottom-4 -right-4 w-2/3 h-2/3 rounded-sm"
              style={{ background: "var(--light-bg)", zIndex: 0 }}
            />
            <img
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80"
              alt="Maleek Photographer at work"
              className="relative w-full rounded-sm object-cover"
              style={{ maxHeight: "460px", zIndex: 1 }}
            />
          </div>
        </div>

        {/* Stats bar — full width, separated by thin lines */}
        <div
          className="grid grid-cols-3 pt-10"
          style={{ borderTop: "1px solid #e5e7eb" }}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={i !== 0 ? "pl-8" : ""}
              style={i !== 0 ? { borderLeft: "1px solid #e5e7eb" } : {}}
            >
              <p className="text-3xl font-bold" style={{ color: "var(--accent)" }}>
                {s.value}
              </p>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest">
                {s.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

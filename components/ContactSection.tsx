export default function ContactSection() {
  return (
    <section id="contact" className="bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5">

          {/* Left: Dark info panel */}
          <div
            className="md:col-span-2 px-10 py-16 flex flex-col justify-between"
            style={{ background: "var(--dark)" }}
          >
            <div>
              {/* Label */}
              <div className="flex items-center gap-3 mb-10">
                <span
                  className="block w-8 h-0.5"
                  style={{ background: "var(--accent)" }}
                />
                <span className="text-xs tracking-widest uppercase text-gray-500 font-semibold">
                  Contact
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
                Let&apos;s Make<br />
                Something<br />
                <span style={{ color: "var(--accent)" }}>Worth Keeping</span>
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-12">
                Ready to book or just want to talk through your vision? We&apos;re
                always a message away — no pressure, no scripts.
              </p>

              {/* Contact info */}
              <div className="flex flex-col gap-6 text-sm">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5" style={{ color: "var(--accent)" }}>
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.61 19a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 3.08 4.18 2 2 0 0 1 5.07 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L9.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 23 17z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Phone</p>
                    <p className="text-white">+234 8079782266</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-0.5" style={{ color: "var(--accent)" }}>
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Email</p>
                    <p className="text-white">booksheyilorphotography@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-0.5" style={{ color: "var(--accent)" }}>
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Location</p>
                    <p className="text-white">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="mt-14">
              <p className="text-xs tracking-widest uppercase text-gray-500 mb-4">
                Follow Us
              </p>
              <div className="flex gap-5 text-gray-400">
                <a href="#" aria-label="Instagram" className="hover:text-white transition">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                  </svg>
                </a>
                <a href="#" aria-label="TikTok" className="hover:text-white transition">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.16 8.16 0 0 0 4.77 1.52V6.76a4.85 4.85 0 0 1-1-.07z" />
                  </svg>
                </a>
                <a href="#" aria-label="Twitter" className="hover:text-white transition">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Form panel */}
          <div className="md:col-span-3 px-10 py-16">
            <div className="flex items-center gap-3 mb-10">
              <span
                className="block w-8 h-0.5"
                style={{ background: "var(--accent)" }}
              />
              <span className="text-xs tracking-widest uppercase text-gray-400 font-semibold">
                Send a Message
              </span>
            </div>

            <h3 className="text-2xl font-bold mb-2">Tell Us About Your Vision</h3>
            <p className="text-sm text-gray-400 mb-8 leading-relaxed">
              Whether you have a full brief or just a feeling — share it.
              We&apos;ll get back within 24 hours.
            </p>

            <form className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="flex-1 border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-orange-400"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="flex-1 border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-orange-400"
                />
              </div>
              <input
                type="text"
                placeholder="What kind of shoot are you thinking?"
                className="border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-orange-400"
              />
              <textarea
                rows={5}
                placeholder="Tell us more — location, date, vibe, anything..."
                className="border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-orange-400 resize-none"
              />
              <button type="submit" className="accent-btn self-start">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

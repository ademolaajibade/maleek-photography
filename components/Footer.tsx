const services = [
  "Fashion Collection",
  "Celebrity Portraits",
  "Convocation",
  "Birthday Portrait",
  "Family Portrait",
  "Maternity",
  "Wedding Portraits",
  "Pre-Wedding Portraits",
  "Events/Candids",
  "Call to Bar",
];

const exploreLinks = ["Home", "Gallery", "Book a Session", "Contact"];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h3 className="text-white font-bold text-lg mb-3">
            Maleek Photography
          </h3>
          <p className="text-sm leading-relaxed text-gray-400 mb-5">
            Capturing life&apos;s moments with artistry and soul.
          </p>
          <div className="flex gap-4">
            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-white transition"
            >
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
            </a>
            {/* TikTok */}
            <a
              href="#"
              aria-label="TikTok"
              className="hover:text-white transition"
            >
              <svg
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.16 8.16 0 0 0 4.77 1.52V6.76a4.85 4.85 0 0 1-1-.07z" />
              </svg>
            </a>
            {/* Twitter/X */}
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-white transition"
            >
              <svg
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Explore */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Explore</h4>
          <ul className="flex flex-col gap-2.5">
            {exploreLinks.map((l) => (
              <li key={l}>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-white transition"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Services</h4>
          <ul className="flex flex-col gap-2.5">
            {services.map((s) => (
              <li key={s}>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-white transition"
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
          <ul className="flex flex-col gap-2.5 text-sm text-gray-400">
            <li>Lagos, Nigeria</li>
            <li>+2348079782268</li>
            <li className="break-all">booksheyilorphotography@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 text-center text-xs text-gray-500">
          &copy; 2026 Sheyilor Photography. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

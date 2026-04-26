"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingSection from "@/components/BookingSection";

const packages = [
  {
    id: "portrait",
    tab: "Portrait",
    name: "Portrait Session",
    subtitle:
      "Professional portrait photography at SHEYILOR STUDIO (Available between 9am – 5pm)",
    price: "₦70,000",
    unit: "per outfit",
    delivery: "2 Working days",
    features: [
      "Location: SHEYILOR STUDIO",
      "4 images per outfit",
      "Professional editing",
      "2 working days delivery",
      "Online gallery",
      "Available from 9am – 5pm",
      "Logistics fee applies based on location",
    ],
    bg: "bg-rose-900",
  },
  {
    id: "events",
    tab: "Events",
    name: "Events Coverage",
    subtitle:
      "Full event photography coverage – birthdays, convocations, and more",
    price: "₦120,000",
    unit: "per event",
    delivery: "5 Working days",
    features: [
      "Full event coverage",
      "Unlimited shots",
      "Professional editing",
      "5 working days delivery",
      "Online gallery",
      "Travel within Lagos included",
    ],
    bg: "bg-amber-900",
  },
  {
    id: "photo-video",
    tab: "Photo + Video",
    name: "Photo + Video Session",
    subtitle:
      "Combined photography and videography package for your special moments",
    price: "₦200,000",
    unit: "per session",
    delivery: "7 Working days",
    features: [
      "Photo + video coverage",
      "Professional editing",
      "7 working days delivery",
      "Online gallery",
      "Raw files included",
      "Travel within Lagos included",
    ],
    bg: "bg-slate-800",
  },
  {
    id: "wedding",
    tab: "Wedding",
    name: "Wedding Package",
    subtitle:
      "Complete wedding photography to capture every precious moment of your big day",
    price: "₦500,000",
    unit: "per wedding",
    delivery: "14 Working days",
    features: [
      "Full day coverage",
      "2 photographers",
      "Professional editing",
      "14 working days delivery",
      "Online gallery",
      "Engagement session included",
      "Travel within Nigeria included",
    ],
    bg: "bg-pink-900",
  },
  {
    id: "training",
    tab: "Training",
    name: "Photography Training",
    subtitle:
      "Learn professional photography skills from experienced photographers",
    price: "₦50,000",
    unit: "per session",
    delivery: "Ongoing",
    features: [
      "1-on-1 mentorship",
      "Hands-on practical training",
      "Camera settings & lighting",
      "Editing techniques",
      "Portfolio building",
      "Certificate of completion",
    ],
    bg: "bg-teal-900",
  },
];

const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
];

export default function BookPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [form, setForm] = useState({
    package: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const pkg = packages[activeTab];

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSelectPackage() {
    setForm((prev) => ({ ...prev, package: pkg.name }));
  }

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <Navbar />

      <main className="pt-20 bg-white min-h-screen">
        {/* Hero */}
        <div className="text-center py-12 px-4">
          <h1
            className="text-4xl md:text-5xl font-bold mb-3"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Book Your Session
          </h1>
          <p className="text-gray-500 text-sm">
            Schedule your photography session in just a few simple steps
          </p>
        </div>

        {/* Steps */}
        <BookingSection />

        {/* Main content */}
        <div className="max-w-6xl mx-auto px-4 pb-20 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10">
          {/* Left – Package selector */}
          <div>
            <h2
              className="text-xl font-bold mb-5"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Choose Your Package
            </h2>

            {/* Tabs */}
            <div className="flex gap-0 border-b border-gray-200 mb-6 overflow-x-auto">
              {packages.map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => setActiveTab(i)}
                  className={`px-4 py-2.5 text-sm font-medium whitespace-nowrap transition-colors border-b-2 -mb-px ${
                    activeTab === i
                      ? "border-gray-800 text-gray-900"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {p.tab}
                </button>
              ))}
            </div>

            {/* Package card */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              {/* Image placeholder */}
              <div className={`${pkg.bg} h-44 flex items-end p-5`}>
                <div>
                  <h3
                    className="text-white text-lg font-bold"
                    style={{
                      fontFamily: "var(--font-playfair), Georgia, serif",
                    }}
                  >
                    {pkg.name}
                  </h3>
                  <p className="text-white/80 text-xs mt-1">{pkg.subtitle}</p>
                </div>
              </div>

              <div className="p-6">
                {/* Price */}
                <div className="flex items-center gap-4 mb-6">
                  <div>
                    <span className="text-3xl font-bold text-gray-900">
                      {pkg.price}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">
                      {pkg.unit}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full">
                    <svg
                      width="13"
                      height="13"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                    {pkg.delivery}
                  </div>
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-2.5 mb-6">
                  {pkg.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <svg
                        width="16"
                        height="16"
                        fill="none"
                        stroke="#e07b39"
                        strokeWidth="2.2"
                        viewBox="0 0 24 24"
                        className="mt-0.5 shrink-0"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={handleSelectPackage}
                  className="w-full border border-gray-800 text-gray-800 text-sm font-semibold py-2.5 rounded hover:bg-gray-800 hover:text-white transition-colors"
                >
                  Select {pkg.tab} Session
                </button>
              </div>
            </div>
          </div>

          {/* Right – Booking form */}
          <div>
            <div className="border border-gray-200 rounded-lg p-6 sticky top-24">
              <h2
                className="text-lg font-bold mb-5"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Book Your Session
              </h2>

              {submitted ? (
                <div className="text-center py-8">
                  <svg
                    width="48"
                    height="48"
                    fill="none"
                    stroke="#e07b39"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                    className="mx-auto mb-4"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12l3 3 5-6" />
                  </svg>
                  <h3 className="font-bold text-lg mb-2">Booking Received!</h3>
                  <p className="text-sm text-gray-500">
                    We&apos;ll be in touch shortly to confirm your session.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Package */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Select Package
                    </label>
                    <div className="relative">
                      <select
                        name="package"
                        value={form.package}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm appearance-none text-gray-700 focus:outline-none focus:border-gray-400"
                      >
                        <option value="">Select a package</option>
                        {packages.map((p) => (
                          <option key={p.id} value={p.name}>
                            {p.name}
                          </option>
                        ))}
                      </select>
                      <svg
                        className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                        width="14"
                        height="14"
                        fill="none"
                        stroke="#9ca3af"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </div>
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                        required
                        placeholder="Pick a date"
                        className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-gray-400"
                      />
                    </div>
                  </div>

                  {/* Time */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Time
                    </label>
                    <div className="relative">
                      <select
                        name="time"
                        value={form.time}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm appearance-none text-gray-700 focus:outline-none focus:border-gray-400"
                      >
                        <option value="">Select a time</option>
                        {timeSlots.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                      <svg
                        className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                        width="14"
                        height="14"
                        fill="none"
                        stroke="#9ca3af"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </div>
                  </div>

                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:border-gray-400"
                    />
                  </div>

                  {/* Email + Phone */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example"
                        className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:border-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="(123) 456-7890"
                        className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:border-gray-400"
                      />
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Additional Information{" "}
                      <span className="font-normal text-gray-400">
                        (Optional)
                      </span>
                    </label>
                    <textarea
                      name="notes"
                      value={form.notes}
                      onChange={handleChange}
                      rows={4}
                      placeholder={
                        "Tell us more about what you're looking for with this session...\n\nAny specific requirements or preferences for your session."
                      }
                      className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:border-gray-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gray-900 text-white text-sm font-semibold py-3 rounded hover:bg-gray-700 transition-colors mt-1"
                  >
                    Book Session
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

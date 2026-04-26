import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import BookingSection from "@/components/BookingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. About */}
        <AboutSection />

        {/* 3. Portfolio */}
        <PortfolioSection />

        {/* 4. Booking / Why Choose Us */}
        <BookingSection />

        {/* 5. Testimonials */}
        <TestimonialsSection />

        {/* 6. Contact */}
        <ContactSection />
      </main>

      {/* 7. Footer */}
      <Footer />
    </>
  );
}

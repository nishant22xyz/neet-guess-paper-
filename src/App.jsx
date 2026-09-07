import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import StudentTrustBanner from "./components/AdmissionCouponBanner";
import TrustStrip from "./components/TrustStrip";
import WhyGuessPaper from "./components/WhyGuessPaper";
import SubjectCards from "./components/SubjectCards";
import SamplePreview from "./components/SamplePreview";
import SampleModal from "./components/SampleModal";
import FacultySection from "./components/FacultySection";
import Methodology from "./components/Methodology";
import CredibilitySection from "./components/CredibilitySection";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Transparency from "./components/Transparency";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import MobileStickyCTA from "./components/MobileStickyCTA";
import Footer from "./components/Footer";

export default function App() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    sampleId: "biology-sample",
  });

  const handleOpenSampleModal = (sampleId = "biology-sample") => {
    setModalState({
      isOpen: true,
      sampleId: sampleId,
    });
  };

  const handleCloseSampleModal = () => {
    setModalState((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };

  return (
    <div className="min-h-screen bg-white text-[#2e4447] flex flex-col font-['Inter'] relative selection:bg-[#fde8d3] selection:text-[#d9742a]">
      {/* 1. Sticky Minimal Product Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 2. Hero Section + 3D Product Visual */}
        <Hero onOpenSample={handleOpenSampleModal} />

        {/* ₹199 College Admission Coupon */}
        <StudentTrustBanner />

        {/* 3. 4-Card Trust Strip */}
        <TrustStrip />

        {/* 4. Why This Guess Paper (6 Cards) */}
        <WhyGuessPaper />

        {/* 5. One Paper. Two Subjects. (Biology, Chemistry) */}
        <SubjectCards onOpenSample={handleOpenSampleModal} />

        {/* 6. Critical Section: See Before You Buy (Sample Pages Preview) */}
        <SamplePreview onOpenModal={handleOpenSampleModal} />

        {/* 7. Prepared & Reviewed By (Faculty & Academic Panel) */}
        <FacultySection />

        {/* 8. How We Prepare the Guess Paper (5-Step Methodology) */}
        <Methodology />

        {/* 9. Credibility & Boundaries (How Reliable Is a Guess Paper?) */}
        <CredibilitySection />

        {/* 10. Student Feedback (Real Review Formats) */}
        <Testimonials />

        {/* 11. What You Get for ₹99 (Pricing Breakdown) */}
        <Pricing />

        {/* 12. Before You Purchase (Mandatory Transparency Checklist) */}
        <Transparency />

        {/* 13. FAQ Accordion */}
        <FAQ />

        {/* 14. Final High-Impact CTA */}
        <FinalCTA />
      </main>

      {/* 15. Minimal Footer */}
      <Footer />

      {/* 16. Mobile Sticky Purchase Bar */}
      <MobileStickyCTA />

      {/* 17. Fullscreen Interactive Sample Viewer Modal */}
      <SampleModal
        isOpen={modalState.isOpen}
        onClose={handleCloseSampleModal}
        initialSampleId={modalState.sampleId}
      />
    </div>
  );
}

import React from "react";
import { productData, buyGuessPaper } from "../data/guessPaper";

export default function FinalCTA() {
  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-white to-[#e6f0f1] border-b border-[#dde4e6] text-center relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#468e91]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto fa-card bg-white p-8 sm:p-12 rounded-3xl border-2 border-[#b4d0d1] shadow-[0_20px_50px_rgba(70,142,145,0.18)]">
          {/* Label */}
          <div className="inline-flex items-center gap-2 bg-[#fde8d3] text-[#d9742a] text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-4">
            <i className="fa-solid fa-user-doctor"></i>
            <span>Session 2027 NEET-UG Preparation</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1e3235] tracking-tight mb-4 leading-tight">
            Make Your NEET-UG Revision More Focused
          </h2>

          {/* Body Text */}
          <p className="text-sm sm:text-base text-[#4a6468] leading-relaxed mb-6 max-w-xl mx-auto">
            Use the FormsADDA NEET-UG Guess Paper to identify high-yield NCERT concepts and organize your revision across Biology and Chemistry.
          </p>

          {/* Price & Subject Tag Strip */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8 flex-wrap">
            <span className="bg-[#e6f0f1] text-[#008190] text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-xl border border-[#b4d0d1]">
              Biology • Chemistry
            </span>
            <span className="text-2xl sm:text-3xl font-black text-[#f38e3e]">
              ₹{productData.price}
            </span>
          </div>

          {/* Primary CTA */}
          <div className="max-w-md mx-auto mb-4">
            <button
              onClick={buyGuessPaper}
              className="btn-primary w-full py-4 text-base sm:text-lg font-bold tracking-wide shadow-[0_8px_25px_rgba(243,142,62,0.4)] cursor-pointer"
            >
              <i className="fa-solid fa-cart-shopping mr-2"></i>
              BUY NOW — ₹{productData.price}
            </button>
          </div>

          {/* Redirection Notice */}
          <p className="text-xs text-[#6c757d] leading-relaxed max-w-md mx-auto font-medium">
            You will be redirected to the official FormsADDA purchase page to complete your payment securely.
          </p>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { productData, buyGuessPaper } from "../data/guessPaper";

export default function Hero({ onOpenSample }) {
  const scrollToSamples = (e) => {
    e.preventDefault();
    const el = document.getElementById("sample-preview");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else if (onOpenSample) {
      onOpenSample("biology-sample");
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-[115px] pb-[75px] px-4 sm:px-6 lg:px-8 bg-[#0a1d1f] overflow-hidden flex items-center"
      style={{
        background:
          "linear-gradient(135deg, rgba(10, 29, 31, 0.95) 0%, rgba(14, 38, 41, 0.98) 100%)",
      }}
    >
      {/* FormsADDA Signature Background Geometric Circles */}
      <div className="hero-circles absolute inset-0 overflow-hidden pointer-events-none">
        <span className="w-[650px] h-[650px] -right-[180px] -top-[180px] border border-[#468e91]/20 rounded-full block absolute"></span>
        <span className="w-[420px] h-[420px] -right-[60px] -top-[60px] bg-[#468e91]/5 border border-[#468e91]/20 rounded-full block absolute"></span>
        <span className="w-[850px] h-[850px] -left-[320px] -bottom-[420px] border border-[#f38e3e]/10 rounded-full block absolute"></span>
      </div>

      {/* Subtle Dot Grid */}
      <div className="hero-dot-grid"></div>

      {/* Ambient Glow */}
      <div className="hero-glow right-[15%] top-1/2 -translate-y-1/2"></div>

      <div className="max-w-[1240px] mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Content Column (7 cols) */}
        <div className="lg:col-span-7 text-left">
          {/* Label Badge */}
          <div className="inline-flex items-center gap-2 bg-[#f38e3e]/12 border border-[#f38e3e]/30 text-[#ffd4a8] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-5 backdrop-blur-sm">
            <i className="fa-solid fa-bolt text-[#f38e3e] text-xs"></i>
            <span>{productData.badge}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white tracking-tight leading-[1.12] mb-3">
            NEET-UG Biology & Chemistry <span className="text-[#f38e3e] italic font-normal">High-Yield</span> Guess Paper 2027
          </h1>

          {/* Subheading */}
          <div className="text-lg sm:text-xl md:text-2xl font-semibold text-[#b4d0d1] mb-4 flex items-center gap-2.5 flex-wrap">
            <span className="flex items-center gap-1.5">🧬 Biology (Botany + Zoology)</span>
            <span className="text-[#f38e3e] font-normal">+</span>
            <span className="flex items-center gap-1.5">🧪 Chemistry</span>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-white/75 leading-relaxed mb-6 max-w-[580px]">
            {productData.heroDescription}
          </p>

          {/* Price & Supporting Value Box */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-5 mb-7 backdrop-blur-md max-w-[580px]">
            <div className="flex items-baseline gap-3 mb-2 flex-wrap">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#f38e3e] tracking-tight">
                ₹{productData.price}
              </span>
              <span className="text-lg sm:text-xl text-white/40 line-through font-medium">
                ₹{productData.originalPrice}
              </span>
              <span className="bg-[#198754]/20 border border-[#198754]/40 text-[#7bdcb5] text-xs font-bold px-2.5 py-0.5 rounded-md">
                {productData.discountPercent}
              </span>
              <span className="text-xs text-white/60 font-medium ml-auto">
                One-time payment • No subscription
              </span>
            </div>
            <p className="text-xs sm:text-sm text-white/80 font-medium flex items-center gap-2">
              <i className="fa-solid fa-circle-check text-[#198754]"></i>
              <span>2 Subjects (Bio & Chem) • Digital PDF • NCERT & PYQ-Informed</span>
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-7 max-w-[580px]">
            <button
              onClick={buyGuessPaper}
              className="btn-primary py-3.5 px-8 text-base font-bold tracking-wide flex-1 justify-center shadow-[0_6px_20px_rgba(243,142,62,0.35)] cursor-pointer"
            >
              <i className="fa-solid fa-cart-shopping mr-1"></i>
              BUY NOW — ₹{productData.price}
            </button>
            <button
              onClick={scrollToSamples}
              className="bg-white/10 hover:bg-white/15 text-white border border-white/20 rounded-lg py-3.5 px-6 text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer backdrop-blur-sm"
            >
              <i className="fa-solid fa-eye text-[#468e91]"></i>
              VIEW SAMPLE PAGES
            </button>
          </div>

          {/* Checkmark Bullets Below CTA */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-white/10 max-w-[580px] text-xs font-semibold text-white/85">
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-check text-[#f38e3e]"></i>
              <span>Biology (360M)</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-check text-[#f38e3e]"></i>
              <span>Chemistry (180M)</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-check text-[#f38e3e]"></i>
              <span>NCERT Focused</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-check text-[#f38e3e]"></i>
              <span>Digital PDF</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Product Preview Visual (5 cols) */}
        <div className="lg:col-span-5 flex justify-center relative">
          {/* Main 3D Digital Booklet Card */}
          <div className="w-full max-w-[390px] relative">
            {/* Background Glow under the card */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-[#468e91]/30 to-[#f38e3e]/30 rounded-2xl blur-lg opacity-70"></div>

            <div className="relative bg-gradient-to-b from-[#112629] to-[#0c1c1e] border-2 border-white/15 rounded-2xl p-6 sm:p-7 shadow-[0_25px_60px_rgba(0,0,0,0.6)] text-left overflow-hidden">
              {/* Subtle Document Grid Texture */}
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#468e91_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

              {/* Card Header Bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#468e91]/20 border border-[#468e91]/40 flex items-center justify-center">
                    <i className="fa-solid fa-user-doctor text-[#468e91] text-sm"></i>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-white/50 tracking-wider uppercase block">
                      FormsADDA
                    </span>
                    <span className="text-xs font-bold text-[#b4d0d1]">
                      Academic Series
                    </span>
                  </div>
                </div>
                <span className="bg-[#f38e3e] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider">
                  2027
                </span>
              </div>

              {/* Cover Title Graphic */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-xl p-5 mb-5 relative overflow-hidden">
                <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-[#468e91]/15 blur-xl"></div>
                <div className="text-[11px] font-bold text-[#f38e3e] tracking-widest uppercase mb-1">
                  OFFICIAL PREPARATION RESOURCE
                </div>
                <div className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug mb-1">
                  NEET-UG
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white/70 tracking-wide uppercase mb-3">
                  HIGH-YIELD GUESS PAPER
                </div>
                <div className="flex items-center gap-2 text-[11px] font-bold text-[#b4d0d1] bg-black/30 px-2.5 py-1.5 rounded-md border border-white/5">
                  <i className="fa-solid fa-book-open text-[#f38e3e]"></i>
                  <span>BIOLOGY • CHEMISTRY</span>
                </div>
              </div>

              {/* Inclusions List inside Mockup */}
              <div className="space-y-2 mb-5 text-xs text-white/75">
                <div className="flex items-center justify-between bg-white/[0.03] p-2 rounded-lg border border-white/5">
                  <span className="flex items-center gap-2">
                    <i className="fa-solid fa-dna text-[#468e91]"></i> Biology High-Yield Sets
                  </span>
                  <span className="text-[11px] font-bold text-[#7bdcb5]">✓ Included</span>
                </div>
                <div className="flex items-center justify-between bg-white/[0.03] p-2 rounded-lg border border-white/5">
                  <span className="flex items-center gap-2">
                    <i className="fa-solid fa-flask-vial text-[#f38e3e]"></i> Chemistry Trend Mapping
                  </span>
                  <span className="text-[11px] font-bold text-[#7bdcb5]">✓ Included</span>
                </div>
                <div className="flex items-center justify-between bg-white/[0.03] p-2 rounded-lg border border-white/5">
                  <span className="flex items-center gap-2">
                    <i className="fa-solid fa-book-medical text-[#b4d0d1]"></i> NCERT Line-by-Line Focus
                  </span>
                  <span className="text-[11px] font-bold text-[#7bdcb5]">✓ Included</span>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-white/40 uppercase block font-semibold">
                    Format & Delivery
                  </span>
                  <span className="text-xs font-bold text-white flex items-center gap-1.5">
                    <i className="fa-solid fa-file-pdf text-red-400"></i> Digital PDF (120+ Pgs)
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-white/40 uppercase block font-semibold">
                    Official Price
                  </span>
                  <span className="text-base font-extrabold text-[#f38e3e]">
                    ₹{productData.price}
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Trust Badge */}
            <div className="absolute -bottom-4 -left-4 bg-white text-[#1e3235] px-3.5 py-2 rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.3)] border border-[#dde4e6] flex items-center gap-2.5 z-20">
              <div className="w-7 h-7 rounded-lg bg-[#e6f0f1] flex items-center justify-center text-[#008190]">
                <i className="fa-solid fa-shield-halved text-xs"></i>
              </div>
              <div className="text-left">
                <div className="text-[10px] font-bold text-[#6c757d] uppercase leading-none">
                  Verified Resource
                </div>
                <div className="text-xs font-extrabold text-[#008190] leading-tight">
                  FormsADDA Academic
                </div>
              </div>
            </div>

            {/* Floating Price Tag on Top Right */}
            <div className="absolute -top-3 -right-3 bg-[#f38e3e] text-white px-3 py-1.5 rounded-lg shadow-lg font-bold text-xs flex items-center gap-1.5 z-20">
              <i className="fa-solid fa-bolt"></i>
              <span>Instant Access</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

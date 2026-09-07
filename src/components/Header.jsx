import React from "react";
import { productData, buyGuessPaper } from "../data/guessPaper";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#dde4e6] shadow-[0_2px_20px_rgba(0,0,0,0.05)] h-[74px] transition-all">
      <div className="max-w-[1240px] mx-auto h-full px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Logo matching FormsADDA official */}
        <div className="flex items-center gap-3">
          <a
            href={productData.officialWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
            title="FormsADDA Official Website"
          >
            <img
              src={productData.logo}
              alt="FormsADDA Logo"
              className="h-[46px] sm:h-[52px] w-auto object-contain max-w-[180px] sm:max-w-[240px]"
            />
          </a>

          {/* Product Tag / Breadcrumb */}
          <div className="hidden lg:flex items-center gap-2 pl-3 border-l border-[#dde4e6]">
            <span className="bg-[#e6f0f1] text-[#008190] text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
              {productData.exam}
            </span>
            <span className="text-sm font-semibold text-[#1e3235]">
              High-Yield Guess Paper
            </span>
          </div>
        </div>

        {/* Center Tagline for medium screens */}
        <div className="hidden md:flex items-center gap-2 text-xs font-semibold text-[#4a6468]">
          <span className="inline-block w-2 h-2 rounded-full bg-[#198754]"></span>
          <span>Biology + Chemistry</span>
          <span className="text-[#8fa5a9]">•</span>
          <span className="text-[#f38e3e] font-bold">₹{productData.price} Only</span>
        </div>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={buyGuessPaper}
            className="btn-primary py-2 px-4 sm:px-6 text-sm font-bold tracking-wide flex items-center gap-2 shadow-[0_4px_12px_rgba(243,142,62,0.3)] hover:shadow-[0_6px_18px_rgba(243,142,62,0.4)] transition-all cursor-pointer"
          >
            <i className="fa-solid fa-cart-shopping text-xs"></i>
            <span>BUY NOW — ₹{productData.price}</span>
          </button>
        </div>
      </div>
    </header>
  );
}

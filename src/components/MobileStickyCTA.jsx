import React from "react";
import { productData, buyGuessPaper } from "../data/guessPaper";

export default function MobileStickyCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-[#dde4e6] p-3 px-4 shadow-[0_-6px_20px_rgba(0,0,0,0.1)] flex items-center justify-between gap-3">
      {/* Left Info */}
      <div className="text-left">
        <div className="text-[11px] font-bold text-[#008190] uppercase tracking-wider leading-none">
          NEET-UG Guess Paper
        </div>
        <div className="flex items-baseline gap-2 mt-1">
          <span className="text-xl font-black text-[#f38e3e] leading-none">
            ₹{productData.price}
          </span>
          <span className="text-xs text-[#94a3b8] line-through font-medium">
            ₹{productData.originalPrice}
          </span>
          <span className="text-[10px] text-[#4a6468] font-bold">
            (Bio + Chem)
          </span>
        </div>
      </div>

      {/* Right Action */}
      <button
        onClick={buyGuessPaper}
        className="btn-primary py-2.5 px-5 text-sm font-bold shadow-md flex items-center gap-1.5 cursor-pointer"
      >
        <span>BUY NOW</span>
        <i className="fa-solid fa-arrow-right text-xs"></i>
      </button>
    </div>
  );
}

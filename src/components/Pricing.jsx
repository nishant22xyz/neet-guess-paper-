import React from "react";
import { productData, buyGuessPaper, pricingBenefits } from "../data/guessPaper";

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-24 bg-white border-b border-[#dde4e6]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-label justify-center">
            <i className="fa-solid fa-tags"></i> Affordable Access
          </div>
          <h2 className="section-title">What You Get for ₹{productData.price}</h2>
          <p className="section-sub max-w-2xl mx-auto">
            Everything you need for focused, high-yield final NEET-UG revision packed into a single searchable digital PDF.
          </p>
        </div>

        {/* Premium Pricing Card */}
        <div className="max-w-xl mx-auto bg-gradient-to-b from-white to-[#f7fafb] rounded-3xl border-2 border-[#468e91]/30 shadow-[0_20px_50px_rgba(70,142,145,0.15)] overflow-hidden text-left relative">
          {/* Card Top Strip */}
          <div className="bg-[#008190] text-white py-3.5 px-6 flex items-center justify-between">
            <span className="text-xs font-extrabold uppercase tracking-widest flex items-center gap-1.5">
              <i className="fa-solid fa-bolt text-[#f38e3e]"></i>
              ALL-IN-ONE REVISION PACKAGE
            </span>
            <span className="bg-[#f38e3e] text-white text-[11px] font-extrabold px-3 py-0.5 rounded-full uppercase tracking-wider">
              {productData.discountPercent}
            </span>
          </div>

          <div className="p-7 sm:p-9">
            {/* Header & Price Display */}
            <div className="border-b border-[#dde4e6] pb-6 mb-7">
              <span className="text-xs font-bold text-[#008190] uppercase tracking-wider block mb-1">
                {productData.exam} • 2027
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1e3235] mb-2 tracking-tight">
                {productData.title}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-[#4a6468] mb-4">
                Biology + Chemistry
              </p>

              <div className="flex items-baseline gap-3">
                <span className="text-4xl sm:text-5xl font-black text-[#f38e3e] tracking-tight">
                  ₹{productData.price}
                </span>
                <span className="text-xl text-[#94a3b8] line-through font-medium">
                  ₹{productData.originalPrice}
                </span>
                <span className="text-xs font-semibold text-[#6c757d]">
                  / One-time fee
                </span>
              </div>
            </div>

            {/* Inclusions Checkmarks List */}
            <div className="space-y-3.5 mb-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#1e3235]">
                Package Inclusions:
              </h4>
              {pricingBenefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#2e4447]">
                  <i className="fa-solid fa-circle-check text-[#198754] text-base mt-0.5 flex-shrink-0"></i>
                  <span className="leading-snug">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={buyGuessPaper}
              className="btn-primary w-full py-4 text-base sm:text-lg font-bold tracking-wide shadow-[0_6px_20px_rgba(243,142,62,0.35)] cursor-pointer mb-3"
            >
              <i className="fa-solid fa-cart-shopping mr-2"></i>
              BUY NOW — ₹{productData.price}
            </button>

            {/* Supporting Trust Line */}
            <p className="text-xs text-center text-[#6c757d] flex items-center justify-center gap-2 m-0 font-medium">
              <i className="fa-solid fa-shield-check text-[#198754]"></i>
              <span>Purchase securely through the official FormsADDA checkout.</span>
            </p>
          </div>

          {/* Guarantee / Delivery Ribbon */}
          <div className="bg-[#e6f0f1] px-6 py-3 border-t border-[#b4d0d1] flex items-center justify-between text-xs text-[#008190] font-semibold">
            <span className="flex items-center gap-1.5">
              <i className="fa-solid fa-bolt"></i> Instant Download
            </span>
            <span className="flex items-center gap-1.5">
              <i className="fa-solid fa-envelope"></i> Email Delivery Backup
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

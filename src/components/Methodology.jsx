import React from "react";
import { methodologySteps } from "../data/guessPaper";

export default function Methodology() {
  return (
    <section id="methodology" className="py-20 sm:py-24 bg-[#f7fafb] border-b border-[#dde4e6]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-label justify-center">
            <i className="fa-solid fa-gears"></i> Empirical Methodology
          </div>
          <h2 className="section-title">How We Prepare the Guess Paper</h2>
          <p className="section-sub max-w-2xl mx-auto">
            Our 5-step structured curation framework replaces arbitrary guessing with empirical exam analysis and thorough academic scrutiny.
          </p>
        </div>

        {/* 5-Step Process Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6 relative">
          {methodologySteps.map((item, idx) => (
            <div
              key={idx}
              className="fa-card bg-white p-6 rounded-2xl border border-[#dde4e6] text-left relative flex flex-col justify-between hover:border-[#008190] transition-all group"
            >
              <div>
                {/* Step Number Top Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-[#008190] font-['Outfit']">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#e6f0f1] group-hover:bg-[#f38e3e]/10 border border-[#b4d0d1] group-hover:border-[#f38e3e]/30 flex items-center justify-center text-[#008190] group-hover:text-[#f38e3e] transition-colors">
                    <i className={`${item.icon} text-base`}></i>
                  </div>
                </div>

                <h3 className="text-base font-bold text-[#1e3235] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#4a6468] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Progress Indicator Dots */}
              <div className="pt-4 mt-4 border-t border-[#f0f4f5] flex items-center gap-1.5">
                {[...Array(5)].map((_, dotIdx) => (
                  <span
                    key={dotIdx}
                    className={`h-1.5 rounded-full transition-all ${
                      dotIdx <= idx
                        ? "w-4 bg-[#008190]"
                        : "w-1.5 bg-[#dde4e6]"
                    }`}
                  ></span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

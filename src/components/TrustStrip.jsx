import React from "react";
import { trustCards } from "../data/guessPaper";

export default function TrustStrip() {
  return (
    <section className="py-10 sm:py-12 bg-white border-b border-[#dde4e6] relative z-20">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {trustCards.map((item) => (
            <div
              key={item.id}
              className="fa-card p-5 sm:p-6 flex items-start gap-4 text-left border border-[#dde4e6] hover:border-[#468e91] transition-all bg-[#f7fafb]"
            >
              <div className="w-11 h-11 rounded-xl bg-[#e6f0f1] border border-[#b4d0d1] flex items-center justify-center flex-shrink-0 text-[#008190] shadow-sm">
                <i className={`${item.icon} text-lg text-[#008190]`}></i>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-base font-bold text-[#1e3235] m-0">
                    {item.title}
                  </h3>
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-[#fde8d3] text-[#d9742a]">
                    {item.tag}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#4a6468] leading-relaxed m-0">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

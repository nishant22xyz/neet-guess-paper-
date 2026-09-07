import React from "react";
import { whyGuessPaperCards } from "../data/guessPaper";

export default function WhyGuessPaper() {
  return (
    <section id="why-guess-paper" className="py-20 sm:py-24 bg-[#f7fafb] border-b border-[#dde4e6]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header matching FormsADDA format */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="section-label justify-center">
            <i className="fa-solid fa-compass"></i> Focused Exam Strategy
          </div>
          <h2 className="section-title">Why Use This Guess Paper?</h2>
          <p className="section-sub max-w-2xl mx-auto">
            NEET preparation involves a vast NCERT syllabus. This resource is designed to help students identify areas worth prioritizing during revision without getting overwhelmed.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {whyGuessPaperCards.map((card) => (
            <div
              key={card.id}
              className="fa-card p-6 sm:p-7 flex flex-col justify-between text-left bg-white border border-[#dde4e6] hover:border-[#b4d0d1] transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#e6f0f1] group-hover:bg-[#f38e3e]/10 border border-[#b4d0d1] group-hover:border-[#f38e3e]/30 flex items-center justify-center text-[#008190] group-hover:text-[#f38e3e] transition-all">
                    <i className={`${card.icon} text-xl`}></i>
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#f0f4f5] text-[#4a6468]">
                    {card.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#1e3235] mb-2.5">
                  {card.title}
                </h3>
                <p className="text-sm text-[#4a6468] leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#f0f4f5] flex items-center text-xs font-semibold text-[#008190] group-hover:text-[#f38e3e] transition-colors">
                <span>Revision Benefit</span>
                <i className="fa-solid fa-arrow-right ml-2 text-[10px] transform group-hover:translate-x-1 transition-transform"></i>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note Reassurance */}
        <div className="mt-12 bg-[#e6f0f1] border border-[#b4d0d1] rounded-xl p-4 sm:p-5 max-w-3xl mx-auto flex items-start gap-3.5 text-left">
          <i className="fa-solid fa-circle-info text-[#008190] text-lg mt-0.5 flex-shrink-0"></i>
          <p className="text-xs sm:text-sm text-[#2e4447] leading-relaxed m-0 font-medium">
            <strong className="text-[#008190] font-bold">Academic Transparency:</strong> A guess paper organizes high-yield topics and expected question formulations based on NCERT and historical NEET question trends. It does not replace full conceptual study, but acts as a high-speed revision catalyst.
          </p>
        </div>
      </div>
    </section>
  );
}

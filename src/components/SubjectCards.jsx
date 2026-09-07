import React from "react";
import { subjectCardsData } from "../data/guessPaper";

export default function SubjectCards({ onOpenSample }) {
  return (
    <section id="subjects" className="py-20 sm:py-24 bg-white border-b border-[#dde4e6]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-label justify-center">
            <i className="fa-solid fa-layer-group"></i> Unified 2-Subject Package
          </div>
          <h2 className="section-title">One Paper. Two Core Subjects.</h2>
          <p className="section-sub max-w-2xl mx-auto">
            Get structured, chapter-wise high-yield question sets and NCERT-focused frameworks for Biology and Chemistry in a single convenient document.
          </p>
        </div>

        {/* 2 Subject Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8">
          {subjectCardsData.map((subj) => (
            <div
              key={subj.id}
              className="fa-card rounded-2xl border-2 border-[#dde4e6] hover:border-[#468e91] flex flex-col justify-between overflow-hidden bg-white text-left transition-all"
            >
              {/* Card Top Banner with Subject Color Theme */}
              <div
                className="p-6 border-b border-[#dde4e6]"
                style={{ backgroundColor: subj.bgLight }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md"
                    style={{ backgroundColor: subj.accentColor }}
                  >
                    <i className={`${subj.icon} text-xl`}></i>
                  </div>
                  <span className="bg-white/90 backdrop-blur-sm text-xs font-extrabold uppercase px-3 py-1 rounded-full border border-black/5 text-[#1e3235]">
                    Core Subject
                  </span>
                </div>
                <h3 className="text-2xl font-black text-[#1e3235] tracking-tight mb-1">
                  {subj.title}
                </h3>
                <p className="text-xs font-semibold text-[#4a6468]">
                  {subj.tagline}
                </p>
              </div>

              {/* Card Features List */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-3 mb-6">
                  {subj.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2e4447]">
                      <i className="fa-solid fa-circle-check text-[#008190] text-sm mt-0.5 flex-shrink-0"></i>
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Sample Trigger Button */}
                <button
                  onClick={() => onOpenSample(`${subj.id}-sample`)}
                  className="w-full py-3 px-4 rounded-xl border-1.5 font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm hover:shadow-md"
                  style={{
                    backgroundColor: subj.bgLight,
                    borderColor: subj.accentColor,
                    color: subj.accentColor,
                  }}
                >
                  <i className="fa-solid fa-eye text-xs"></i>
                  <span>{subj.sampleLabel}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

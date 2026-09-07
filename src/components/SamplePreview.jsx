import React, { useState } from "react";
import { samplePages, buyGuessPaper, productData } from "../data/guessPaper";

export default function SamplePreview({ onOpenModal }) {
  const [activeTab, setActiveTab] = useState(samplePages[0].id);

  const currentSample = samplePages.find((s) => s.id === activeTab) || samplePages[0];

  return (
    <section id="sample-preview" className="py-20 sm:py-24 bg-[#f0f4f5] border-b border-[#dde4e6]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="section-label justify-center">
            <i className="fa-solid fa-file-lines"></i> 100% Transparency
          </div>
          <h2 className="section-title">See Before You Buy</h2>
          <p className="section-sub max-w-2xl mx-auto">
            Preview selected pages so you know what you're purchasing before making a payment. We believe every NEET aspirant deserves complete transparency.
          </p>
        </div>

        {/* Subject Filter Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-10">
          {samplePages.map((sample) => {
            const isActive = activeTab === sample.id;
            return (
              <button
                key={sample.id}
                onClick={() => setActiveTab(sample.id)}
                className={`py-2 px-4 sm:px-5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 border ${
                  isActive
                    ? "bg-[#008190] text-white border-[#008190] shadow-md -translate-y-0.5"
                    : "bg-white text-[#4a6468] border-[#dde4e6] hover:border-[#468e91] hover:text-[#008190]"
                }`}
              >
                <span>{sample.type}</span>
              </button>
            );
          })}
        </div>

        {/* Active Sample Preview Document Mockup */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border-2 border-[#dde4e6] shadow-[0_15px_40px_rgba(70,142,145,0.12)] overflow-hidden relative text-left">
          {/* Watermark */}
          <div className="sample-watermark">FORMSADDA SAMPLE</div>

          {/* Document Header Bar */}
          <div className="bg-[#1e3235] text-white px-6 py-4 flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#f38e3e] inline-block animate-pulse"></span>
              <div>
                <h4 className="text-sm font-bold text-white tracking-wide m-0">
                  {currentSample.title}
                </h4>
                <span className="text-[11px] text-[#b4d0d1] font-medium">
                  {currentSample.pageNumber} • FormsADDA Verified
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="bg-[#f38e3e]/20 border border-[#f38e3e]/40 text-[#ffd4a8] text-[10px] font-bold px-2.5 py-1 rounded">
                SAMPLE PREVIEW
              </span>
              <button
                onClick={() => onOpenModal(currentSample.id)}
                className="bg-white/10 hover:bg-white/20 text-white text-xs font-semibold py-1.5 px-3 rounded flex items-center gap-1.5 transition-all cursor-pointer"
                title="Open Fullscreen Lightbox"
              >
                <i className="fa-solid fa-expand text-[11px]"></i>
                <span className="hidden sm:inline">Fullscreen</span>
              </button>
            </div>
          </div>

          {/* Document Body (Authentic question paper layout) */}
          <div className="p-6 sm:p-10 relative z-10 bg-[#ffffff]">
            {/* Real placeholder watermark notice */}
            <div className="mb-6 p-3 rounded-lg bg-[#e6f0f1] border border-[#b4d0d1] text-xs font-semibold text-[#008190] flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-stamp text-[#008190]"></i>
                <span>{currentSample.previewNote}</span>
              </div>
              <span className="text-[11px] text-[#4a6468]">
                Standard Academic Font & Formula Formatting
              </span>
            </div>

            {/* Render Question / Content Section */}
            {currentSample.sections.map((sec, idx) => (
              <div key={idx} className="space-y-5">
                <div className="border-b border-[#dde4e6] pb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#f38e3e]">
                    {sec.topic}
                  </span>
                </div>

                <div className="bg-[#f7fafb] p-5 rounded-xl border border-[#dde4e6]">
                  <p className="text-sm sm:text-base font-semibold text-[#1e3235] leading-relaxed mb-4">
                    {sec.question}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4 text-xs sm:text-sm font-medium text-[#2e4447]">
                    {sec.options.map((opt, oIdx) => (
                      <div
                        key={oIdx}
                        className="bg-white p-2.5 rounded-lg border border-[#dde4e6] flex items-center gap-2"
                      >
                        <span className="w-5 h-5 rounded-full bg-[#e6f0f1] text-[#008190] text-xs font-bold flex items-center justify-center flex-shrink-0">
                          {String.fromCharCode(65 + oIdx)}
                        </span>
                        <span>{opt.substring(3)}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3.5 rounded-lg bg-[#e6f0f1]/70 border border-[#b4d0d1] text-xs sm:text-sm text-[#008190] font-medium leading-relaxed mb-3">
                    <strong className="text-[#316466] font-bold block mb-1">
                      <i className="fa-solid fa-lightbulb text-[#f38e3e] mr-1"></i> Step-by-Step Concept Breakdown:
                    </strong>
                    {sec.solutionSummary}
                  </div>

                  <div className="flex items-center gap-2 text-xs font-semibold text-[#4a6468]">
                    <i className="fa-solid fa-chart-line text-[#f38e3e]"></i>
                    <span>{sec.examTrend}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Document Footer Call-to-action */}
          <div className="bg-[#f7fafb] p-5 sm:p-6 border-t border-[#dde4e6] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <span className="text-xs text-[#4a6468] block">
                Like what you see? Unlock all high-yield pages instantly for just ₹{productData.price}.
              </span>
              <span className="text-sm font-bold text-[#1e3235]">
                Full 2-Subject PDF (Biology + Chemistry)
              </span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => onOpenModal(currentSample.id)}
                className="btn-secondary py-2.5 px-4 text-xs font-bold flex-1 sm:flex-initial"
              >
                <i className="fa-solid fa-magnifying-glass-plus"></i> View All Samples
              </button>
              <button
                onClick={buyGuessPaper}
                className="btn-primary py-2.5 px-6 text-sm font-bold flex-1 sm:flex-initial"
              >
                <i className="fa-solid fa-cart-shopping"></i> BUY NOW — ₹{productData.price}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

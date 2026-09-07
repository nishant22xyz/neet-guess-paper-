import React, { useState, useEffect } from "react";
import { samplePages, buyGuessPaper, productData } from "../data/guessPaper";

export default function SampleModal({ isOpen, onClose, initialSampleId }) {
  const [selectedId, setSelectedId] = useState(initialSampleId || samplePages[0].id);

  useEffect(() => {
    if (initialSampleId) {
      setSelectedId(initialSampleId);
    }
  }, [initialSampleId]);

  // Lock background scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const currentSample = samplePages.find((s) => s.id === selectedId) || samplePages[0];
  const currentIndex = samplePages.findIndex((s) => s.id === selectedId);

  const nextSample = () => {
    const nextIdx = (currentIndex + 1) % samplePages.length;
    setSelectedId(samplePages[nextIdx].id);
  };

  const prevSample = () => {
    const prevIdx = (currentIndex - 1 + samplePages.length) % samplePages.length;
    setSelectedId(samplePages[prevIdx].id);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/75 backdrop-blur-sm animate-fadeIn">
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-2xl shadow-2xl border border-white/20 flex flex-col overflow-hidden text-left">
        {/* Top Header */}
        <div className="bg-[#1e3235] text-white px-5 sm:px-6 py-4 flex items-center justify-between border-b border-white/10 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#468e91]/20 flex items-center justify-center text-[#468e91]">
              <i className="fa-solid fa-file-pdf"></i>
            </div>
            <div>
              <div className="text-xs text-[#b4d0d1] font-semibold uppercase tracking-wider">
                Interactive Sample Viewer
              </div>
              <h3 className="text-base font-bold text-white leading-tight">
                {currentSample.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close Sample Modal"
          >
            <i className="fa-solid fa-xmark text-lg"></i>
          </button>
        </div>

        {/* Navigation Tabs inside Modal */}
        <div className="bg-[#f0f4f5] px-4 py-2.5 border-b border-[#dde4e6] flex items-center justify-between gap-2 flex-wrap flex-shrink-0">
          <div className="flex items-center gap-1.5 overflow-x-auto py-1">
            {samplePages.map((sample) => (
              <button
                key={sample.id}
                onClick={() => setSelectedId(sample.id)}
                className={`text-xs font-bold py-1.5 px-3 rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                  selectedId === sample.id
                    ? "bg-[#008190] text-white shadow-sm"
                    : "bg-white text-[#4a6468] hover:bg-[#e6f0f1] border border-[#dde4e6]"
                }`}
              >
                {sample.type}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-[#4a6468]">
            <span>Page {currentIndex + 1} of {samplePages.length}</span>
            <div className="flex items-center gap-1">
              <button
                onClick={prevSample}
                className="w-7 h-7 rounded bg-white hover:bg-[#e6f0f1] border border-[#dde4e6] flex items-center justify-center cursor-pointer text-[#1e3235]"
                title="Previous Sample"
              >
                <i className="fa-solid fa-chevron-left text-[10px]"></i>
              </button>
              <button
                onClick={nextSample}
                className="w-7 h-7 rounded bg-white hover:bg-[#e6f0f1] border border-[#dde4e6] flex items-center justify-center cursor-pointer text-[#1e3235]"
                title="Next Sample"
              >
                <i className="fa-solid fa-chevron-right text-[10px]"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Modal Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 relative bg-white">
          {/* Watermark */}
          <div className="sample-watermark">FORMSADDA SAMPLE</div>

          {/* Placeholder Banner */}
          <div className="mb-6 p-3 bg-[#e6f0f1] border border-[#b4d0d1] rounded-xl flex items-center justify-between text-xs text-[#008190] font-semibold flex-wrap gap-2">
            <span className="flex items-center gap-2">
              <i className="fa-solid fa-stamp text-[#f38e3e]"></i>
              <span>{currentSample.previewNote}</span>
            </span>
            <span className="text-[#6c757d] font-normal">
              {currentSample.pageNumber}
            </span>
          </div>

          {/* Sample Questions */}
          {currentSample.sections.map((sec, idx) => (
            <div key={idx} className="space-y-4 relative z-10">
              <div className="border-b border-[#dde4e6] pb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#f38e3e]">
                  {sec.topic}
                </span>
              </div>

              <div className="bg-[#f7fafb] p-5 sm:p-6 rounded-xl border border-[#dde4e6]">
                <p className="text-base font-semibold text-[#1e3235] leading-relaxed mb-4">
                  {sec.question}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 text-xs sm:text-sm text-[#2e4447]">
                  {sec.options.map((opt, oIdx) => (
                    <div
                      key={oIdx}
                      className="bg-white p-3 rounded-lg border border-[#dde4e6] flex items-center gap-2.5"
                    >
                      <span className="w-6 h-6 rounded-full bg-[#e6f0f1] text-[#008190] text-xs font-bold flex items-center justify-center flex-shrink-0">
                        {String.fromCharCode(65 + oIdx)}
                      </span>
                      <span>{opt.substring(3)}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-[#e6f0f1] border border-[#b4d0d1] text-xs sm:text-sm text-[#008190] font-medium leading-relaxed mb-3">
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

        {/* Modal Bottom Fixed Footer */}
        <div className="bg-[#f7fafb] px-6 py-4 border-t border-[#dde4e6] flex flex-col sm:flex-row items-center justify-between gap-4 flex-shrink-0">
          <div className="text-xs text-[#4a6468]">
            <span className="font-bold text-[#1e3235]">Ready to prepare smarter?</span> Instant download includes all high-yield pages.
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="py-2.5 px-4 text-xs font-semibold text-[#4a6468] hover:text-[#1e3235] cursor-pointer"
            >
              Close Preview
            </button>
            <button
              onClick={buyGuessPaper}
              className="btn-primary py-2.5 px-6 text-sm font-bold shadow-md cursor-pointer flex-1 sm:flex-initial"
            >
              <i className="fa-solid fa-cart-shopping"></i> BUY FULL PAPER — ₹{productData.price}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

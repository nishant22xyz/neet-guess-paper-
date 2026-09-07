import React, { useState } from "react";
import { faqs, productData, buyGuessPaper } from "../data/guessPaper";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-24 bg-[#e6f0f1] border-b border-[#dde4e6]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start text-left">
          {/* Left Column: Heading & Support Box (5 cols) */}
          <div className="lg:col-span-5">
            <div className="section-label">
              <i className="fa-solid fa-circle-question"></i> Common Questions
            </div>
            <h2 className="section-title">
              Got Questions?<br className="hidden sm:inline" /> We Have Answers.
            </h2>
            <p className="section-sub mb-8">
              Everything you need to know about the NEET-UG Guess Paper, syllabus coverage, and official purchase process.
            </p>

            {/* Help / Contact CTA Box matching FormsADDA */}
            <div className="bg-white/70 backdrop-blur-sm border-1.5 border-[#b4d0d1] rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2.5 text-base font-bold text-[#008190] mb-2">
                <i className="fa-solid fa-headset text-[#f38e3e] text-lg"></i>
                <span>Still Have Doubts?</span>
              </div>
              <p className="text-xs sm:text-sm text-[#4a6468] mb-4 leading-relaxed">
                Our academic assistance team is available to assist you with any questions regarding product access or order completion.
              </p>
              <div className="flex flex-col sm:flex-row gap-2.5">
                <a
                  href={`tel:${productData.supportContact.phone.replace(/\s+/g, "")}`}
                  className="btn-primary py-2.5 px-4 text-xs font-bold flex items-center justify-center gap-2"
                >
                  <i className="fa-solid fa-phone"></i>
                  <span>{productData.supportContact.phone}</span>
                </a>
                <button
                  onClick={buyGuessPaper}
                  className="btn-secondary py-2.5 px-4 text-xs font-bold flex items-center justify-center gap-2"
                >
                  <span>Buy for ₹{productData.price}</span>
                  <i className="fa-solid fa-arrow-right text-[10px]"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion List (7 cols) */}
          <div className="lg:col-span-7 space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`bg-white rounded-xl border transition-all overflow-hidden ${
                    isOpen
                      ? "border-[#008190] shadow-md"
                      : "border-[#dde4e6] hover:border-[#b4d0d1]"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <i className="fa-solid fa-circle-info text-[#008190] text-sm flex-shrink-0"></i>
                      <span className="text-sm sm:text-base font-bold text-[#1e3235] leading-snug">
                        {faq.q}
                      </span>
                    </div>

                    {/* Plus / Cross toggle button matching FormsADDA */}
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 border transition-all ${
                        isOpen
                          ? "bg-[#f38e3e] border-[#f38e3e] text-white rotate-45"
                          : "bg-[#f0f4f5] border-[#dde4e6] text-[#008190]"
                      }`}
                    >
                      <i className="fa-solid fa-plus text-xs"></i>
                    </div>
                  </button>

                  {/* Animated Answer Body */}
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#4a6468] leading-relaxed border-t border-[#f0f4f5]">
                      <p className="m-0 pl-7">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

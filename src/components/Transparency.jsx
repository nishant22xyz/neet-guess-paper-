import React from "react";
import { transparencyChecklist } from "../data/guessPaper";

export default function Transparency() {
  return (
    <section id="transparency" className="py-20 sm:py-24 bg-[#f7fafb] border-b border-[#dde4e6]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="section-label justify-center">
            <i className="fa-solid fa-handshake-angle"></i> Student-First Policy
          </div>
          <h2 className="section-title">Before You Purchase</h2>
          <p className="section-sub max-w-2xl mx-auto">
            FormsADDA is committed to complete clarity and zero misrepresentation. Please review these essential points before completing your order.
          </p>
        </div>

        {/* 8-Point Transparency Grid Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border-2 border-[#dde4e6] p-7 sm:p-10 shadow-sm text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {transparencyChecklist.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#f7fafb] border border-[#dde4e6]"
              >
                <div className="w-7 h-7 rounded-full bg-[#e6f0f1] border border-[#b4d0d1] flex items-center justify-center text-[#008190] flex-shrink-0 mt-0.5">
                  <i className="fa-solid fa-check text-xs"></i>
                </div>
                <span className="text-xs sm:text-sm font-medium text-[#2e4447] leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom Confirmation Banner */}
          <div className="mt-8 pt-6 border-t border-[#dde4e6] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <i className="fa-solid fa-lock text-[#008190] text-xl"></i>
              <span className="text-xs sm:text-sm text-[#4a6468] font-medium">
                Official FormsADDA encrypted checkout. No third-party payment processing.
              </span>
            </div>
            <span className="text-xs font-bold text-[#008190] bg-[#e6f0f1] px-3 py-1.5 rounded-lg">
              100% Authentic
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

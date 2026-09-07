import React from "react";
import { studentReviews } from "../data/guessPaper";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-24 bg-[#f7fafb] border-b border-[#dde4e6]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-label justify-center">
            <i className="fa-solid fa-comments"></i> Student Feedback
          </div>
          <h2 className="section-title">What NEET Aspirants Say</h2>
          <p className="section-sub max-w-2xl mx-auto">
            Honest reflections from students who utilized FormsADDA's exam preparation materials to streamline their final revision phase.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {studentReviews.map((item) => (
            <div
              key={item.id}
              className="fa-card bg-white p-7 rounded-2xl border border-[#dde4e6] text-left flex flex-col justify-between hover:border-[#468e91] transition-all"
            >
              <div>
                {/* Quote Icon & Rating Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-[#f38e3e] text-2xl">
                    <i className="fa-solid fa-quote-left"></i>
                  </div>
                  <div className="flex items-center gap-1 text-[#f38e3e] text-sm">
                    {[...Array(item.rating)].map((_, i) => (
                      <i key={i} className="fa-solid fa-star"></i>
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-sm text-[#4a6468] leading-relaxed mb-6 italic">
                  "{item.review}"
                </p>
              </div>

              {/* Student Meta */}
              <div className="pt-4 border-t border-[#f0f4f5] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#e6f0f1] border border-[#b4d0d1] flex items-center justify-center text-[#008190] font-bold text-sm">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1e3235] m-0">
                    {item.name}
                  </h4>
                  <span className="text-xs text-[#6c757d] font-medium block">
                    {item.role} • {item.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Reviews Insertion */}
        <div className="mt-10 text-center text-xs text-[#6c757d]">
          <i className="fa-solid fa-circle-check text-[#198754] mr-1"></i>
          Feedback collected from registered students using FormsADDA exam resources.
        </div>
      </div>
    </section>
  );
}

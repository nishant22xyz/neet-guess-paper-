import React from "react";
import { facultyData } from "../data/guessPaper";

export default function FacultySection() {
  return (
    <section id="faculty" className="py-20 sm:py-24 bg-white border-b border-[#dde4e6]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-label justify-center">
            <i className="fa-solid fa-chalkboard-user"></i> Academic Credentials
          </div>
          <h2 className="section-title">{facultyData.title}</h2>
          <p className="section-sub max-w-2xl mx-auto">
            Our preparation resources are created by experienced educators and exam analysts dedicated to quality, empirical trend mapping, and pedagogical clarity.
          </p>
        </div>

        {/* Main Faculty Overview Card */}
        <div className="max-w-4xl mx-auto fa-card rounded-2xl border-2 border-[#dde4e6] p-6 sm:p-10 bg-[#f7fafb] text-left relative overflow-hidden mb-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Visual Column / Emblem */}
            <div className="md:col-span-4 flex flex-col items-center justify-center p-6 bg-white rounded-xl border border-[#dde4e6] text-center shadow-sm">
              <div className="w-20 h-20 rounded-2xl bg-[#e6f0f1] border-2 border-[#b4d0d1] flex items-center justify-center text-[#008190] text-3xl mb-4 shadow-inner">
                <i className="fa-solid fa-user-doctor"></i>
              </div>
              <span className="bg-[#fde8d3] text-[#d9742a] text-[10px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider mb-2">
                {facultyData.badge}
              </span>
              <h3 className="text-lg font-bold text-[#1e3235] leading-tight">
                {facultyData.name}
              </h3>
              <p className="text-xs text-[#6c757d] mt-1 font-medium">
                {facultyData.designation}
              </p>
            </div>

            {/* Content Column */}
            <div className="md:col-span-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="bg-white p-3 rounded-lg border border-[#dde4e6]">
                  <span className="text-xs text-[#6c757d] block font-medium">Qualification:</span>
                  <strong className="text-[#1e3235] font-bold">{facultyData.qualification}</strong>
                </div>
                <div className="bg-white p-3 rounded-lg border border-[#dde4e6]">
                  <span className="text-xs text-[#6c757d] block font-medium">Domain Experience:</span>
                  <strong className="text-[#008190] font-bold">{facultyData.experience}</strong>
                </div>
              </div>

              <p className="text-sm text-[#4a6468] leading-relaxed">
                {facultyData.bio}
              </p>

              <div className="flex items-center gap-2 text-xs font-bold text-[#008190] pt-2">
                <i className="fa-solid fa-shield-check text-[#198754] text-base"></i>
                <span>Strictly adhering to ethical academic standards & data integrity.</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2 Subject Academic Wings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {facultyData.facultyMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-xl border border-[#dde4e6] text-left shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-2.5 mb-2.5">
                <span className="w-8 h-8 rounded-lg bg-[#e6f0f1] text-[#008190] flex items-center justify-center font-bold text-xs">
                  {idx + 1}
                </span>
                <div>
                  <h4 className="text-sm font-bold text-[#1e3235] m-0">
                    {member.subject} Wing
                  </h4>
                  <span className="text-[11px] text-[#468e91] font-medium">
                    {member.experience}
                  </span>
                </div>
              </div>
              <p className="text-xs text-[#4a6468] leading-relaxed m-0">
                <strong className="text-[#1e3235]">Focus:</strong> {member.focus}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

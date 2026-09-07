import React from "react";

export default function StudentTrustBanner() {
  return (
    <section className="px-4 sm:px-6 py-5 bg-white">
      <div className="max-w-[1240px] mx-auto">
        <div className="relative overflow-hidden rounded-2xl border border-[#ccecef] bg-gradient-to-r from-[#f2fcfd] via-white to-[#f5fbff] px-5 py-5 sm:px-7 sm:py-6 shadow-[0_8px_30px_rgba(46,68,71,0.07)]">

          {/* Decorative circles */}
          <div className="absolute -right-10 -top-10 w-28 h-28 rounded-full bg-[#008190]/10" />
          <div className="absolute -left-10 -bottom-10 w-24 h-24 rounded-full bg-[#f38e3e]/10" />

          <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

            {/* Main trust message */}
            <div className="flex items-center gap-4">

              <div className="shrink-0 w-14 h-14 rounded-2xl bg-[#e7f8fa] flex items-center justify-center text-3xl">
                🩺
              </div>

              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-3xl sm:text-4xl font-black text-[#008190]">
                    40,000+
                  </span>

                  <span className="text-sm sm:text-base font-bold text-[#1e3235]">
                    NEET aspirants
                  </span>
                </div>

                <p className="mt-1 text-sm sm:text-base text-[#4a6468]">
                  have chosen FormsADDA preparation resources
                </p>
              </div>
            </div>

            {/* Trust points */}
            <div className="flex flex-wrap gap-3 lg:justify-end">

              <div className="flex items-center gap-2 rounded-xl bg-white border border-[#dceff1] px-4 py-3">
                <span className="text-lg">🧬</span>
                <div>
                  <div className="text-xs font-bold text-[#008190]">
                    NEET Focused
                  </div>
                  <div className="text-xs text-[#5d7073]">
                    Biology & Chemistry
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-xl bg-white border border-[#dceff1] px-4 py-3">
                <span className="text-lg">📖</span>
                <div>
                  <div className="text-xs font-bold text-[#008190]">
                    NCERT Oriented
                  </div>
                  <div className="text-xs text-[#5d7073]">
                    Revision focused
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-xl bg-white border border-[#dceff1] px-4 py-3">
                <span className="text-lg">⚡</span>
                <div>
                  <div className="text-xs font-bold text-[#008190]">
                    Instant Access
                  </div>
                  <div className="text-xs text-[#5d7073]">
                    Digital PDF
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

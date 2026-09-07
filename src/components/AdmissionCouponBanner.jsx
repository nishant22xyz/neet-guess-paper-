import React from "react";

export default function AdmissionCouponBanner() {
  return (
    <section className="px-4 sm:px-6 py-6 bg-white">
      <div className="max-w-[1240px] mx-auto">
        <div className="relative overflow-hidden rounded-2xl border border-[#f6d7bd] bg-gradient-to-r from-[#fff7ef] via-white to-[#eef9fa] p-5 sm:p-6 shadow-[0_8px_30px_rgba(46,68,71,0.08)]">
          
          <div className="absolute -right-10 -top-10 w-28 h-28 rounded-full bg-[#f38e3e]/10"></div>
          <div className="absolute -left-10 -bottom-10 w-24 h-24 rounded-full bg-[#008190]/10"></div>

          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-[#fff0e2] flex items-center justify-center text-2xl">
                🎁
              </div>

              <div>
                <div className="inline-flex items-center rounded-full bg-[#f38e3e] text-white px-3 py-1 text-xs font-extrabold tracking-wide uppercase">
                  EXCLUSIVE NEET ASPIRANT BENEFIT
                </div>

                <h2 className="mt-2 text-xl sm:text-2xl font-extrabold text-[#1e3235]">
                  Get a ₹199 College Admission Form Coupon
                </h2>

                <p className="mt-1 text-sm sm:text-base text-[#4a6468] leading-relaxed">
                  Purchase the NEET-UG Guess Paper for ₹99 and receive an additional ₹199 coupon after purchase.
                </p>

                <p className="mt-2 text-xs sm:text-sm font-semibold text-[#008190]">
                  Valid on eligible FormsADDA college admission form services.
                </p>
              </div>
            </div>

            <div className="shrink-0 md:text-right">
              <div className="text-xs font-bold uppercase tracking-wider text-[#6b7f82]">
                Your Student Benefit
              </div>

              <div className="text-3xl sm:text-4xl font-black text-[#f38e3e]">
                ₹199
              </div>

              <div className="text-xs font-bold text-[#008190]">
                ADMISSION COUPON
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
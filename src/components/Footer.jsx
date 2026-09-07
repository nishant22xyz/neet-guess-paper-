import React from "react";
import { productData } from "../data/guessPaper";

export default function Footer() {
  return (
    <footer className="bg-[#1e3235] text-white pt-16 pb-24 md:pb-16 px-4 sm:px-6 border-t border-[#316466]">
      <div className="max-w-[1240px] mx-auto text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col (6 cols) */}
          <div className="md:col-span-6 space-y-4">
            <a
              href={productData.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white p-2 rounded-xl"
            >
              <img
                src={productData.logo}
                alt="FormsADDA Logo"
                className="h-[44px] w-auto object-contain"
              />
            </a>
            <p className="text-xs sm:text-sm text-[#b4d0d1] leading-relaxed max-w-md">
              FormsADDA is India's trusted higher education information hub. Providing students with genuine counselling, cut-off insights, and structured examination resources since 2014.
            </p>
            <div className="text-xs text-white/60">
              <strong className="text-white">Product:</strong> {productData.title} ({productData.session})
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
              Important Links
            </h5>
            <ul className="space-y-2 text-xs text-[#b4d0d1]">
              <li>
                <a
                  href="https://formsadda.com/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#f38e3e] transition-colors flex items-center gap-2"
                >
                  <i className="fa-solid fa-angle-right text-[10px] text-[#468e91]"></i>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://formsadda.com/terms-conditions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#f38e3e] transition-colors flex items-center gap-2"
                >
                  <i className="fa-solid fa-angle-right text-[10px] text-[#468e91]"></i>
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="https://formsadda.com/contact-us"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#f38e3e] transition-colors flex items-center gap-2"
                >
                  <i className="fa-solid fa-angle-right text-[10px] text-[#468e91]"></i>
                  Refund Policy & FAQs
                </a>
              </li>
              <li>
                <a
                  href="https://formsadda.com/contact-us"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#f38e3e] transition-colors flex items-center gap-2"
                >
                  <i className="fa-solid fa-angle-right text-[10px] text-[#468e91]"></i>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Col (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
              Direct Support
            </h5>
            <div className="space-y-2 text-xs text-[#b4d0d1]">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-phone text-[#f38e3e]"></i>
                <a href={`tel:${productData.supportContact.phone.replace(/\s+/g, "")}`} className="hover:text-white">
                  {productData.supportContact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-envelope text-[#f38e3e]"></i>
                <a href={`mailto:${productData.supportContact.email}`} className="hover:text-white">
                  {productData.supportContact.email}
                </a>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <i className="fa-solid fa-location-dot text-[#f38e3e] mt-0.5"></i>
                <span className="text-[11px] leading-tight">
                  {productData.supportContact.address}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p className="m-0 text-center md:text-left max-w-2xl leading-relaxed">
            <strong className="text-white/70">Educational Disclaimer:</strong> This is an independently prepared educational practice/guess paper and is not an official NEET-UG examination paper. NTA is the sole governing body for the National Eligibility cum Entrance Test (NEET-UG). Exact questions cannot be guaranteed.
          </p>
          <div className="text-center md:text-right whitespace-nowrap">
            © 2026 FormsADDA. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

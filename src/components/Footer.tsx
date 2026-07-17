import { QrCode, ArrowUp, Globe } from "lucide-react";
import { ViewPage } from "../types";
import AdPlaceholder from "./AdPlaceholder";

interface FooterProps {
  onViewChange: (view: ViewPage) => void;
}

export default function Footer({ onViewChange }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-slate-100 mt-16 no-print" id="site-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        
        {/* Footer Ad Banner Placeholders */}
        <AdPlaceholder type="footer-banner" className="mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-slate-100">
          
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => onViewChange("home")}>
              <div className="p-1.5 bg-brand-600 rounded-lg text-white">
                <QrCode className="w-4 h-4" />
              </div>
              <span className="font-bold text-slate-900 tracking-tight text-base font-display">QR Studio</span>
            </div>
            <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
              We provide professional-grade QR code generation services completely free of charge. Customize foreground and background elements, margins, error levels, and download formats with complete compliance and 100% browser confidentiality.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-3 font-display">Software Solutions</h4>
            <ul className="space-y-2 text-xs text-slate-500">
              <li>
                <button onClick={() => onViewChange("home")} className="hover:text-brand-600 transition cursor-pointer">
                  QR Code Generator
                </button>
              </li>
              <li>
                <button onClick={() => onViewChange("about")} className="hover:text-brand-600 transition cursor-pointer">
                  About the Platform
                </button>
              </li>
              <li>
                <button onClick={() => onViewChange("contact")} className="hover:text-brand-600 transition cursor-pointer">
                  Contact Support
                </button>
              </li>
            </ul>
          </div>

          {/* Legal Compliance Column */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-3 font-display">Legal Compliance</h4>
            <ul className="space-y-2 text-xs text-slate-500">
              <li>
                <button onClick={() => onViewChange("privacy")} className="hover:text-brand-600 transition cursor-pointer">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => onViewChange("terms")} className="hover:text-brand-600 transition cursor-pointer">
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button onClick={() => onViewChange("disclaimer")} className="hover:text-brand-600 transition cursor-pointer">
                  Service Disclaimer
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright details */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-[11px] text-slate-400">
          <div className="flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-slate-300" />
            <span>© {currentYear} QR Code Studio. All rights reserved. • 100% Client-Side.</span>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-100 bg-slate-50 text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition duration-150 cursor-pointer text-[10px] font-semibold"
            id="back-to-top-footer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

      </div>
    </footer>
  );
}

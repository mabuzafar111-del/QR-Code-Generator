import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, 
  QrCode, 
  Smartphone, 
  CheckCircle2, 
  ShieldCheck, 
  Download, 
  Printer, 
  RefreshCw 
} from "lucide-react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import QRCodeForm from "./components/QRCodeForm";
import QRPreview from "./components/QRPreview";
import AdPlaceholder from "./components/AdPlaceholder";
import { 
  AboutPage, 
  PrivacyPolicyPage, 
  TermsPage, 
  DisclaimerPage, 
  ContactPage 
} from "./components/StaticPages";
import { QRType, ViewPage } from "./types";

export default function App() {
  const [currentView, setCurrentView] = useState<ViewPage>("home");
  const [selectedType, setSelectedType] = useState<QRType>(QRType.URL);
  const [qrValue, setQrValue] = useState<string>("https://google.com");

  // Handle viewing changes with smooth scroll to top
  const handleViewChange = (view: ViewPage) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen bg-sky-50 font-sans" id="app-root-container">
      {/* Navigation Header */}
      <Header currentView={currentView} onViewChange={handleViewChange} />

      {/* Main Content Area */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        
        <AnimatePresence mode="wait">
          {currentView === "home" && (
            <motion.div
              key="home-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
              id="home-view-wrapper"
            >
              {/* Hero Banner */}
              <div className="text-center space-y-3.5 max-w-3xl mx-auto no-print">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-50 rounded-full text-[10px] font-bold text-brand-700 uppercase tracking-widest border border-brand-100">
                  <Sparkles className="w-3 h-3 text-brand-600" />
                  <span>100% Client-Side & High Quality</span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-slate-900 tracking-tight leading-none">
                  Instant Professional <span className="text-brand-600">QR Code Generator</span>
                </h1>
                
                <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
                  Generate customized, high-resolution QR Codes instantly for websites, text, emails, WiFi, phone calls, and vCard contacts. Free of charge, secure, and fully customized.
                </p>
              </div>

              {/* Top Banner Ad Placeholder */}
              <AdPlaceholder type="top-banner" />

              {/* Main Generator Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Form Input Side */}
                <div className="lg:col-span-7 space-y-6 no-print">
                  <QRCodeForm 
                    onValueChange={setQrValue} 
                    selectedType={selectedType}
                    onTypeChange={setSelectedType}
                  />

                  {/* Inside Content Banner ad */}
                  <AdPlaceholder type="inside-content" />
                </div>

                {/* Live Preview & customizer Side */}
                <div className="lg:col-span-5">
                  <QRPreview value={qrValue} />
                </div>

              </div>

              {/* SEO Content Section / Instructions (crucial for Google AdSense Approval) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-slate-100 no-print" id="seo-info-grid">
                
                <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm space-y-2.5">
                  <div className="w-9 h-9 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600">
                    <QrCode className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold font-display text-slate-800 text-sm">How to Create your QR Code?</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Simply select your preferred data type (URL, Email, WiFi, vCard, etc.), fill in the designated configuration fields, personalize the design colors, and download instantly in your preferred format.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm space-y-2.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold font-display text-slate-800 text-sm">Are my details secure?</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Yes, absolutely! Unlike legacy platforms, our generation runs entirely in your local browser sandbox. None of your confidential passwords, telephone numbers, or URLs are ever transmitted to external servers.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm space-y-2.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold font-display text-slate-800 text-sm">Universal Device Support</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    All exported QR Codes follow the standard ISO specifications, making them instantly readable by all iOS and Android smartphone camera decoders, even under poor lighting conditions.
                  </p>
                </div>

              </div>

              {/* In-depth instructional content (AdSense optimization copy) */}
              <article className="prose prose-slate prose-sm max-w-none bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm space-y-4 no-print" id="adsense-seo-copy">
                <h2 className="text-lg font-bold font-display text-slate-900">Why Use Our Custom QR Code Generator?</h2>
                <p className="text-xs text-slate-500 leading-relaxed">
                  QR Codes have revolutionized the way physical and digital worlds interact. Whether you are running a restaurant, managing print marketing flyers, or organizing events, a personalized QR Code is an invaluable asset. Our generator provides you with elite tools for creating customized codes that perfectly match your brand guidelines, ensuring professional appearance and maximum scan conversion.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-600">
                  <div className="flex gap-2 items-start">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                    <span><strong>High Contrast Customization</strong>: Modify background and foreground colors to fit any layout, while keeping readability high.</span>
                  </div>
                  <div className="flex gap-2 items-start">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                    <span><strong>Variable Padding & Quiet Zones</strong>: Control margins around the QR matrix to ensure scanning decoders do not get confused by neighboring graphic frames.</span>
                  </div>
                  <div className="flex gap-2 items-start">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                    <span><strong>High Resolution Exports</strong>: Download crystal-clear PNG and JPG formats suitable for giant banners, business cards, or billboard printing.</span>
                  </div>
                  <div className="flex gap-2 items-start">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                    <span><strong>Error Correction Scaling</strong>: Choose up to 30% recovery tolerance, ensuring your printed codes can survive scratches, bending, and physical weathering.</span>
                  </div>
                </div>
              </article>
            </motion.div>
          )}

          {currentView === "about" && (
            <AboutPage key="about-view" onBackToHome={() => handleViewChange("home")} />
          )}

          {currentView === "privacy" && (
            <PrivacyPolicyPage key="privacy-view" onBackToHome={() => handleViewChange("home")} />
          )}

          {currentView === "terms" && (
            <TermsPage key="terms-view" onBackToHome={() => handleViewChange("home")} />
          )}

          {currentView === "disclaimer" && (
            <DisclaimerPage key="disclaimer-view" onBackToHome={() => handleViewChange("home")} />
          )}

          {currentView === "contact" && (
            <ContactPage key="contact-view" onBackToHome={() => handleViewChange("home")} />
          )}
        </AnimatePresence>

      </main>

      {/* Persistent Navigation Footer */}
      <Footer onViewChange={handleViewChange} />
    </div>
  );
}

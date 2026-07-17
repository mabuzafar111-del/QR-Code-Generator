import React, { useState } from "react";
import { 
  ShieldCheck, 
  BookOpen, 
  FileText, 
  AlertTriangle, 
  Mail, 
  Send, 
  MapPin, 
  PhoneCall, 
  CheckCircle,
  HelpCircle,
  Clock,
  Sparkles,
  Award
} from "lucide-react";
import { motion } from "motion/react";
import AdPlaceholder from "./AdPlaceholder";

interface PageProps {
  onBackToHome: () => void;
  key?: any;
}

export function AboutPage({ onBackToHome }: PageProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
      id="about-page-container"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
        <div>
          <h1 className="text-3xl font-bold font-display text-slate-900 tracking-tight flex items-center gap-2">
            <BookOpen className="w-8 h-8 text-brand-600" />
            About QR Code Generator
          </h1>
          <p className="text-slate-500 mt-1">Learn about our mission, technology, and why thousands of users trust us.</p>
        </div>
        <button 
          onClick={onBackToHome}
          className="self-start md:self-auto px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-medium rounded-xl transition duration-150 shadow-sm shadow-brand-100 cursor-pointer text-sm"
          id="btn-back-home-about"
        >
          Back to Generator
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-card rounded-2xl p-6 md:p-8 shadow-sm">
            <h2 className="text-xl font-bold font-display text-slate-800 mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-brand-500" /> Our Mission
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We believe that utility tools should be fast, highly accessible, secure, and entirely free of clutter. 
              Our <strong>QR Code Generator</strong> is a premium client-side utility engineered to generate 
              high-quality, high-resolution QR codes in seconds. 
            </p>
            <p className="text-slate-600 leading-relaxed">
              Unlike other online platforms that force users to register, pay subscriptions, or pass through tedious ads, 
              we offer full design flexibility, high-speed rendering, and a 100% private generation process 
              for personal and commercial use alike.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 md:p-8 shadow-sm">
            <h2 className="text-xl font-bold font-display text-slate-800 mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-brand-500" /> Premium Features, Absolutely Free
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <h3 className="font-semibold text-slate-800 text-sm">Full Design Customization</h3>
                <p className="text-xs text-slate-500 mt-1">Personalize fore/background colors, QR size, and margins to perfectly match your brand guidelines.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <h3 className="font-semibold text-slate-800 text-sm">100% Client-Side Processing</h3>
                <p className="text-xs text-slate-500 mt-1">All data inputs are compiled inside your web browser. No details are transmitted to any servers.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <h3 className="font-semibold text-slate-800 text-sm">Diverse QR Formats</h3>
                <p className="text-xs text-slate-500 mt-1">Seamlessly export to multiple formats, including PNG, JPG, or trigger clean print layouts.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <h3 className="font-semibold text-slate-800 text-sm">Universal Scan Compatibility</h3>
                <p className="text-xs text-slate-500 mt-1">Engineered in compliance with ISO/IEC 18004 standards to ensure rapid scannability on all modern devices.</p>
              </div>
            </div>
          </div>

          {/* Ad Placeholder Inside About Content */}
          <AdPlaceholder type="inside-content" />

          <div className="glass-card rounded-2xl p-6 md:p-8 shadow-sm">
            <h2 className="text-xl font-bold font-display text-slate-800 mb-4 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-brand-500" /> Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-slate-800 text-sm">Are these generated QR codes permanent?</h3>
                <p className="text-xs text-slate-500 mt-1">Yes, our static QR codes do not expire. Because they encode raw text (or credentials) directly inside the pattern, they will scan indefinitely.</p>
              </div>
              <hr className="border-slate-100" />
              <div>
                <h3 className="font-semibold text-slate-800 text-sm">Are there any restrictions on commercial use?</h3>
                <p className="text-xs text-slate-500 mt-1">None whatsoever! You are free to print your generated QR codes on packaging, business cards, flyers, apparel, or billboard campaigns completely free of royalties.</p>
              </div>
              <hr className="border-slate-100" />
              <div>
                <h3 className="font-semibold text-slate-800 text-sm">How do I choose the correct Error Correction Level?</h3>
                <p className="text-xs text-slate-500 mt-1">Error Correction Levels (L, M, Q, H) specify how much damage or obstruction a QR code can withstand while remaining readable. Level L is ideal for digital screens, while Level H is great for print surfaces prone to dirt, scratching, or bending.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass-card rounded-2xl p-6 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-bold font-display text-slate-800 text-base mb-2">QR Code Guide</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                A QR Code (Quick Response Code) is a two-dimensional matrix barcode originally developed for the automotive industry in Japan. It uses four standardized encoding modes to store alphanumeric data efficiently.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="p-1 rounded-md bg-brand-50 text-brand-600 mt-0.5">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-700">Ultra-fast Scanning</h4>
                    <p className="text-[11px] text-slate-400">Scanned instantly from any angle using CCD cameras or smartphones.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="p-1 rounded-md bg-brand-50 text-brand-600 mt-0.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-700">Self-Correcting</h4>
                    <p className="text-[11px] text-slate-400">Uses Reed-Solomon error correction to restore data from physically defaced codes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <AdPlaceholder type="sidebar-banner" />
        </div>
      </div>
    </motion.div>
  );
}

export function PrivacyPolicyPage({ onBackToHome }: PageProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
      id="privacy-page-container"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
        <div>
          <h1 className="text-3xl font-bold font-display text-slate-900 tracking-tight flex items-center gap-2">
            <ShieldCheck className="w-8 h-8 text-brand-600" />
            Privacy Policy
          </h1>
          <p className="text-slate-500 mt-1">Effective Date: July 15, 2026. Your privacy is our highest priority.</p>
        </div>
        <button 
          onClick={onBackToHome}
          className="self-start md:self-auto px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-medium rounded-xl transition duration-150 shadow-sm shadow-brand-100 cursor-pointer text-sm"
          id="btn-back-home-privacy"
        >
          Back to Generator
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-card rounded-2xl p-6 md:p-8 shadow-sm space-y-6 text-slate-600 leading-relaxed text-sm">
            <section className="space-y-3">
              <h2 className="text-lg font-bold font-display text-slate-800">1. Client-Side Integrity Commitment</h2>
              <p>
                Our service is uniquely structured to run completely in your client's browser sandbox environment. 
                All data inputting fields (including passwords, contact list numbers, email text, message strings, and WiFi credentials) 
                are dynamically compiled to a drawing buffer via HTML5 Canvas using internal standard functions. 
                <strong>We do not save, record, track, or forward any data inputs.</strong> None of your information ever touches a remote database server.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold font-display text-slate-800">2. Cookies and Tracking Technologies</h2>
              <p>
                We may use standard analytical utilities or local browser cookies solely for structural optimization, layout memory (like keeping track of your preferred custom coloring theme), and monitoring aggregated page performance statistics. These do not link back to personal identifier fields.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold font-display text-slate-800">3. Third-Party Advertising and Analytics</h2>
              <p>
                To provide this tool 100% free of charge, we may partner with third-party networks, including Google AdSense. 
                These networks may employ tracking cookies, device identifiers, or web beacons to display targeted advertisements tailored to your interests. 
                You can opt-out of personalized advertising by modifying your Google Ads Settings or clearing your browser cache.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold font-display text-slate-800">4. GDPR & CCPA Compliance</h2>
              <p>
                Because we do not collect, process, or store personal user information in any database, we are inherently aligned with the principles of the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA). You hold full custody and control over all inputs and outputs processed on this applet.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold font-display text-slate-800">5. Contact and Policy Updates</h2>
              <p>
                We reserve the right to modify this statement as utility updates unfold. If you have questions concerning our client-side sandbox architecture, please feel free to reach out via our dedicated Contact Form.
              </p>
            </section>
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-6 bg-brand-50 border border-brand-100 rounded-2xl">
            <h3 className="font-bold text-slate-800 text-sm mb-2">Security Blueprint</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Because all computations are executed within your client browser environment, your data is completely secure against network breaches, server hijacking, or corporate data exposure.
            </p>
          </div>
          <AdPlaceholder type="sidebar-banner" />
        </div>
      </div>
    </motion.div>
  );
}

export function TermsPage({ onBackToHome }: PageProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
      id="terms-page-container"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
        <div>
          <h1 className="text-3xl font-bold font-display text-slate-900 tracking-tight flex items-center gap-2">
            <FileText className="w-8 h-8 text-brand-600" />
            Terms & Conditions
          </h1>
          <p className="text-slate-500 mt-1">Please read these conditions carefully before using our software tools.</p>
        </div>
        <button 
          onClick={onBackToHome}
          className="self-start md:self-auto px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-medium rounded-xl transition duration-150 shadow-sm shadow-brand-100 cursor-pointer text-sm"
          id="btn-back-home-terms"
        >
          Back to Generator
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-card rounded-2xl p-6 md:p-8 shadow-sm space-y-6 text-slate-600 leading-relaxed text-sm">
            <p>
              Welcome to the <strong>QR Code Generator</strong>. By accessing this web platform, you agree to comply with and be bound by the following terms of use. If you do not agree to these terms, please refrain from using our application.
            </p>

            <section className="space-y-3">
              <h2 className="text-lg font-bold font-display text-slate-800">1. Permitted Use</h2>
              <p>
                You are granted a non-exclusive, non-transferable, revocable license to access and use our generator for personal or commercial purposes. You agree not to use the tool to generate QR codes containing illegal, malicious, or highly offensive material, or links leading to phishing sites, malware downloads, or counterfeit operations.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold font-display text-slate-800">2. Intellectual Property Rights</h2>
              <p>
                Our core platform layouts, templates, illustrations, CSS stylesheets, and design elements are the exclusive intellectual property of the site publishers. The individual QR codes, graphics, or credentials you input and generate belong completely to you. We claim no ownership over your generated vectors.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold font-display text-slate-800">3. Termination of Service</h2>
              <p>
                We reserve the right to temporarily modify, shut down, or suspend service levels at any time without prior notification, for maintenance, structural updates, or server adjustments.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold font-display text-slate-800">4. Governing Law</h2>
              <p>
                These terms are governed by and construed in accordance with the laws of our primary operational jurisdiction, without regard to conflict of law principles.
              </p>
            </section>
          </div>
        </div>

        <div className="space-y-6">
          <AdPlaceholder type="sidebar-banner" />
        </div>
      </div>
    </motion.div>
  );
}

export function DisclaimerPage({ onBackToHome }: PageProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
      id="disclaimer-page-container"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
        <div>
          <h1 className="text-3xl font-bold font-display text-slate-900 tracking-tight flex items-center gap-2">
            <AlertTriangle className="w-8 h-8 text-brand-600" />
            Disclaimer
          </h1>
          <p className="text-slate-500 mt-1">Understanding service boundaries and software guarantees.</p>
        </div>
        <button 
          onClick={onBackToHome}
          className="self-start md:self-auto px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-medium rounded-xl transition duration-150 shadow-sm shadow-brand-100 cursor-pointer text-sm"
          id="btn-back-home-disclaimer"
        >
          Back to Generator
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-card rounded-2xl p-6 md:p-8 shadow-sm space-y-6 text-slate-600 leading-relaxed text-sm">
            <div className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-800">
              <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5 text-amber-600" />
              <div>
                <p className="font-semibold text-sm">Please test all generated QR codes before printing or deploying.</p>
                <p className="text-xs text-amber-700 mt-0.5">We are not responsible for any financial loss, printed materials waste, or broken links stemming from improperly formatted data inputs.</p>
              </div>
            </div>

            <section className="space-y-3">
              <h2 className="text-lg font-bold font-display text-slate-800">1. No Warranty</h2>
              <p>
                Our tool is provided on an "as-is" and "as-available" basis without representations or warranties of any kind, either express or implied. While we strive to maintain the highest levels of accuracy, we do not warrant that the application will be uninterrupted, error-free, secure, or free of viruses or other harmful components.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold font-display text-slate-800">2. Printing Verification Clause</h2>
              <p>
                QR Code readability is affected by color contrast ratio, material texture, reflectivity, and camera quality of the scanning device. <strong>We strongly advise running test scans on a digital screen first</strong>, and executing small test print batches before commissioning commercial-scale print runs.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold font-display text-slate-800">3. Limitation of Liability</h2>
              <p>
                In no event shall the publishers, developers, or affiliates of this platform be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, our service, even if we have been advised of the possibility of such damages.
              </p>
            </section>
          </div>
        </div>

        <div className="space-y-6">
          <AdPlaceholder type="sidebar-banner" />
        </div>
      </div>
    </motion.div>
  );
}

export function ContactPage({ onBackToHome }: PageProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
      id="contact-page-container"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
        <div>
          <h1 className="text-3xl font-bold font-display text-slate-900 tracking-tight flex items-center gap-2">
            <Mail className="w-8 h-8 text-brand-600" />
            Contact Us
          </h1>
          <p className="text-slate-500 mt-1">Have a feature request, bug report, or partnership inquiry? Get in touch!</p>
        </div>
        <button 
          onClick={onBackToHome}
          className="self-start md:self-auto px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-medium rounded-xl transition duration-150 shadow-sm shadow-brand-100 cursor-pointer text-sm"
          id="btn-back-home-contact"
        >
          Back to Generator
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {isSuccess ? (
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="glass-card rounded-2xl p-8 shadow-sm flex flex-col items-center justify-center text-center space-y-4 border border-emerald-100 bg-emerald-50/20"
              id="contact-success-card"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h2 className="text-xl font-bold font-display text-slate-800">Message Sent Successfully!</h2>
              <p className="text-sm text-slate-500 max-w-md">
                Thank you for reaching out. Your feedback keeps our services optimized. Our technical support team typically responds to inquiries within 24 to 48 hours.
              </p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-xl transition duration-150 cursor-pointer text-xs"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <div className="glass-card rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="text-lg font-bold font-display text-slate-800 mb-6">Send Us a Direct Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-semibold text-slate-600">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 text-sm glass-input"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-semibold text-slate-600">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. john@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 text-sm glass-input"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-semibold text-slate-600">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g. Custom Integration Request"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 text-sm glass-input"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-slate-600">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    placeholder="Please type your message in detail..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 text-sm glass-input resize-none"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-medium rounded-xl shadow-sm transition duration-150 flex items-center justify-center gap-2 cursor-pointer text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div className="glass-card rounded-2xl p-6 shadow-sm space-y-4">
            <h3 className="font-bold font-display text-slate-800 text-sm">Operational Hub</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              We operate exclusively as a cloud utility developer, with remote engineering teams globally.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2 text-slate-600 text-xs">
                <MapPin className="w-4 h-4 text-brand-500 shrink-0" />
                <span>San Francisco, California, USA</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 text-xs">
                <Mail className="w-4 h-4 text-brand-500 shrink-0" />
                <span>support@qrcodegenerator.com</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 text-xs">
                <PhoneCall className="w-4 h-4 text-brand-500 shrink-0" />
                <span>+1 (800) 555-0199</span>
              </div>
            </div>
          </div>

          <AdPlaceholder type="sidebar-banner" />
        </div>
      </div>
    </motion.div>
  );
}

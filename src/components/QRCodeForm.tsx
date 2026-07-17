import React, { useState, useEffect } from "react";
import { 
  Link2, 
  FileText, 
  Phone, 
  Mail, 
  MessageSquare, 
  Wifi, 
  Contact, 
  Sparkles,
  Eye,
  Info
} from "lucide-react";
import { QRType } from "../types";

interface QRCodeFormProps {
  onValueChange: (value: string) => void;
  selectedType: QRType;
  onTypeChange: (type: QRType) => void;
}

export default function QRCodeForm({ onValueChange, selectedType, onTypeChange }: QRCodeFormProps) {
  // Local state for each form type
  const [url, setUrl] = useState("https://google.com");
  const [text, setText] = useState("Scan this QR Code to see this text!");
  const [phone, setPhone] = useState("+15550199");
  
  const [email, setEmail] = useState({
    to: "hello@qrcodegenerator.com",
    subject: "Business Inquiry",
    body: "Hi, I scanned your custom QR Code and wanted to get in touch!"
  });

  const [sms, setSms] = useState({
    to: "+15550199",
    message: "Hello! I scanned your QR code."
  });

  const [wifi, setWifi] = useState({
    ssid: "My Home Network",
    password: "SecurePassword123",
    encryption: "WPA" as "WPA" | "WEP" | "nopass",
    hidden: false
  });

  const [vcard, setVcard] = useState({
    firstName: "John",
    lastName: "Doe",
    organization: "Global Tech Inc.",
    title: "Senior Product Designer",
    phoneMobile: "+15550100",
    phoneWork: "+15550199",
    email: "john.doe@example.com",
    url: "https://example.com",
    addressStreet: "123 Creative Studio Way",
    addressCity: "San Francisco",
    addressState: "CA",
    addressZip: "94103",
    addressCountry: "USA"
  });

  // Calculate compiled value based on selected tab
  useEffect(() => {
    let compiled = "";
    switch (selectedType) {
      case QRType.URL:
        let formattedUrl = url.trim();
        if (formattedUrl && !/^https?:\/\//i.test(formattedUrl)) {
          formattedUrl = "https://" + formattedUrl;
        }
        compiled = formattedUrl;
        break;

      case QRType.TEXT:
        compiled = text;
        break;

      case QRType.PHONE:
        compiled = `tel:${phone.trim()}`;
        break;

      case QRType.EMAIL:
        const mailto = email.to.trim();
        const subject = encodeURIComponent(email.subject);
        const body = encodeURIComponent(email.body);
        compiled = `mailto:${mailto}?subject=${subject}&body=${body}`;
        break;

      case QRType.SMS:
        compiled = `SMSTO:${sms.to.trim()}:${sms.message}`;
        break;

      case QRType.WIFI:
        const escapedSSID = wifi.ssid.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/:/g, "\\:").replace(/,/g, "\\,");
        const escapedPassword = (wifi.password || "").replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/:/g, "\\:").replace(/,/g, "\\,");
        compiled = `WIFI:S:${escapedSSID};T:${wifi.encryption};P:${escapedPassword};H:${wifi.hidden ? "true" : "false"};;`;
        break;

      case QRType.VCARD:
        const lines = [
          "BEGIN:VCARD",
          "VERSION:3.0",
          `N:${vcard.lastName.trim()};${vcard.firstName.trim()};;;`,
          `FN:${vcard.firstName.trim()} ${vcard.lastName.trim()}`,
        ];
        if (vcard.organization.trim()) lines.push(`ORG:${vcard.organization.trim()}`);
        if (vcard.title.trim()) lines.push(`TITLE:${vcard.title.trim()}`);
        if (vcard.phoneMobile.trim()) lines.push(`TEL;TYPE=CELL:${vcard.phoneMobile.trim()}`);
        if (vcard.phoneWork.trim()) lines.push(`TEL;TYPE=WORK,VOICE:${vcard.phoneWork.trim()}`);
        if (vcard.email.trim()) lines.push(`EMAIL;TYPE=PREF,INTERNET:${vcard.email.trim()}`);
        if (vcard.url.trim()) lines.push(`URL:${vcard.url.trim()}`);
        
        // Address parameters
        const hasAddress = vcard.addressStreet.trim() || vcard.addressCity.trim() || vcard.addressState.trim() || vcard.addressZip.trim() || vcard.addressCountry.trim();
        if (hasAddress) {
          lines.push(`ADR;TYPE=WORK:;;${vcard.addressStreet.trim()};${vcard.addressCity.trim()};${vcard.addressState.trim()};${vcard.addressZip.trim()};${vcard.addressCountry.trim()}`);
        }
        lines.push("END:VCARD");
        compiled = lines.join("\n");
        break;
    }
    onValueChange(compiled);
  }, [selectedType, url, text, phone, email, sms, wifi, vcard]);

  const tabs = [
    { type: QRType.URL, label: "URL", icon: Link2 },
    { type: QRType.TEXT, label: "Text", icon: FileText },
    { type: QRType.WIFI, label: "WiFi", icon: Wifi },
    { type: QRType.EMAIL, label: "Email", icon: Mail },
    { type: QRType.VCARD, label: "vCard Contact", icon: Contact },
    { type: QRType.SMS, label: "SMS", icon: MessageSquare },
    { type: QRType.PHONE, label: "Phone", icon: Phone },
  ];

  return (
    <div className="glass-card rounded-2xl p-6 shadow-sm space-y-6" id="qr-form-panel">
      {/* Tab Selectors */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest font-display">
          1. Select QR Code Type
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-2" id="qr-type-tabs">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isSelected = selectedType === tab.type;
            return (
              <button
                key={tab.type}
                onClick={() => onTypeChange(tab.type)}
                className={`flex items-center gap-2 p-3 rounded-xl border text-xs font-semibold tracking-wide transition duration-150 cursor-pointer ${
                  isSelected
                    ? "bg-brand-600 border-brand-600 text-white shadow-md shadow-brand-100"
                    : "bg-white border-slate-100 text-slate-600 hover:bg-slate-50 hover:border-slate-200"
                }`}
                id={`tab-${tab.type}`}
              >
                <Icon className={`w-4 h-4 shrink-0 ${isSelected ? "text-white" : "text-slate-400"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <hr className="border-slate-100" />

      {/* Dynamic Form Contents */}
      <div className="space-y-4" id="dynamic-form-fields">
        <div className="flex items-center gap-1.5 text-brand-600 text-xs font-semibold mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Configure values below to regenerate live</span>
        </div>

        {/* URL Form */}
        {selectedType === QRType.URL && (
          <div className="space-y-1.5 animate-fadeIn">
            <label htmlFor="input-url" className="text-xs font-semibold text-slate-700">Website URL</label>
            <input
              type="text"
              id="input-url"
              placeholder="e.g. https://yourbusiness.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm glass-input"
            />
            <p className="text-[10px] text-slate-400">Scanners automatically load this web link when scanned.</p>
          </div>
        )}

        {/* Plain Text Form */}
        {selectedType === QRType.TEXT && (
          <div className="space-y-1.5 animate-fadeIn">
            <label htmlFor="input-text" className="text-xs font-semibold text-slate-700">Text Message</label>
            <textarea
              id="input-text"
              rows={4}
              placeholder="Enter message or details you want to display..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm glass-input resize-none"
            />
            <p className="text-[10px] text-slate-400">Displays static plain text. No internet access is required to read.</p>
          </div>
        )}

        {/* Phone Form */}
        {selectedType === QRType.PHONE && (
          <div className="space-y-1.5 animate-fadeIn">
            <label htmlFor="input-phone" className="text-xs font-semibold text-slate-700">Phone Number</label>
            <input
              type="tel"
              id="input-phone"
              placeholder="e.g. +15550199"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm glass-input"
            />
            <p className="text-[10px] text-slate-400">Prompts the user's phone dialer to call this number instantly.</p>
          </div>
        )}

        {/* Email Form */}
        {selectedType === QRType.EMAIL && (
          <div className="space-y-3.5 animate-fadeIn">
            <div className="space-y-1.5">
              <label htmlFor="input-email-to" className="text-xs font-semibold text-slate-700">Recipient Email Address</label>
              <input
                type="email"
                id="input-email-to"
                placeholder="e.g. contact@domain.com"
                value={email.to}
                onChange={(e) => setEmail({ ...email, to: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm glass-input"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="input-email-subject" className="text-xs font-semibold text-slate-700">Default Subject Line</label>
              <input
                type="text"
                id="input-email-subject"
                placeholder="e.g. QR Code Inquiry"
                value={email.subject}
                onChange={(e) => setEmail({ ...email, subject: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm glass-input"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="input-email-body" className="text-xs font-semibold text-slate-700">Pre-composed Body Content</label>
              <textarea
                id="input-email-body"
                rows={3}
                placeholder="e.g. Hi there! I'm interested in..."
                value={email.body}
                onChange={(e) => setEmail({ ...email, body: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm glass-input resize-none"
              />
            </div>
            <p className="text-[10px] text-slate-400">Pre-populates an email drafting window when scanned.</p>
          </div>
        )}

        {/* SMS Form */}
        {selectedType === QRType.SMS && (
          <div className="space-y-3.5 animate-fadeIn">
            <div className="space-y-1.5">
              <label htmlFor="input-sms-to" className="text-xs font-semibold text-slate-700">Phone Number</label>
              <input
                type="tel"
                id="input-sms-to"
                placeholder="e.g. +15550199"
                value={sms.to}
                onChange={(e) => setSms({ ...sms, to: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm glass-input"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="input-sms-msg" className="text-xs font-semibold text-slate-700">Default Message Text</label>
              <textarea
                id="input-sms-msg"
                rows={3}
                placeholder="Type your pre-configured text..."
                value={sms.message}
                onChange={(e) => setSms({ ...sms, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm glass-input resize-none"
              />
            </div>
            <p className="text-[10px] text-slate-400">Opens SMS drafting panel with recipient and message preset.</p>
          </div>
        )}

        {/* WiFi Form */}
        {selectedType === QRType.WIFI && (
          <div className="space-y-3.5 animate-fadeIn">
            <div className="space-y-1.5">
              <label htmlFor="input-wifi-ssid" className="text-xs font-semibold text-slate-700">Network Name (SSID)</label>
              <input
                type="text"
                id="input-wifi-ssid"
                placeholder="e.g. Office_HighSpeed"
                value={wifi.ssid}
                onChange={(e) => setWifi({ ...wifi, ssid: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm glass-input"
              />
            </div>
            
            {wifi.encryption !== "nopass" && (
              <div className="space-y-1.5">
                <label htmlFor="input-wifi-pass" className="text-xs font-semibold text-slate-700">Network Password</label>
                <input
                  type="password"
                  id="input-wifi-pass"
                  placeholder="Password"
                  value={wifi.password}
                  onChange={(e) => setWifi({ ...wifi, password: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm glass-input"
                />
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700">Encryption Type</label>
                <select
                  value={wifi.encryption}
                  onChange={(e) => setWifi({ ...wifi, encryption: e.target.value as "WPA" | "WEP" | "nopass" })}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                >
                  <option value="WPA">WPA/WPA2</option>
                  <option value="WEP">WEP</option>
                  <option value="nopass">Unsecured (Open)</option>
                </select>
              </div>

              <div className="flex items-center gap-2 pt-6">
                <input
                  type="checkbox"
                  id="input-wifi-hidden"
                  checked={wifi.hidden}
                  onChange={(e) => setWifi({ ...wifi, hidden: e.target.checked })}
                  className="w-4 h-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
                />
                <label htmlFor="input-wifi-hidden" className="text-xs font-semibold text-slate-700 cursor-pointer">
                  Hidden Network
                </label>
              </div>
            </div>
            <p className="text-[10px] text-slate-400">Allows mobile devices to connect to this WiFi network immediately upon scanning.</p>
          </div>
        )}

        {/* vCard Contact Form */}
        {selectedType === QRType.VCARD && (
          <div className="space-y-3.5 animate-fadeIn max-h-[400px] overflow-y-auto pr-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="vcard-fname" className="text-xs font-semibold text-slate-700">First Name *</label>
                <input
                  type="text"
                  id="vcard-fname"
                  required
                  placeholder="First"
                  value={vcard.firstName}
                  onChange={(e) => setVcard({ ...vcard, firstName: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs glass-input"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="vcard-lname" className="text-xs font-semibold text-slate-700">Last Name *</label>
                <input
                  type="text"
                  id="vcard-lname"
                  required
                  placeholder="Last"
                  value={vcard.lastName}
                  onChange={(e) => setVcard({ ...vcard, lastName: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs glass-input"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="vcard-org" className="text-xs font-semibold text-slate-700">Organization</label>
                <input
                  type="text"
                  id="vcard-org"
                  placeholder="e.g. Acme Corp"
                  value={vcard.organization}
                  onChange={(e) => setVcard({ ...vcard, organization: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs glass-input"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="vcard-title" className="text-xs font-semibold text-slate-700">Title</label>
                <input
                  type="text"
                  id="vcard-title"
                  placeholder="e.g. Project Lead"
                  value={vcard.title}
                  onChange={(e) => setVcard({ ...vcard, title: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs glass-input"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="vcard-cell" className="text-xs font-semibold text-slate-700">Mobile Phone</label>
                <input
                  type="tel"
                  id="vcard-cell"
                  placeholder="Phone Mobile"
                  value={vcard.phoneMobile}
                  onChange={(e) => setVcard({ ...vcard, phoneMobile: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs glass-input"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="vcard-work" className="text-xs font-semibold text-slate-700">Work Phone</label>
                <input
                  type="tel"
                  id="vcard-work"
                  placeholder="Phone Work"
                  value={vcard.phoneWork}
                  onChange={(e) => setVcard({ ...vcard, phoneWork: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs glass-input"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="vcard-email" className="text-xs font-semibold text-slate-700">Email Address</label>
              <input
                type="email"
                id="vcard-email"
                placeholder="john.doe@example.com"
                value={vcard.email}
                onChange={(e) => setVcard({ ...vcard, email: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs glass-input"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="vcard-url" className="text-xs font-semibold text-slate-700">Website URL</label>
              <input
                type="text"
                id="vcard-url"
                placeholder="https://example.com"
                value={vcard.url}
                onChange={(e) => setVcard({ ...vcard, url: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs glass-input"
              />
            </div>

            <div className="space-y-1.5 border-t border-slate-100 pt-3">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">Work Address</span>
              
              <div className="space-y-1.5">
                <label htmlFor="vcard-addr" className="text-[10px] font-semibold text-slate-600 uppercase">Street Address</label>
                <input
                  type="text"
                  id="vcard-addr"
                  placeholder="Street"
                  value={vcard.addressStreet}
                  onChange={(e) => setVcard({ ...vcard, addressStreet: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs glass-input"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="vcard-city" className="text-[10px] font-semibold text-slate-600 uppercase">City</label>
                  <input
                    type="text"
                    id="vcard-city"
                    placeholder="City"
                    value={vcard.addressCity}
                    onChange={(e) => setVcard({ ...vcard, addressCity: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs glass-input"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="vcard-state" className="text-[10px] font-semibold text-slate-600 uppercase">State</label>
                  <input
                    type="text"
                    id="vcard-state"
                    placeholder="State"
                    value={vcard.addressState}
                    onChange={(e) => setVcard({ ...vcard, addressState: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs glass-input"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="vcard-zip" className="text-[10px] font-semibold text-slate-600 uppercase">Zip Code</label>
                  <input
                    type="text"
                    id="vcard-zip"
                    placeholder="Zip"
                    value={vcard.addressZip}
                    onChange={(e) => setVcard({ ...vcard, addressZip: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs glass-input"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="vcard-country" className="text-[10px] font-semibold text-slate-600 uppercase">Country</label>
                  <input
                    type="text"
                    id="vcard-country"
                    placeholder="Country"
                    value={vcard.addressCountry}
                    onChange={(e) => setVcard({ ...vcard, addressCountry: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs glass-input"
                  />
                </div>
              </div>
            </div>
            <p className="text-[10px] text-slate-400">Scanners can save this directly into their mobile contacts address book.</p>
          </div>
        )}
      </div>
    </div>
  );
}

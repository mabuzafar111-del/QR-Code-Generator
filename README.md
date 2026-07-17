# QR Code Studio - Professional QR Code Generator

A modern, responsive, and production-ready **QR Code Generator** web application engineered with **React, TypeScript, and Tailwind CSS**. 

This application operates **100% on the client side**, ensuring absolute user privacy and instant rendering speeds without requiring any database connections or backend servers.

---

## 🚀 Key Features

1. **Diverse QR Payloads**:
   * **Website URL**: Standard link loading with auto-prefixing protocol guards.
   * **Plain Text**: Ideal for offline notifications, static data, or serial coordinates.
   * **Phone Number**: Prompts immediate cellular dialer actions.
   * **Email drafts**: Fully supports recipient field, subject line, and pre-formatted body templates with character safety encoding.
   * **SMS broadcasts**: Direct message preset coupled with target contacts.
   * **WiFi Network credentials**: Auto-detects WPA, WEP, or Open systems, allowing instant scanning-to-join operations.
   * **vCard (VCF Contacts)**: Generates highly complete virtual contacts (First Name, Last Name, Organization, Position, multiple Phones, Emails, Address, Web URL) compliant with universal smartphone contacts decoders.

2. **Design Customizations**:
   * Change foreground colors (presets + custom color pickers).
   * Change background colors (presets + custom color pickers).
   * Range selection for sizing (200px to 600px).
   * Margin/Quiet-zone control (0 to 6 blocks padding).
   * 4 Error Correction levels (L, M, Q, H) to guarantee scan survival against defacement or bending.

3. **Advanced Export Engines**:
   * **PNG Export**: Clean download with full color rendering.
   * **JPG Export**: Seamless compression layout that maps transparent alpha backgrounds to solid colors to prevent black artifact bugs.
   * **Print-to-Page Layout**: Dedicated `@media print` stylesheets that hide ads, controls, and margins, leaving only the pristine high-resolution QR card centered on the paper workspace.

4. **Monetization & AdSense Readiness**:
   * Pre-structured slots with clean container boxes matching standard dimensions.
   * Specific placeholders for:
     * **Top Leaderboard Banner**
     * **Bottom Leaderboard Banner**
     * **Sidebar Half-Page Banner**
     * **Inside Content Rectangle Banner**
     * **Footer Banner**
   * Pre-configured pop-under ad JavaScript hook inside `/index.html`.

---

## 📁 Technical Architecture & Project Structure

All scripts are modularly separated, well-commented, and optimized:
```text
/
├── public/
│   ├── sitemap.xml             # SEO Sitemap structure
│   └── robots.txt              # Standard robots index guidelines
├── src/
│   ├── types.ts                # TypeScript strictly-typed structures and enums
│   ├── App.tsx                 # View state orchestration & layout architecture
│   ├── index.css               # Google Fonts, Tailwind 4 theme, and print styles
│   └── components/
│       ├── Header.tsx          # Sticky Glassmorphism header with mobile drawer
│       ├── Footer.tsx          # Comprehensive footer with links & bottom banner
│       ├── QRCodeForm.tsx      # Multi-tab data collection panels
│       ├── QRPreview.tsx       # Live rendering engine & download wrappers
│       ├── AdPlaceholder.tsx   # AdSense injection visual adapters
│       └── StaticPages.tsx     # Copywritten pages (About, Privacy, Terms, Disclaimer, Contact)
```

---

## 💵 How to Connect Google AdSense

When your website receives Google AdSense approval:

1. **Auto Ads**: 
   Paste your AdSense auto-ad script in `/index.html` inside the `<head>` block where indicated:
   ```html
   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"></script>
   ```

2. **In-place Banner Slots**:
   Open `/src/components/AdPlaceholder.tsx`. In the return block, replace the mock visual container with your corresponding `<ins className="adsbygoogle">` tag snippet.
   ```tsx
   return (
     <div className={`flex flex-col items-center justify-center ${styling} ${className} no-print`}>
       {/* Paste your tag here: */}
       <ins className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
            data-ad-slot="XXXXXXXXXX"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
     </div>
   );
   ```

3. **Pop-Under Ads**:
   Locate the `<Popunder Script>` tag in the `/index.html` body and paste your network's direct injection codes.

---

## 🔒 Strict Data Confidentiality

This applet runs entirely client-side. No user inputs, passwords, or contact records are ever transmitted over the internet or saved to remote databases. All computations execute locally in the browser memory using native HTML5 drawing canvases.

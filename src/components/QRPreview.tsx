import React, { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";
import { 
  Download, 
  Printer, 
  RefreshCw, 
  Palette, 
  Sliders, 
  ShieldAlert, 
  Layers,
  Sparkles,
  Check,
  AlertCircle
} from "lucide-react";
import { QRConfig } from "../types";

interface QRPreviewProps {
  value: string;
}

export default function QRPreview({ value }: QRPreviewProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // QR config states
  const [config, setConfig] = useState<QRConfig>({
    fgColor: "#1d4ed8", // Slate/Blue
    bgColor: "#ffffff", // Pure White
    size: 350,
    margin: 3,
    errorCorrectionLevel: "M",
  });

  const [lastGenerated, setLastGenerated] = useState<string>("");

  // Common preset colors
  const fgPresets = [
    { label: "Classic Black", value: "#000000" },
    { label: "Ocean Blue", value: "#1d4ed8" },
    { label: "Emerald Green", value: "#059669" },
    { label: "Sunset Orange", value: "#ea580c" },
    { label: "Midnight Indigo", value: "#4f46e5" },
    { label: "Teal Dream", value: "#0d9488" },
  ];

  const bgPresets = [
    { label: "Pure White", value: "#ffffff" },
    { label: "Soft Cream", value: "#fffbeb" },
    { label: "Light Mint", value: "#f0fdf4" },
    { label: "Ice Blue", value: "#f0f9ff" },
    { label: "Slate Grey", value: "#f8fafc" },
  ];

  // Draw QR code to canvas
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const textToEncode = value || "https://google.com";
    setErrorMsg(null);

    QRCode.toCanvas(
      canvasRef.current,
      textToEncode,
      {
        color: {
          dark: config.fgColor,
          light: config.bgColor,
        },
        width: config.size,
        margin: config.margin,
        errorCorrectionLevel: config.errorCorrectionLevel,
      },
      (error) => {
        if (error) {
          console.error("QR Code generation error:", error);
          setErrorMsg("Data is too long for the selected Error Correction Level. Try lowering it or shortening your inputs.");
        } else {
          setLastGenerated(new Date().toLocaleTimeString());
        }
      }
    );
  }, [value, config]);

  // Download actions
  const handleDownload = (format: "png" | "jpg") => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    
    if (format === "png") {
      const dataUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = `qrcode_${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
    } else {
      // JPG download: JPEG doesn't support transparency.
      // Since our canvas is already drawn with config.bgColor, toDataURL works perfectly.
      // Just specify "image/jpeg"
      const dataUrl = canvas.toDataURL("image/jpeg", 0.95);
      const link = document.createElement("a");
      link.download = `qrcode_${Date.now()}.jpg`;
      link.href = dataUrl;
      link.click();
    }
  };

  // Print action
  const handlePrint = () => {
    window.print();
  };

  // Force manual regeneration / refresh
  const handleRefresh = () => {
    // Setting a temporary trigger or just updating state slightly to force draw
    setConfig(prev => ({ ...prev }));
  };

  return (
    <div className="space-y-6" id="qr-preview-panel">
      
      {/* Visual Live Preview Card */}
      <div className="glass-card rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col items-center justify-center print-card" id="qr-display-container">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 font-display no-print">
          2. Live QR Code Preview
        </span>

        {/* The QR Code Canvas Container */}
        <div className="p-4 bg-white rounded-2xl shadow-inner border border-slate-50 relative flex items-center justify-center">
          <canvas 
            ref={canvasRef} 
            className="max-w-full h-auto rounded-lg transition-all duration-200" 
            style={{ width: "260px", height: "260px" }}
            id="qr-canvas-element"
          />
          {errorMsg && (
            <div className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-2xl p-4 flex flex-col items-center justify-center text-center space-y-2">
              <AlertCircle className="w-8 h-8 text-rose-500" />
              <p className="text-xs font-semibold text-slate-800">{errorMsg}</p>
            </div>
          )}
        </div>

        {/* Live Status Indicators */}
        <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-mono mt-3 no-print">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Last rendered: {lastGenerated || "Rendering..."}</span>
        </div>

        {/* QR Core Actions */}
        <div className="grid grid-cols-3 gap-2 w-full mt-6 no-print">
          <button
            onClick={() => handleDownload("png")}
            disabled={!!errorMsg}
            className="flex flex-col items-center justify-center p-3 rounded-xl border border-slate-100 bg-white hover:bg-slate-50 text-slate-700 transition duration-150 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group"
            id="btn-download-png"
          >
            <Download className="w-4 h-4 text-brand-600 mb-1 group-hover:scale-110 transition" />
            <span className="text-[10px] font-bold">PNG</span>
          </button>
          <button
            onClick={() => handleDownload("jpg")}
            disabled={!!errorMsg}
            className="flex flex-col items-center justify-center p-3 rounded-xl border border-slate-100 bg-white hover:bg-slate-50 text-slate-700 transition duration-150 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group"
            id="btn-download-jpg"
          >
            <Download className="w-4 h-4 text-brand-600 mb-1 group-hover:scale-110 transition" />
            <span className="text-[10px] font-bold">JPG</span>
          </button>
          <button
            onClick={handlePrint}
            disabled={!!errorMsg}
            className="flex flex-col items-center justify-center p-3 rounded-xl border border-slate-100 bg-white hover:bg-slate-50 text-slate-700 transition duration-150 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group"
            id="btn-print-qr"
          >
            <Printer className="w-4 h-4 text-brand-600 mb-1 group-hover:scale-110 transition" />
            <span className="text-[10px] font-bold">Print QR</span>
          </button>
        </div>
      </div>

      {/* QR Style Customizer Card */}
      <div className="glass-card rounded-2xl p-6 shadow-sm border border-slate-100 space-y-6 no-print" id="qr-customizer-container">
        <div className="flex items-center justify-between border-b border-slate-50 pb-3">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-widest font-display">
            3. QR Design Customization
          </span>
          <button 
            onClick={handleRefresh}
            className="p-1 rounded text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition"
            title="Force Redraw"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Colors Panel */}
        <div className="space-y-4">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
            <Palette className="w-4 h-4 text-brand-500" />
            <span>Theme & Colors</span>
          </div>
          
          {/* Foreground Color */}
          <div className="space-y-2">
            <label className="text-[10px] font-semibold text-slate-500 uppercase">Foreground (QR Pattern)</label>
            <div className="flex items-center gap-2">
              <input 
                type="color" 
                value={config.fgColor}
                onChange={(e) => setConfig({ ...config, fgColor: e.target.value })}
                className="w-8 h-8 rounded-lg cursor-pointer border border-slate-100 p-0 overflow-hidden bg-transparent"
              />
              <input 
                type="text" 
                value={config.fgColor}
                onChange={(e) => setConfig({ ...config, fgColor: e.target.value })}
                className="px-2.5 py-1 text-xs font-mono rounded border border-slate-200 w-24"
              />
            </div>
            {/* Presets */}
            <div className="flex flex-wrap gap-1.5">
              {fgPresets.map((preset) => (
                <button
                  key={preset.value}
                  onClick={() => setConfig({ ...config, fgColor: preset.value })}
                  style={{ backgroundColor: preset.value }}
                  className="w-5 h-5 rounded-md border border-white shadow-sm hover:scale-110 transition cursor-pointer relative"
                  title={preset.label}
                >
                  {config.fgColor === preset.value && (
                    <Check className="w-3 h-3 text-white absolute inset-0 m-auto" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Background Color */}
          <div className="space-y-2 pt-1">
            <label className="text-[10px] font-semibold text-slate-500 uppercase">Background Color</label>
            <div className="flex items-center gap-2">
              <input 
                type="color" 
                value={config.bgColor}
                onChange={(e) => setConfig({ ...config, bgColor: e.target.value })}
                className="w-8 h-8 rounded-lg cursor-pointer border border-slate-100 p-0 overflow-hidden bg-transparent"
              />
              <input 
                type="text" 
                value={config.bgColor}
                onChange={(e) => setConfig({ ...config, bgColor: e.target.value })}
                className="px-2.5 py-1 text-xs font-mono rounded border border-slate-200 w-24"
              />
            </div>
            {/* Presets */}
            <div className="flex flex-wrap gap-1.5">
              {bgPresets.map((preset) => (
                <button
                  key={preset.value}
                  onClick={() => setConfig({ ...config, bgColor: preset.value })}
                  style={{ backgroundColor: preset.value }}
                  className="w-5 h-5 rounded-md border border-slate-100 shadow-sm hover:scale-110 transition cursor-pointer relative"
                  title={preset.label}
                >
                  {config.bgColor === preset.value && (
                    <Check className="w-3 h-3 text-brand-600 absolute inset-0 m-auto" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        <hr className="border-slate-50" />

        {/* Layout Options */}
        <div className="space-y-4">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
            <Sliders className="w-4 h-4 text-brand-500" />
            <span>Layout and Sizing</span>
          </div>

          {/* Size Select */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-[10px] font-semibold text-slate-500 uppercase">
              <span>QR Code Export Size</span>
              <span>{config.size}px × {config.size}px</span>
            </div>
            <input 
              type="range"
              min={200}
              max={600}
              step={50}
              value={config.size}
              onChange={(e) => setConfig({ ...config, size: parseInt(e.target.value) })}
              className="w-full accent-brand-600 cursor-pointer"
            />
            <div className="flex justify-between text-[8px] text-slate-400 font-mono">
              <span>200px (Compact)</span>
              <span>600px (High Res)</span>
            </div>
          </div>

          {/* Margin Select */}
          <div className="space-y-1.5 pt-1">
            <div className="flex justify-between text-[10px] font-semibold text-slate-500 uppercase">
              <span>Quiet Zone (Margin)</span>
              <span>{config.margin} blocks</span>
            </div>
            <input 
              type="range"
              min={0}
              max={6}
              step={1}
              value={config.margin}
              onChange={(e) => setConfig({ ...config, margin: parseInt(e.target.value) })}
              className="w-full accent-brand-600 cursor-pointer"
            />
            <div className="flex justify-between text-[8px] text-slate-400 font-mono">
              <span>0 (None)</span>
              <span>6 (Wide Padding)</span>
            </div>
          </div>
        </div>

        <hr className="border-slate-50" />

        {/* Advanced Optimization */}
        <div className="space-y-3">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
            <ShieldAlert className="w-4 h-4 text-brand-500" />
            <span>Error Correction Level</span>
          </div>
          
          <div className="grid grid-cols-4 gap-1.5" id="error-correction-selector">
            {(["L", "M", "Q", "H"] as const).map((level) => {
              const labelMap = { L: "7% (Low)", M: "15% (Med)", Q: "25% (High)", H: "30% (Max)" };
              const isSelected = config.errorCorrectionLevel === level;
              return (
                <button
                  key={level}
                  onClick={() => setConfig({ ...config, errorCorrectionLevel: level })}
                  className={`py-2 rounded-lg border text-[10px] font-bold text-center transition cursor-pointer ${
                    isSelected 
                      ? "bg-brand-50 border-brand-500 text-brand-700 font-bold" 
                      : "bg-white border-slate-100 text-slate-500 hover:bg-slate-50"
                  }`}
                  title={`${labelMap[level]} recovery capacity`}
                >
                  {level}
                </button>
              );
            })}
          </div>
          <p className="text-[9px] text-slate-400 leading-normal">
            Higher values allow the QR code to scan successfully even if it is partially covered, wet, dirty, or damaged.
          </p>
        </div>

      </div>

    </div>
  );
}

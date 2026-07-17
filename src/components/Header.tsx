import React, { useState } from "react";
import { QrCode, Menu, X, Globe, Award, ShieldCheck, Mail, Info } from "lucide-react";
import { ViewPage } from "../types";

interface HeaderProps {
  currentView: ViewPage;
  onViewChange: (view: ViewPage) => void;
}

export default function Header({ currentView, onViewChange }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navigation: { name: string; value: ViewPage; icon: React.ComponentType<any> }[] = [
    { name: "QR Generator", value: "home", icon: QrCode },
    { name: "About Us", value: "about", icon: Info },
    { name: "Privacy Policy", value: "privacy", icon: ShieldCheck },
    { name: "Terms & Conditions", value: "terms", icon: Award },
    { name: "Contact", value: "contact", icon: Mail },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-slate-100 no-print" id="site-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            onClick={() => {
              onViewChange("home");
              setIsOpen(false);
            }} 
            className="flex items-center gap-2.5 cursor-pointer select-none"
            id="brand-logo-trigger"
          >
            <div className="p-2 bg-brand-600 rounded-xl text-white shadow-sm shadow-brand-200">
              <QrCode className="w-5 h-5 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-900 tracking-tight text-base font-display">QR Studio</span>
              <span className="text-[10px] text-brand-600 font-mono font-bold leading-none uppercase tracking-widest">Free Generator</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5" id="desktop-nav">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.value;
              return (
                <button
                  key={item.value}
                  onClick={() => onViewChange(item.value)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide transition duration-150 flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? "bg-brand-50 text-brand-700"
                      : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
                  }`}
                  id={`nav-${item.value}`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  {item.name}
                </button>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden" id="mobile-menu-toggle-container">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition duration-150 cursor-pointer"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white" id="mobile-navigation-dropdown">
          <div className="px-2 pt-2 pb-4 space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.value;
              return (
                <button
                  key={item.value}
                  onClick={() => {
                    onViewChange(item.value);
                    setIsOpen(false);
                  }}
                  className={`w-full px-4 py-3 rounded-xl text-xs font-semibold tracking-wide flex items-center gap-3 transition duration-150 cursor-pointer ${
                    isActive
                      ? "bg-brand-50 text-brand-700 font-bold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                  id={`nav-mobile-${item.value}`}
                >
                  <Icon className="w-5 h-5 text-slate-400" />
                  {item.name}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}

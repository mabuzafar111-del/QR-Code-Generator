import { Megaphone } from "lucide-react";

interface AdPlaceholderProps {
  type: "top-banner" | "bottom-banner" | "sidebar-banner" | "inside-content" | "footer-banner";
  className?: string;
}

export default function AdPlaceholder({ type, className = "" }: AdPlaceholderProps) {
  // Define dimensions and names based on type
  let dimensions = "";
  let name = "";
  let styling = "";

  switch (type) {
    case "top-banner":
      dimensions = "728x90 (Leaderboard) / 320x50 (Mobile)";
      name = "Top Banner Ad";
      styling = "w-full min-h-[90px] py-2 md:py-4";
      break;
    case "bottom-banner":
      dimensions = "728x90 (Leaderboard) / 320x50 (Mobile)";
      name = "Bottom Banner Ad";
      styling = "w-full min-h-[90px] py-2 md:py-4";
      break;
    case "sidebar-banner":
      dimensions = "300x600 (Half Page) / 300x250 (Square)";
      name = "Sidebar Ad";
      styling = "w-full min-h-[250px] lg:min-h-[500px]";
      break;
    case "inside-content":
      dimensions = "336x280 (Large Rectangle)";
      name = "Inside Content Ad";
      styling = "w-full min-h-[200px] md:min-h-[280px]";
      break;
    case "footer-banner":
      dimensions = "970x90 (Large Leaderboard)";
      name = "Footer Banner Ad";
      styling = "w-full min-h-[90px] py-4";
      break;
  }

  return (
    <div id={`ad-wrapper-${type}`} className={`flex flex-col items-center justify-center ${styling} ${className} no-print`}>
      {/* <!-- Google AdSense Placeholder Start --> */}
      {/* <!-- Replacing this component with AdSense: paste your <ins class="adsbygoogle"> here --> */}
      
      {/* 
        <!-- Example AdSense Integration:
        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
             data-ad-slot="XXXXXXXXXX"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
        <script>
             (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
        -->
      */}

      {/* <!-- {name} Placeholder Visual --> */}
      <div 
        id={`ad-box-${type}`}
        className="w-full h-full flex flex-col items-center justify-center border-2 border-dashed border-slate-200 bg-slate-50/50 rounded-xl p-4 text-center transition-all duration-200 hover:border-brand-100 hover:bg-slate-50"
      >
        <div className="flex items-center gap-2 text-slate-400 mb-1">
          <Megaphone className="w-4 h-4 text-brand-500" />
          <span className="text-xs font-semibold tracking-wider uppercase">Sponsored Ad Placeholder</span>
        </div>
        <p className="text-sm font-medium text-slate-600 font-display">{name}</p>
        <p className="text-[10px] text-slate-400 font-mono mt-1">{dimensions}</p>
        <p className="text-[10px] text-slate-300 mt-2 italic">AdSense approval ready • Click to customize</p>
      </div>
      
      {/* <!-- Google AdSense Placeholder End --> */}
    </div>
  );
}

import { Phone, Instagram } from "lucide-react";
import { personalInfo } from "../data";

export default function Footer() {
  return (
    <footer className="bg-[#070d1f] w-full py-12 px-8 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-lg font-bold text-white">
          {personalInfo.nickname}
        </div>
        
        <div className="text-slate-400 text-sm tracking-wide text-center">
          © 2026 {personalInfo.name}. All rights reserved.
        </div>
        
        <div className="flex gap-8 items-center">
          <a 
            href={`tel:${personalInfo.phone}`} 
            className="text-slate-400 hover:text-tertiary transition-colors text-sm tracking-wide flex items-center gap-2"
          >
            <Phone size={14} />
            {personalInfo.phone}
          </a>
          <a 
            href="#" 
            className="text-slate-400 hover:text-tertiary transition-colors text-sm tracking-wide flex items-center gap-2"
          >
            <Instagram size={14} />
            {personalInfo.instagram}
          </a>
        </div>
      </div>
    </footer>
  );
}

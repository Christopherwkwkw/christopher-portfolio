import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { personalInfo } from "../data";

export default function Header() {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/skills#projects" }, // Projects are on page 2
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#070d1f]/80 backdrop-blur-xl shadow-[0_20px_50px_rgba(7,13,31,0.3)]">
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <Link to="/" className="text-2xl font-black text-tertiary tracking-tighter font-headline uppercase">
          {personalInfo.nickname}
        </Link>
        
        <div className="hidden md:flex items-center gap-10 font-headline tracking-tighter uppercase font-bold">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`transition-all duration-200 hover:translate-x-1 ${
                location.pathname === link.path
                  ? "text-tertiary border-b-2 border-tertiary pb-1"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button className="bg-tertiary text-on-tertiary px-6 py-2 rounded-md font-bold uppercase tracking-widest text-sm hover:translate-x-1 transition-all active:scale-95">
          Contact
        </button>
      </nav>
    </header>
  );
}

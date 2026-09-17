"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Direct force-download handler
  const handleDownloadCV = async () => {
    try {
      const response = await fetch("/ResumeOFShyamshreeMerged.pdf");
      if (!response.ok) throw new Error("Resume file not found");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      
      const link = document.createElement("a");
      link.href = url;
      link.download = "ResumeOFShyamshreeMerged.pdf";
      document.body.appendChild(link);
      link.click();
      
      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to download file:", error);
      alert("Resume file is currently unavailable. Please ensure 'Resume_Shyamshree.pdf' is inside the public folder.");
    }
  };

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 border-b" 
      style={{ background: "rgba(10,10,15,0.92)", backdropFilter: "blur(12px)", borderColor: "var(--border)" }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg gradient-btn flex items-center justify-center font-bold text-white text-sm">SS</div>
          <span className="font-semibold text-white">Shyamshree</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`nav-link text-sm font-medium ${pathname === l.href ? "text-white active" : "text-slate-400 hover:text-white"}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <button
          onClick={handleDownloadCV}
          type="button"
          className="hidden md:flex items-center gap-2 gradient-btn text-white text-sm font-medium px-4 py-2 rounded-lg transition-all cursor-pointer hover:shadow-lg hover:shadow-purple-900/40"
        >
          <Download size={14} />
          Download CV
        </button>

        {/* Mobile toggle */}
        <button className="md:hidden text-white cursor-pointer" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t px-6 py-4 flex flex-col gap-4" style={{ background: "var(--bg-secondary)", borderColor: "var(--border)" }}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`text-sm font-medium ${pathname === l.href ? "gradient-text" : "text-slate-400"}`}
            >
              {l.label}
            </Link>
          ))}
          <button 
            onClick={() => {
              setOpen(false);
              handleDownloadCV();
            }} 
            type="button"
            className="gradient-btn text-white text-sm font-medium px-4 py-2 rounded-lg flex items-center gap-2 w-fit cursor-pointer"
          >
            <Download size={14} /> Download CV
          </button>
        </div>
      )}
    </nav>
  );
}

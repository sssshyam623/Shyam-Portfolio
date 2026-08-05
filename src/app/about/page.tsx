"use client";

import { Download, MapPin, Mail, Clock, ShieldCheck, Briefcase, Award, Sparkles, Cpu } from "lucide-react";
import Image from "next/image";

export default function About() {
  const info = [
    { icon: <ShieldCheck size={16} />, label: "Name", value: "Shyamshree" },
    { icon: <Mail size={16} />, label: "Email", value: "sssshyam702@gmail.com" },
    { icon: <MapPin size={16} />, label: "Location", value: "India" },
    { icon: <Clock size={16} />, label: "Availability", value: "Open to work" },
  ];

  const highlights = [
    { icon: <Sparkles size={20} className="text-purple-400" />, text: "Architecting AI-powered chat applications using RAG and SSE streaming." },
    { icon: <Briefcase size={20} className="text-purple-400" />, text: "Built 15+ production-ready web apps with Next.js & Node.js." },
    { icon: <Award size={20} className="text-purple-400" />, text: "Focused on scalable APIs, real-time data, and high-converting UI/UX." },
  ];

  // Direct force-download handler
  const handleDownloadCV = async () => {
    try {
      const response = await fetch("/Resume_Shyamshree.pdf");
      if (!response.ok) throw new Error("Resume file not found");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      
      const link = document.createElement("a");
      link.href = url;
      link.download = "Shyamshree_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      
      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to download file:", error);
      alert("Resume file is currently unavailable. Please place 'Resume_Shyamshree.pdf' in the public folder.");
    }
  };

  return (
    <section className="min-h-screen pt-28 pb-16 relative overflow-hidden bg-(--bg-primary)">
      {/* Accent glow (Pure Purple) */}
      <div 
        className="absolute top-1/4 -left-32 w-64 h-64 rounded-full opacity-20" 
        style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)', filter: 'blur(60px)' }} 
      />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-10 items-stretch">

        {/* Left – text column */}
        <div className="md:col-span-7 space-y-6 flex flex-col justify-between">
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold text-purple-400 uppercase tracking-widest mb-2">Get To Know Me</p>
              <h1 className="text-4xl md:text-5xl font-black text-white">About Me</h1>
            </div>

            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I am a results-driven <strong className="text-slate-200">Full Stack & AI Engineer</strong> specializing in building scalable web applications and intelligent systems. My expertise spans modern frameworks like Next.js, React, Node.js, and TypeScript, backed by robust backend architectures.
              </p>
              <p>
                I specialize in engineering <strong className="text-slate-200">AI-powered chat applications</strong> integrated with <strong className="text-slate-200">Retrieval-Augmented Generation (RAG)</strong> for smart contextual responses, and <strong className="text-slate-200">Server-Sent Events (SSE)</strong> to deliver smooth, real-time streaming user experiences.
              </p>
              <p>
                Whether it is optimizing database queries, building real-time data pipelines, or designing high-converting user interfaces, I engineer production-grade solutions tailored for business growth.
              </p>
            </div>

            {/* Highlights section */}
            <div className="space-y-3 py-2">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-(--bg-secondary) border border-(--border) rounded-lg px-4 py-3">
                  {item.icon}
                  <span className="text-slate-300 text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              {info.map((item, i) => (
                <div key={i} className="card-border rounded-xl p-4 flex items-start gap-3 bg-(--bg-secondary)">
                  <div className="w-8 h-8 rounded-lg gradient-btn flex items-center justify-center text-white shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-0.5">{item.label}</div>
                    <div className="text-sm font-medium text-white">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Download Button */}
          <div className="pt-2">
            <button 
              onClick={handleDownloadCV}
              type="button"
              className="gradient-btn inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-purple-900/40 transition-all cursor-pointer"
            >
              <Download size={16} /> Download CV
            </button>
          </div>
        </div>

        {/* Right – Visual Container */}
        <div className="md:col-span-5 relative flex w-full h-full min-h-[480px]">
          <div 
            className="relative z-10 w-full h-full rounded-2xl p-2 flex flex-col" 
            style={{ background: '#121216', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}
          >
            {/* Clean Purple Border Overlay (No blue components) */}
            <div 
              className="absolute inset-0 rounded-2xl border-2 pointer-events-none z-10" 
              style={{ 
                borderColor: 'transparent', 
                backgroundImage: 'linear-gradient(135deg, rgba(124,58,237,0.4) 0%, rgba(147,51,234,0.15) 100%)', 
                maskImage: 'linear-gradient(white, white) content-box, linear-gradient(white, white)', 
                WebkitMaskImage: 'linear-gradient(white, white) content-box, linear-gradient(white, white)', 
                maskComposite: 'xor', 
                WebkitMaskComposite: 'xor' 
              }}
            />

            {/* Inner Image Frame */}
            <div className="w-full h-full rounded-xl overflow-hidden relative bg-[#0a0a0d] border border-(--border) flex-1">
              <Image
                src="/AboutPhoto-professional.png"
                alt="Shyamshree professional portrait"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-top hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>

            {/* Badges (Purple glassmorphic) */}
            <div className="absolute -bottom-3 -left-3 z-20 bg-purple-950/40 border border-purple-500/40 text-purple-300 text-xs font-bold px-3.5 py-2 rounded-lg backdrop-blur-md shadow-xl flex items-center gap-1.5">
              <Cpu size={14} /> AI & RAG ARCHITECT
            </div>
            <div className="absolute -top-3 -right-3 z-20 bg-purple-950/40 border border-purple-500/40 text-purple-300 text-xs font-bold px-3.5 py-2 rounded-lg backdrop-blur-md shadow-xl flex items-center gap-1.5">
              <Sparkles size={14} /> SSE STREAMING
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
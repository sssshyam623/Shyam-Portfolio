import { GitFork, Link2, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const socials = [
    { icon: <GitFork size={18} />, href: "#", label: "GitHub" },
    { icon: <Link2 size={18} />, href: "#", label: "LinkedIn" },
    { icon: <span className="text-sm font-bold">𝕏</span>, href: "#", label: "Twitter" },
    { icon: <Mail size={18} />, href: "#", label: "Email" },
  ];

  return (
    <section className="min-h-screen dot-pattern flex items-center pt-16 relative overflow-hidden">
      <div className="hero-glow" style={{ top: "10%", right: "8%" }} />
      <div className="hero-glow" style={{ bottom: "10%", left: "-5%", width: "300px", height: "300px" }} />

      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center w-full">
        
        {/* 1. PROFILE IMAGE (WITH POP-OUT OVERFLOW EFFECT) */}
        <div className="flex justify-center z-10 order-2 md:order-1">
          <div className="relative float-anim">
            {/* Outer Glowing Circle */}
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-full relative flex items-center justify-center" style={{ background: "radial-gradient(circle at 60% 40%, #7c3aed 0%, #3b82f6 60%, #0f0f1a 100%)" }}>
              
              {/* Inner Circle Base */}
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-full border-2 relative flex items-center justify-center" style={{ borderColor: "rgba(124,58,237,0.4)", background: "rgba(15, 15, 26, 0.4)" }}>
                
                {/* Pop-Out Image Container */}
                <div className="absolute inset-0 flex items-end justify-center">
                  <Image
                    src="/MyPhoto-removebg-preview.png"
                    alt="Shyam shree profile picture"
                    width={320}
                    height={320}
                    className="object-contain scale-125 -translate-y-4 drop-shadow-2xl"
                    priority
                  />
                </div>

              </div>
            </div>

            {/* Badges */}
            <div className="absolute -top-4 -left-4 card-border rounded-xl px-3 py-2 text-xs font-medium text-purple-400 z-20">&lt;/&gt; Next.js</div>
            <div className="absolute -bottom-4 -right-4 card-border rounded-xl px-3 py-2 text-xs font-medium text-blue-400 z-20">🎨 Tailwind</div>
          </div>
        </div>

        {/* 2. TEXT CONTENT */}
        <div className="space-y-6 z-10 order-1 md:order-2">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium border" style={{ borderColor: "var(--border)", background: "var(--bg-card)" }}>
            <span>👋</span><span className="text-slate-300">Hi, I'm</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black leading-tight">
            Shyam <span className="gradient-text">shree</span>
          </h1>
          <h2 className="text-2xl font-semibold text-slate-300">Full Stack Developer</h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-md">
            I build modern, responsive and user-friendly web applications with Next.js and Tailwind CSS.
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <Link href="/projects" className="gradient-btn text-white font-semibold px-6 py-3 rounded-xl flex items-center gap-2">
              View My Work <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="border text-white font-semibold px-6 py-3 rounded-xl hover:border-purple-500 transition-colors" style={{ borderColor: "var(--border)" }}>
              Contact Me
            </Link>
          </div>

          <p className="text-slate-500 text-sm font-medium">Connect with me</p>
          <div className="flex items-center gap-4">
            {socials.map((s, i) => (
              <a key={i} href={s.href} aria-label={s.label} className="w-10 h-10 rounded-lg card-border flex items-center justify-center text-slate-400 hover:text-white hover:border-purple-500 transition-all">
                {s.icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { ExternalLink, Download, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "JobGateway",
    description: "A platform designed to streamline job search, applications, and recruiter connections.",
    tags: ["Next.js", "Tailwind CSS", "MongoDB"],
    image: "/JobGateway.jpg",
    liveUrl: "https://job-gateway.vercel.app/",
  },
  {
    id: 2,
    title: "Junior Technical School",
    description: "An educational platform designed to empower students with technical skills and modern learning resources.",
    tags: ["Next.js", "MDX", "Tailwind CSS"],
    image: "/Jr_School.jpg",
    liveUrl: "https://junior-technical-school-l97z.onrender.com/",
  },
  {
    id: 3,
    title: "AuthKit",
    description: "A complete, production-ready authentication and authorization starter kit.",
    tags: ["Next.js", "API", "Tailwind CSS"],
    image: "/Authkit.jpg",
    liveUrl: "https://01-auth-kit.vercel.app/",
  },
  {
    id: 4,
    title: "Live Collab",
    description: "Real-time collaborative document and canvas editor for distributed teams.",
    tags: ["Next.js", "Tailwind CSS", "WebSockets"],
    image: "/LiveCollab.jpg",
    liveUrl: "https://05-live-collab-ged5.vercel.app/",
  },
  {
    id: 5,
    title: "Stream Chat",
    description: "RAG-powered conversational AI agent featuring real-time Server-Sent Events (SSE) streaming.",
    tags: ["Next.js", "LangChain", "Pinecone", "SSE"],
    image: "/StreamChat.jpg",
    liveUrl: "https://03-stream-chat.vercel.app/",
  },
  {
    id: 6,
    title: "DocBot",
    description: "An AI-driven documentation assistant that indexes repos and answers developer queries instantly.",
    tags: ["Next.js", "TypeScript", "Node.js", "Tailwind CSS"],
    image: "/DocBot.jpg", // Fixed: Added missing leading slash to avoid Next.js Image crash
    liveUrl: "https://doc-bot-eosin.vercel.app/",
  },
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  // Download CV Handler
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
      alert("Resume file is currently unavailable. Please ensure 'Resume_Shyamshree.pdf' is inside the public folder.");
    }
  };

  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section className="min-h-screen pt-28 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold text-purple-400 uppercase tracking-widest mb-2">My Work</p>
          <h1 className="text-4xl font-black text-white">Featured Projects</h1>
          <p className="text-slate-400 mt-3">A collection of production-grade apps I've engineered</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {visibleProjects.map((p) => (
            <a 
              key={p.id} 
              href={p.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-card card-border rounded-2xl overflow-hidden group block bg-(--bg-secondary) hover:border-purple-500/50 transition-all duration-300"
            >
              {/* Preview image area */}
              <div className="h-48 w-full relative overflow-hidden bg-slate-900">
                <Image
                  src={p.image}
                  alt={`${p.title} screenshot`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  priority={p.id <= 2}
                />
                
                {/* Dark overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                  <div className="w-9 h-9 gradient-btn rounded-xl flex items-center justify-center shadow-lg">
                    <ExternalLink size={16} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">{p.title}</h3>
                  <ExternalLink size={14} className="text-slate-500 group-hover:text-purple-400 transition-colors" />
                </div>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Action Controls */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => setShowAll(!showAll)}
            type="button"
            className="gradient-btn inline-flex items-center gap-2 text-white font-semibold px-8 py-3 rounded-xl hover:shadow-lg hover:shadow-purple-900/40 transition-all cursor-pointer"
          >
            {showAll ? (
              <>
                Show Less <ChevronUp size={18} />
              </>
            ) : (
              <>
                View All Projects ({projects.length}) <ChevronDown size={18} />
              </>
            )}
          </button>

          <button
            onClick={handleDownloadCV}
            type="button"
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white bg-(--bg-secondary) border border-(--border) hover:border-purple-500/40 font-semibold px-6 py-3 rounded-xl transition-all cursor-pointer"
          >
            <Download size={16} className="text-purple-400" /> Download CV
          </button>
        </div>
      </div>
    </section>
  );
}

import { ArrowLeft, ExternalLink, GitFork } from "lucide-react";
import Link from "next/link";

const projects: Record<string, { title: string; description: string; longDesc: string; tags: string[]; color: string; emoji: string; liveUrl: string; githubUrl: string; features: string[] }> = {
  "1": {
    title: "TaskFlow",
    description: "A productivity app to manage tasks and collaborate with teams.",
    longDesc: "TaskFlow is a full-stack productivity application that helps teams manage their work efficiently. It features real-time updates, drag-and-drop task management, and team collaboration tools built with Next.js and MongoDB.",
    tags: ["Next.js", "Tailwind CSS", "MongoDB", "Node.js", "JWT"],
    color: "#7c3aed",
    emoji: "📋",
    liveUrl: "#",
    githubUrl: "#",
    features: ["Task creation, editing, and deletion", "Team collaboration & sharing", "Real-time status updates", "Priority & deadline tracking", "Responsive design"],
  },
  "2": {
    title: "DevBlog",
    description: "A blog platform for developers to share knowledge and experience.",
    longDesc: "DevBlog is a modern blogging platform specifically designed for developers. It supports MDX for rich content, syntax highlighting, and offers a clean reading experience with dark mode support.",
    tags: ["Next.js", "MDX", "Tailwind CSS", "TypeScript"],
    color: "#3b82f6",
    emoji: "✍️",
    liveUrl: "#",
    githubUrl: "#",
    features: ["MDX content support", "Syntax highlighting", "Dark mode", "SEO optimized", "Search & filtering"],
  },
  "3": {
    title: "Weather App",
    description: "A weather application that shows real-time weather information.",
    longDesc: "A clean and modern weather application that provides real-time weather data using external APIs. Features include hourly forecasts, 7-day forecasts, and location-based weather.",
    tags: ["Next.js", "API", "Tailwind CSS"],
    color: "#06b6d4",
    emoji: "🌤",
    liveUrl: "#",
    githubUrl: "#",
    features: ["Real-time weather data", "7-day forecast", "Location detection", "Weather icons & animations", "Mobile-first design"],
  },
  "4": {
    title: "Portfolio v1",
    description: "My personal portfolio website built with Next.js & Tailwind CSS.",
    longDesc: "The first version of my personal portfolio website, showcasing my skills, projects, and experience as a Full Stack Developer.",
    tags: ["Next.js", "Tailwind CSS"],
    color: "#f59e0b",
    emoji: "🌐",
    liveUrl: "#",
    githubUrl: "#",
    features: ["Clean, responsive design", "Project showcase", "Contact form", "Skills display", "Dark theme"],
  },
};

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = projects[params.id];
  if (!project) return <div className="pt-28 text-center text-slate-400">Project not found.</div>;

  return (
    <section className="min-h-screen pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <Link href="/projects" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 text-sm">
          <ArrowLeft size={16} /> Back to Projects
        </Link>

        {/* Hero */}
        <div className="rounded-2xl h-56 flex items-center justify-center text-7xl mb-8 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${project.color}22, ${project.color}44)` }}>
          <div className="text-9xl opacity-10 absolute">{project.emoji}</div>
          <div className="relative z-10 text-7xl">{project.emoji}</div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div>
              <h1 className="text-3xl font-black mb-2">{project.title}</h1>
              <p className="text-slate-400 leading-relaxed">{project.longDesc}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3">Key Features</h3>
              <ul className="space-y-2">
                {project.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-400 text-sm">
                    <span className="w-5 h-5 rounded-full gradient-btn flex-shrink-0 flex items-center justify-center text-xs text-white">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <div className="card-border rounded-xl p-5 space-y-4">
              <h3 className="font-bold">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-full font-medium" style={{ background: `${project.color}22`, color: project.color }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <a href={project.liveUrl} className="gradient-btn w-full text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 text-sm">
              <ExternalLink size={15} /> Live Demo
            </a>
            <a href={project.githubUrl} className="card-border w-full text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 text-sm hover:border-purple-500 transition-colors">
              <GitFork size={15} /> View Code
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Skills() {
  const frontend = [
    { name: "Next.js", icon: "N", color: "#ffffff" },
    { name: "React", icon: "⚛", color: "#61dafb" },
    // { name: "TypeScript", icon: "TS", color: "#3178c6" },
    { name: "Tailwind", icon: "🌊", color: "#38bdf8" },
    { name: "HTML5", icon: "H", color: "#e34f26" },
    { name: "CSS3", icon: "C", color: "#264de4" },
    { name: "JavaScript", icon: "JS", color: "#f7df1e" },
  ];

  const backend = [
    { name: "Node.js", icon: "🟢", color: "#68a063" },
    { name: "Express", icon: "EX", color: "#ffffff" },
    { name: "MongoDB", icon: "🍃", color: "#47a248" },
    { name: "REST API", icon: "🔗", color: "#6366f1" },
    // { name: "Prisma", icon: "▲", color: "#5a67d8" },
    { name: "JWT", icon: "🔐", color: "#f59e0b" },
  ];

  const tools = [
    { name: "Git", icon: "🔴", color: "#f05032" },
    { name: "GitHub", icon: "🐙", color: "#ffffff" },
    { name: "VS Code", icon: "💙", color: "#007acc" },
    // { name: "Figma", icon: "🎨", color: "#a259ff" },
    { name: "Postman", icon: "📮", color: "#ff6c37" },
    { name: "Vercel", icon: "▲", color: "#ffffff" },
  ];

  const SkillGrid = ({ skills }: { skills: typeof frontend }) => (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3">
      {skills.map((s, i) => (
        <div key={i} className="skill-icon card-border rounded-xl p-3 flex flex-col items-center gap-2 cursor-default">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center text-xl font-bold" style={{ background: "rgba(124,58,237,0.15)", color: s.color }}>
            {s.icon}
          </div>
          <span className="text-xs text-slate-400 text-center leading-tight">{s.name}</span>
        </div>
      ))}
    </div>
  );

  const sections = [
    { label: "Frontend", skills: frontend },
    { label: "Backend", skills: backend },
    { label: "Tools & Others", skills: tools },
  ];

  return (
    <section className="min-h-screen pt-28 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold text-purple-400 uppercase tracking-widest mb-2">What I Know</p>
          <h1 className="text-4xl font-black">My Skills</h1>
          <p className="text-slate-400 mt-3">Technologies I've been working with recently</p>
        </div>

        <div className="space-y-10">
          {sections.map((sec, i) => (
            <div key={i}>
              <h3 className="text-lg font-semibold text-slate-300 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-5 rounded-full gradient-btn inline-block" />
                {sec.label}
              </h3>
              <SkillGrid skills={sec.skills} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

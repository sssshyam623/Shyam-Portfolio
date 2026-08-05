import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  {
    icon: <FaGithub size={16} />,
    href: "https://github.com/itsme-shyam-702",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin size={16} />,
    href: "https://www.linkedin.com/in/shyam702/",
    label: "LinkedIn",
  },
  {
    icon: <FaXTwitter size={16} />,
    href: "https://x.com/",
    label: "X",
  },
  {
    icon: <Mail size={16} />,
    href: "mailto:sssshyam702@gmail.com",
    label: "Email",
  },
];

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        borderColor: "var(--border)",
        background: "var(--bg-secondary)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-10 grid sm:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg gradient-btn flex items-center justify-center font-bold text-white text-xs">
            SS
            </div>
            <span className="font-semibold text-white">Shyamshree</span>
          </div>

          <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
            Full Stack Developer crafting fast, modern web apps with Next.js
            and Tailwind CSS.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">
            Navigate
          </p>

          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">
            Connect
          </p>

          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  social.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                aria-label={social.label}
                className="w-9 h-9 rounded-lg card-border flex items-center justify-center text-slate-400 hover:text-white hover:border-purple-500 transition-all"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        className="border-t py-5"
        style={{ borderColor: "var(--border)" }}
      >
        <p className="text-center text-xs text-slate-600">
          © {new Date().getFullYear()} Shyamshree. Built with Next.js & Tailwind
          CSS.
        </p>
      </div>
    </footer>
  );
}
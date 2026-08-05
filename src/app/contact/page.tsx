"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Link2, GitFork, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      const missingKeysMsg = "Missing EmailJS keys in .env.local. Please check your environment configuration.";
      console.error(missingKeysMsg);
      setErrorMessage(missingKeysMsg);
      setStatus("error");
      return;
    }

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        publicKey
      )
      .then(() => {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        // Unpack EmailJS error response text or status code
        const detailedError = error?.text || error?.message || (typeof error === "object" ? JSON.stringify(error) : String(error));
        console.error("EmailJS Send Error:", detailedError);
        
        setErrorMessage(
          typeof detailedError === "string" && detailedError.length < 120
            ? detailedError
            : "Failed to send message. Check keys/template settings or email directly."
        );
        setStatus("error");
      });
  };

  const info = [
    { icon: <Mail size={18} />, label: "Email", value: "sssshyam702@gmail.com", href: "mailto:sssshyam702@gmail.com" },
    { icon: <Phone size={18} />, label: "Phone", value: "+91 9353605622", href: "tel:+919353605622" },
    { icon: <MapPin size={18} />, label: "Location", value: "India", href: "#" },
    { icon: <Link2 size={18} />, label: "LinkedIn", value: "linkedin.com/in/shyam702", href: "https://linkedin.com/in/shyam702" },
    { icon: <GitFork size={18} />, label: "GitHub", value: "github.com/itsme-shyam-702", href: "https://github.com/itsme-shyam-702" },
  ];

  return (
    <section className="min-h-screen pt-28 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold text-purple-400 uppercase tracking-widest mb-2">Get In Touch</p>
          <h1 className="text-4xl font-black">Contact Me</h1>
          <p className="text-slate-400 mt-3">Feel free to reach out for collaborations or just to say hello!</p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2 space-y-4">
            {info.map((item, i) => (
              <a 
                key={i} 
                href={item.href} 
                target={item.href.startsWith("http") ? "_blank" : "_self"} 
                rel="noreferrer"
                className="card-border rounded-xl p-4 flex items-center gap-3 hover:border-purple-500 transition-colors block"
              >
                <div className="w-10 h-10 rounded-lg gradient-btn flex items-center justify-center text-white shrink-0">{item.icon}</div>
                <div>
                  <div className="text-xs text-slate-500 mb-0.5">{item.label}</div>
                  <div className="text-sm font-medium text-white">{item.value}</div>
                </div>
              </a>
            ))}
          </div>

          <div className="md:col-span-3 card-border rounded-2xl p-6">
            {status === "sent" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-8 gap-4">
                <div className="w-16 h-16 rounded-full gradient-btn flex items-center justify-center text-2xl text-white">✓</div>
                <h3 className="text-xl font-bold">Message Sent!</h3>
                <p className="text-slate-400">Thanks for reaching out. I'll get back to you soon.</p>
                <button 
                  onClick={() => { setStatus("idle"); setErrorMessage(""); }} 
                  className="text-purple-400 text-sm hover:text-purple-300 transition-colors mt-2 cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {status === "error" && (
                  <div className="p-3 bg-red-500/10 border border-red-500/50 rounded-xl text-red-400 text-xs">
                    {errorMessage || "Failed to send message. Please check environment configuration or try again."}
                  </div>
                )}
                <div>
                  <label className="text-xs text-slate-400 font-medium mb-1.5 block">Name</label>
                  <input 
                    type="text" 
                    placeholder="Your name" 
                    required 
                    value={form.name} 
                    onChange={(e) => setForm({ ...form, name: e.target.value })} 
                    className="w-full px-4 py-3 rounded-xl text-sm bg-(--bg-secondary) border border-(--border) text-white focus:outline-none focus:border-purple-500" 
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-400 font-medium mb-1.5 block">Email</label>
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    required 
                    value={form.email} 
                    onChange={(e) => setForm({ ...form, email: e.target.value })} 
                    className="w-full px-4 py-3 rounded-xl text-sm bg-(--bg-secondary) border border-(--border) text-white focus:outline-none focus:border-purple-500" 
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-400 font-medium mb-1.5 block">Message</label>
                  <textarea 
                    rows={5} 
                    placeholder="Your message" 
                    required 
                    value={form.message} 
                    onChange={(e) => setForm({ ...form, message: e.target.value })} 
                    className="w-full px-4 py-3 rounded-xl text-sm resize-none bg-(--bg-secondary) border border-(--border) text-white focus:outline-none focus:border-purple-500" 
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={status === "sending"} 
                  className="gradient-btn w-full text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
                >
                  {status === "sending" ? (
                    <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                  ) : (
                    <><Send size={16} /> Send Message</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
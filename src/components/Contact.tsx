"use client";

import { ArrowUpRight, Download, Code2, Link as LinkIcon, Mail, MapPin, Send } from "lucide-react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";

const contactLinks = [
  { label: "Email", value: "iamzainabbass@gmail.com", href: "mailto:iamzainabbass@gmail.com", icon: Mail },
  { label: "GitHub", value: "github.com/ZainAbbas-dev", href: "https://github.com/ZainAbbas-dev", icon: Code2 },
  { label: "LinkedIn", value: "linkedin.com/in/muhammad-zain-abbas", href: "https://www.linkedin.com/in/muhammad-zain-abbas-1a0b87307", icon: LinkIcon },
]; {/*[cite: 7] */}

export function Contact() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`Hi Zain,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`);
    window.location.href = `mailto:iamzainabbass@gmail.com?subject=${subject}&body=${body}`; {/*[cite: 7] */}
  }

  return (
    <section className="relative w-full bg-[#0B0E14] py-32 z-10" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left Side: Typography & Info */}
          <div>
            <p className="eyebrow text-accent-cool mb-4 uppercase tracking-[0.2em] font-mono font-bold text-sm">
              Let&apos;s Connect {/*[cite: 7] */}
            </p>
            <h2 className="text-[8vw] md:text-[5vw] font-black leading-[0.9] tracking-tighter text-white uppercase mb-6">
              HAVE AN IDEA? <br />
              <span className="text-accent-warm">LET&apos;S TALK.</span> {/*[cite: 7] */}
            </h2>
            <p className="text-lg text-muted font-medium leading-relaxed mb-10 max-w-md">
              I am open to software engineering and AI internship opportunities, product collaborations, and conversations about building useful technology. {/*[cite: 7] */}
            </p>

            <div className="flex items-center gap-3 text-sm font-mono text-slate-300 mb-12">
              <MapPin aria-hidden="true" className="text-accent-cool" size={20} /> {/*[cite: 7] */}
              ISLAMABAD, PAKISTAN {/*[cite: 7] */}
            </div>

            <div className="space-y-4 mb-12">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    className="group flex items-center justify-between border border-white/10 bg-[#121620] p-4 rounded-2xl hover:border-white/30 hover:bg-[#121620]/80 transition-all max-w-md"
                  > {/*[cite: 7] */}
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0B0E14] text-[#C97D4C]">
                        <Icon size={20} /> {/*[cite: 7] */}
                      </div>
                      <div>
                        <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-slate-500">{link.label}</p> {/*[cite: 7] */}
                        <p className="text-sm font-medium text-slate-200">{link.value}</p> {/*[cite: 7] */}
                      </div>
                    </div>
                    <ArrowUpRight size={18} className="text-slate-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> {/*[cite: 7] */}
                  </a>
                );
              })}
            </div>

            <a className="inline-flex items-center gap-3 px-8 py-4 bg-[#121620] border border-white/10 hover:border-accent-warm text-white font-bold rounded-2xl transition-colors uppercase tracking-widest text-xs font-mono" download href="/images/resume.pdf">
              Download Resume <Download size={18} /> {/*[cite: 7] */}
            </a>
          </div>

          {/* Right Side: Form Block */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-white/10 bg-[#121620] p-10 rounded-3xl shadow-2xl relative overflow-hidden h-fit"
          >
            <form className="relative z-10 flex flex-col gap-8" onSubmit={handleSubmit}>
              
              <div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight">Send a message</h3> {/*[cite: 7] */}
                <p className="mt-2 text-sm text-muted font-mono">Share a little context and your email app will open ready to send.</p> {/*[cite: 7] */}
              </div>

              <div className="space-y-6">
                <label className="flex flex-col gap-3 text-xs font-bold uppercase tracking-[0.15em] text-slate-400 font-mono">
                  Name {/*[cite: 7] */}
                  <input className="w-full border-b-2 border-white/10 bg-transparent py-3 text-lg font-sans text-white focus:border-accent-warm focus:outline-none transition-colors" name="name" placeholder="YOUR NAME" required type="text" /> {/*[cite: 7] */}
                </label>

                <label className="flex flex-col gap-3 text-xs font-bold uppercase tracking-[0.15em] text-slate-400 font-mono">
                  Email {/*[cite: 7] */}
                  <input className="w-full border-b-2 border-white/10 bg-transparent py-3 text-lg font-sans text-white focus:border-accent-warm focus:outline-none transition-colors" name="email" placeholder="YOU@EXAMPLE.COM" required type="email" /> {/*[cite: 7] */}
                </label>

                <label className="flex flex-col gap-3 text-xs font-bold uppercase tracking-[0.15em] text-slate-400 font-mono">
                  Message {/*[cite: 7] */}
                  <textarea className="w-full border-b-2 border-white/10 bg-transparent py-3 text-lg font-sans text-white focus:border-accent-warm focus:outline-none transition-colors min-h-[120px] resize-y" name="message" placeholder="TELL ME ABOUT THE OPPORTUNITY..." required /> {/*[cite: 7] */}
                </label>
              </div>

              <button className="flex w-full items-center justify-center gap-3 bg-[#C97D4C] text-[#0B0E14] font-black uppercase tracking-widest py-4 rounded-xl hover:bg-white transition-colors mt-4" type="submit">
                Send Message <Send size={18} /> {/*[cite: 7] */}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
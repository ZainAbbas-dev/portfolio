import { Code2, Link as LinkIcon, Mail } from "lucide-react";

const footerLinks = [
  { label: "Email", href: "mailto:iamzainabbass@gmail.com", icon: Mail },
  { label: "GitHub", href: "https://github.com/ZainAbbas-dev", icon: Code2 },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-zain-abbas-1a0b87307", icon: LinkIcon },
]; {/*[cite: 9] */}

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#0B0E14] py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="text-center md:text-left">
          <a className="text-3xl font-black text-white hover:text-accent-cool transition-colors tracking-tighter" href="#home">
            MZA. {/*[cite: 9] */}
          </a>
          <p className="mt-2 text-sm text-slate-500 font-mono uppercase tracking-widest">
            Building modern platforms with intelligent features. {/*[cite: 9] */}
          </p>
        </div>

        <p className="text-xs text-slate-600 font-mono font-bold uppercase tracking-widest">
          © 2026 Muhammad Zain Abbas. All rights reserved. {/*[cite: 9] */}
        </p>

        <div className="flex items-center gap-4">
          {footerLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                aria-label={link.label}
                href={link.href}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#121620] text-slate-400 hover:text-white hover:border-accent-warm transition-all"
              > {/*[cite: 9] */}
                <Icon size={16} /> {/*[cite: 9] */}
              </a>
            );
          })}
        </div>
        
      </div>
    </footer>
  );
}
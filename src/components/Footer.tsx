import { Code2, Link, Mail } from "lucide-react";

const footerLinks = [
  {
    label: "Email Muhammad Zain Abbas",
    href: "mailto:iamzainabbass@gmail.com",
    icon: Mail,
  },
  {
    label: "Muhammad Zain Abbas on GitHub",
    href: "https://github.com/ZainAbbas-dev",
    icon: Code2,
  },
  {
    label: "Muhammad Zain Abbas on LinkedIn",
    href: "https://linkedin.com/in/zain-abbas",
    icon: Link,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/8 py-6">
      <div className="site-container flex flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <div>
          <a className="gradient-text text-lg font-bold" href="#home">
            MZA
          </a>
          <p className="mt-1 text-xs text-slate-500">
            Building modern platforms with intelligent features.
          </p>
        </div>

        <p className="text-xs text-slate-500">
          © 2026 Muhammad Zain Abbas. All rights reserved.
        </p>

        <div className="flex justify-center gap-2">
          {footerLinks.map((link) => {
            const Icon = link.icon;

            return (
              <a
                aria-label={link.label}
                className="footer-social-link"
                href={link.href}
                key={link.label}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                target={link.href.startsWith("http") ? "_blank" : undefined}
              >
                <Icon aria-hidden="true" size={16} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

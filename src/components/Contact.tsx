"use client";

import {
  ArrowUpRight,
  Download,
  Code2,
  Link,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import type { FormEvent } from "react";
import { MotionReveal } from "@/components/Motion";

const contactLinks = [
  {
    label: "Email",
    value: "iamzainabbass@gmail.com",
    href: "mailto:iamzainabbass@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/ZainAbbas-dev",
    href: "https://github.com/ZainAbbas-dev",
    icon: Code2,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/zain-abbas",
    href: "https://linkedin.com/in/zain-abbas",
    icon: Link,
  },
];

export function Contact() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(
      `Hi Zain,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`,
    );

    window.location.href = `mailto:iamzainabbass@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section className="site-container section-space scroll-mt-20" id="contact">
      <div className="contact-shell">
        <MotionReveal>
          <p className="eyebrow">Let&apos;s Connect</p>
          <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Have an opportunity or an idea?
            <span className="gradient-text block">Let&apos;s talk.</span>
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base">
            I am open to software engineering and AI internship opportunities,
            product collaborations, and conversations about building useful
            technology.
          </p>

          <div className="mt-7 flex items-center gap-2 text-sm text-slate-300">
            <MapPin aria-hidden="true" className="text-violet-300" size={17} />
            Islamabad, Pakistan
          </div>

          <div className="mt-7 space-y-3">
            {contactLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  className="contact-link-card"
                  href={link.href}
                  key={link.label}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                >
                  <div className="contact-link-icon">
                    <Icon aria-hidden="true" size={18} />
                  </div>
                  <div>
                    <p className="text-[0.63rem] font-bold uppercase tracking-[0.16em] text-slate-500">
                      {link.label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-200">
                      {link.value}
                    </p>
                  </div>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="ml-auto text-slate-500"
                    size={16}
                  />
                </a>
              );
            })}
          </div>

          <a
            className="hero-secondary-button mt-5"
            download
            href="/images/resume.pdf"
          >
            Download Resume
            <Download aria-hidden="true" size={16} />
          </a>
        </MotionReveal>

        <MotionReveal className="contact-form" delay={0.12}>
          <form className="flex flex-col" onSubmit={handleSubmit}>
          <p className="text-sm font-semibold text-white">Send a message</p>
          <p className="mt-2 text-xs leading-5 text-muted">
            Share a little context and your email app will open with the message
            ready to send.
          </p>

          <label className="contact-label mt-6">
            Name
            <input
              className="contact-input"
              name="name"
              placeholder="Your name"
              required
              type="text"
            />
          </label>

          <label className="contact-label">
            Email
            <input
              className="contact-input"
              name="email"
              placeholder="you@example.com"
              required
              type="email"
            />
          </label>

          <label className="contact-label">
            Message
            <textarea
              className="contact-input min-h-32 resize-y"
              name="message"
              placeholder="Tell me about the opportunity or project..."
              required
            />
          </label>

          <button className="hero-primary-button mt-2 justify-center" type="submit">
            Send Message
            <Send aria-hidden="true" size={16} />
          </button>
          </form>
        </MotionReveal>
      </div>
    </section>
  );
}

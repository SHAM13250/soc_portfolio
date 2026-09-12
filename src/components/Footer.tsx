import { useEffect, useRef, useState } from "react";
import { Check, Copy, ExternalLink, Globe, Mail, MessageSquare } from "lucide-react";
import { profile } from "../data/profile";
import { GitHubIcon, LinkedInIcon } from "./BrandIcons";

export function Footer() {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const copyEmail = async () => {
    let success = false;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(profile.email);
        success = true;
      } else {
        throw new Error("clipboard unavailable");
      }
    } catch {
      try {
        const field = document.createElement("textarea");
        field.value = profile.email;
        field.setAttribute("readonly", "");
        field.style.position = "fixed";
        field.style.left = "-9999px";
        document.body.appendChild(field);
        field.select();
        success = document.execCommand("copy");
        field.remove();
      } catch {
        success = false;
      }
    }

    if (success) {
      setCopied(true);
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = window.setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <footer id="contact" className="border-t border-line px-4 py-12 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-xs tracking-[0.28em] text-cyan">06 / CONTACT</p>
          <p className="mt-2 text-lg font-semibold text-ink">Open a ticket. Let’s talk SOC.</p>
          <p className="mt-1 text-sm text-muted">{profile.email}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2 text-sm text-ink hover:border-cyan/40"
            aria-live="polite"
          >
            {copied ? <Check className="size-4 text-emerald" /> : <Copy className="size-4" />}
            {copied ? "Email copied" : "Copy email"}
          </button>
          <a
            href={`mailto:${profile.email}?subject=SOC%20Analyst%20opportunity`}
            className="inline-flex items-center gap-2 rounded-md bg-cyan px-4 py-2 text-sm font-semibold text-void transition hover:bg-white"
          >
            <MessageSquare className="size-4" aria-hidden="true" />
            Direct message
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-md px-2 py-2 text-sm text-muted hover:text-cyan"
          >
            <Mail className="size-4" aria-hidden="true" />
            <span className="sr-only">Email {profile.name}</span>
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-4 border-t border-line/60 pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono">
          © {new Date().getFullYear()} {profile.name}. Built for Blue Team operations.
        </p>
        <div className="flex flex-wrap items-center gap-5">
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition hover:text-cyan"
          >
            <LinkedInIcon className="size-3.5" />
            LinkedIn
          </a>
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition hover:text-cyan"
          >
            <GitHubIcon className="size-3.5" />
            GitHub
          </a>
          <a
            href={profile.social.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition hover:text-cyan"
          >
            <Globe className="size-3.5" aria-hidden="true" />
            Live Portfolio
            <ExternalLink className="size-3" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}

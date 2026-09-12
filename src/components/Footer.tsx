import { useState } from "react";
import { Check, Copy, Mail, MessageSquare } from "lucide-react";
import { profile } from "../data/profile";

export function Footer() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(profile.email);
      } else {
        throw new Error("clipboard unavailable");
      }
      setCopied(true);
    } catch {
      const field = document.createElement("textarea");
      field.value = profile.email;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.left = "-9999px";
      document.body.appendChild(field);
      field.select();
      const ok = document.execCommand("copy");
      field.remove();
      setCopied(ok);
    }
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="border-t border-line px-4 py-12 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-xs tracking-[0.28em] text-cyan">06 / CONTACT</p>
          <p className="mt-2 text-lg font-semibold">Open a ticket. Let’s talk SOC.</p>
          <p className="mt-1 text-sm text-muted">{profile.email}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2 text-sm hover:border-cyan/40"
            aria-live="polite"
          >
            {copied ? <Check className="size-4 text-emerald" /> : <Copy className="size-4" />}
            {copied ? "Email copied" : "Copy email"}
          </button>
          <a
            href={`mailto:${profile.email}?subject=SOC%20Analyst%20opportunity`}
            className="inline-flex items-center gap-2 rounded-md bg-cyan px-4 py-2 text-sm font-semibold text-void hover:bg-white"
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
      <p className="mx-auto mt-10 max-w-6xl font-mono text-xs text-muted">
        © {new Date().getFullYear()} {profile.name}. Built for Blue Team operations.
      </p>
    </footer>
  );
}

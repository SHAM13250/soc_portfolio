import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { profile } from "../data/profile";
import { GitHubIcon, LinkedInIcon } from "./BrandIcons";

export function Hero() {
  const reduce = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduce) {
      setText(profile.typingRoles[roleIndex]);
      return;
    }
    const current = profile.typingRoles[roleIndex];
    const delay = deleting ? 45 : 85;
    const pause = deleting && text === "" ? 280 : !deleting && text === current ? 1400 : delay;

    const id = window.setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true);
        return;
      }
      if (deleting && text === "") {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % profile.typingRoles.length);
        return;
      }
      setText((prev) =>
        deleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1),
      );
    }, pause);

    return () => window.clearTimeout(id);
  }, [text, deleting, roleIndex, reduce]);

  useEffect(() => {
    if (!reduce) return;
    const id = window.setInterval(() => {
      setRoleIndex((i) => (i + 1) % profile.typingRoles.length);
    }, 2500);
    return () => window.clearInterval(id);
  }, [reduce]);

  return (
    <section id="top" className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald/30 bg-emerald/10 px-3 py-1 font-mono text-xs text-emerald">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald" />
            </span>
            {profile.status}
          </p>

          <p className="font-mono text-xs tracking-[0.3em] text-cyan">BLUE TEAM // SOC</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {profile.name}
            <span className="sr-only"> — Shamkumar Portfolio</span>
          </h1>
          <p className="mt-3 max-w-xl text-base text-muted sm:text-lg">{profile.roleTitle}</p>

          <div
            className="mt-6 rounded-lg border border-line bg-panel p-4 font-mono text-sm glow-cyan"
          >
            <p className="text-cyan-dim">root@soc-analyst:~$</p>
            <p className="mt-2 text-ink">
              role: <span className="text-cyan" aria-hidden="true">{text}</span>
              <span className="ml-0.5 inline-block w-2 animate-pulse bg-cyan" aria-hidden="true">
                &nbsp;
              </span>
              <span className="sr-only">{profile.typingRoles[roleIndex]}</span>
            </p>
          </div>

          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-muted">
            <li>
              <a className="inline-flex items-center gap-2 hover:text-cyan" href={`mailto:${profile.email}`}>
                <Mail className="size-4" aria-hidden="true" />
                {profile.email}
              </a>
            </li>
            <li>
              <a className="inline-flex items-center gap-2 hover:text-cyan" href={profile.phoneHref}>
                <Phone className="size-4" aria-hidden="true" />
                {profile.phone}
              </a>
            </li>
            <li className="inline-flex items-center gap-2">
              <MapPin className="size-4" aria-hidden="true" />
              {profile.location}
            </li>
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-cyan/30 px-4 py-2 text-sm text-cyan hover:bg-cyan/10"
            >
              <LinkedInIcon className="size-4" />
              LinkedIn
            </a>
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2 text-sm text-ink hover:border-cyan/40"
            >
              <GitHubIcon className="size-4" />
              GitHub
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-white/5 px-4 py-2 text-sm text-ink hover:bg-white/10"
            >
              View projects
            </a>
          </div>
        </div>

        <motion.aside
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-xl border border-line bg-panel-2 p-5 font-mono text-xs shadow-2xl"
          aria-label="SOC telemetry preview"
        >
          <div className="mb-4 flex items-center justify-between text-muted">
            <span>siem://live-feed</span>
            <span className="text-emerald">● healthy</span>
          </div>
          <ul className="space-y-3 text-[13px] leading-6">
            <li>
              <span className="text-cyan">[ALERT]</span> phishing.domain flagged — entropy high
            </li>
            <li>
              <span className="text-emerald">[OK]</span> IDS/IPS signatures synced
            </li>
            <li>
              <span className="text-cyan">[TRIAGE]</span> Wireshark pcap: DNS beacon review
            </li>
            <li>
              <span className="text-emerald">[MAP]</span> MITRE ATT&CK T1566.001
            </li>
            <li>
              <span className="text-cyan">[SIEM]</span> Splunk notable: login anomaly
            </li>
          </ul>
        </motion.aside>
      </div>
    </section>
  );
}

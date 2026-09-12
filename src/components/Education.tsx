import { GraduationCap } from "lucide-react";
import { profile } from "../data/profile";
import { SectionHeading } from "./Summary";

export function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-24 px-4 py-16 sm:px-6"
      aria-labelledby="education-heading"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="05 / ACADEMICS" title="Education" id="education-heading" />
        <article className="max-w-3xl rounded-xl border border-line bg-panel p-6 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            <span className="self-start rounded-md border border-cyan/30 bg-cyan/10 p-2.5 text-cyan">
              <GraduationCap className="size-6" aria-hidden="true" />
            </span>
            <div className="flex-1">
              <span className="inline-block rounded-full border border-emerald/30 bg-emerald/10 px-3 py-0.5 font-mono text-xs text-emerald">
                {profile.education.period}
              </span>
              <h3 className="mt-2 text-xl font-semibold text-ink">{profile.education.degree}</h3>
              <p className="mt-1 text-sm text-cyan">{profile.education.institution}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Rigorous Information Technology foundation covering computer networking, system architecture,
                cryptography, secure software engineering, and defensive cybersecurity operations.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

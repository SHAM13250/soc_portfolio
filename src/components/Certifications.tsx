import { Award, ExternalLink } from "lucide-react";
import { profile } from "../data/profile";
import { SectionHeading } from "./Summary";

export function Certifications() {
  return (
    <section
      id="certifications"
      className="scroll-mt-24 px-4 py-16 sm:px-6"
      aria-labelledby="certs-heading"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="04 / CREDENTIALS" title="Certifications" id="certs-heading" />
        <ol className="relative grid gap-4 md:grid-cols-2">
          {profile.certifications.map((cert, index) => (
            <li key={cert.url}>
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full items-start gap-4 rounded-xl border border-line bg-panel p-5 transition hover:border-cyan/50 hover:bg-panel-2"
              >
                <span className="mt-0.5 rounded-md border border-emerald/30 bg-emerald/10 p-2 text-emerald">
                  <Award className="size-5" aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-mono text-[11px] text-muted">
                    VERIFY {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-1 block font-semibold text-ink">{cert.title}</span>
                  <span className="mt-1 block text-sm text-muted">{cert.issuer}</span>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm text-cyan">
                    Open credential
                    <ExternalLink className="size-3.5" aria-hidden="true" />
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

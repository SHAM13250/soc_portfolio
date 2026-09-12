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
        <article className="max-w-2xl rounded-xl border border-line bg-panel p-6">
          <div className="flex items-start gap-4">
            <span className="rounded-md border border-cyan/30 bg-cyan/10 p-2 text-cyan">
              <GraduationCap className="size-6" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-lg font-semibold">{profile.education.degree}</h3>
              <p className="mt-2 text-sm text-muted">
                Information Technology foundation supporting SOC analysis, networking, and secure
                application review.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

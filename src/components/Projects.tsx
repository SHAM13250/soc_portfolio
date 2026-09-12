import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { profile } from "../data/profile";
import { GitHubIcon } from "./BrandIcons";
import { SectionHeading } from "./Summary";

export function Projects() {
  const reduce = useReducedMotion();

  return (
    <section id="projects" className="scroll-mt-24 px-4 py-16 sm:px-6" aria-labelledby="projects-heading">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="03 / OPERATIONS" title="Selected projects" id="projects-heading" />
        <div className="grid gap-6 lg:grid-cols-3">
          {profile.projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={reduce ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: reduce ? 0 : index * 0.08 }}
              className="group flex flex-col rounded-xl border border-line bg-panel p-6 transition hover:-translate-y-1 hover:border-cyan/40 hover:shadow-[0_0_40px_rgb(0_242_254_/_0.08)]"
            >
              <p className="font-mono text-xs text-muted">CASE {String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-2 text-lg font-semibold text-ink">{project.title}</h3>
              <ul className="mt-4 flex-1 space-y-2 text-sm leading-6 text-muted">
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-cyan/10 px-2.5 py-1 font-mono text-[11px] text-cyan"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-md border border-cyan/30 px-4 py-2 text-sm font-medium text-cyan transition group-hover:bg-cyan group-hover:text-void"
              >
                <GitHubIcon className="size-4" />
                View repository
                <ExternalLink className="size-3.5" aria-hidden="true" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

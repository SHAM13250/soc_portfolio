import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { profile } from "../data/profile";
import { SectionHeading } from "./Summary";

export function Skills() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState("all");
  const categories = profile.skills;

  const visible = useMemo(() => {
    if (active === "all") return categories;
    return categories.filter((c) => c.id === active);
  }, [active, categories]);

  return (
    <section id="skills" className="scroll-mt-24 px-4 py-16 sm:px-6" aria-labelledby="skills-heading">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="02 / CAPABILITIES" title="Skills matrix" id="skills-heading" />

        <div
          role="group"
          aria-label="Filter skills by category"
          className="mb-8 flex flex-wrap gap-2"
        >
          <button
            type="button"
            aria-pressed={active === "all"}
            onClick={() => setActive("all")}
            className={`rounded-full border px-3 py-1.5 text-sm transition ${
              active === "all"
                ? "border-cyan bg-cyan/15 text-cyan"
                : "border-line text-muted hover:border-cyan/40 hover:text-ink"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              aria-pressed={active === cat.id}
              onClick={() => setActive(cat.id)}
              className={`rounded-full border px-3 py-1.5 text-sm transition ${
                active === cat.id
                  ? "border-cyan bg-cyan/15 text-cyan"
                  : "border-line text-muted hover:border-cyan/40 hover:text-ink"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {visible.map((group) => (
            <motion.article
              key={group.id}
              layout={!reduce}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-xl border border-line bg-panel p-5"
            >
              <h3 className="font-mono text-sm text-cyan">{group.label}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-cyan/15 bg-void px-3 py-1 text-sm text-ink"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

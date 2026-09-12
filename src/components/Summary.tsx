import { profile } from "../data/profile";

export function SectionHeading({
  kicker,
  title,
  id,
}: {
  kicker: string;
  title: string;
  id?: string;
}) {
  return (
    <div className="mb-8">
      <p className="font-mono text-xs tracking-[0.28em] text-cyan">{kicker}</p>
      <h2 id={id} className="mt-2 text-2xl font-semibold sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}

export function Summary() {
  return (
    <section id="summary" className="scroll-mt-24 px-4 py-16 sm:px-6" aria-labelledby="summary-heading">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="01 / PROFILE" title="Analyst summary" id="summary-heading" />
        <p className="max-w-4xl text-base leading-8 text-muted sm:text-lg">{profile.summary}</p>
      </div>
    </section>
  );
}

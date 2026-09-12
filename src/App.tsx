import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Summary } from "./components/Summary";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Certifications } from "./components/Certifications";
import { Education } from "./components/Education";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen text-ink">
      <div className="pointer-events-none absolute inset-0 grid-bg" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 scanlines" aria-hidden="true" />
      <a
        href="#main"
        className="absolute left-4 top-3 z-[60] -translate-y-16 rounded bg-cyan px-3 py-2 text-sm font-semibold text-void focus:translate-y-0"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Summary />
        <Skills />
        <Projects />
        <Certifications />
        <Education />
      </main>
      <Footer />
    </div>
  );
}

import type { jsPDF } from "jspdf";
import { profile } from "../data/profile";

function wrap(doc: jsPDF, text: string, x: number, y: number, maxWidth: number, lineHeight: number, maxY = 260) {
  const lines = doc.splitTextToSize(text, maxWidth) as string[];
  for (const line of lines) {
    if (y > maxY) {
      doc.addPage();
      y = 18;
    }
    doc.text(line, x, y);
    y += lineHeight;
  }
  return y;
}

export async function downloadResumePdf() {
  const filename = "Sham_Kumar_M_SOC_Analyst_Resume.pdf";
  try {
    const res = await fetch("/Sham-Kumar-Resume.pdf", { method: "HEAD" });
    if (res.ok) {
      const a = document.createElement("a");
      a.href = "/Sham-Kumar-Resume.pdf";
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      return;
    }
  } catch {
    // Proceed to jsPDF fallback below
  }

  const { jsPDF } = await import("jspdf");
  const doc = new jsPDF({ unit: "mm", format: "letter" });
  const left = 16;
  const max = 178;
  const bottomMargin = 260;
  let y = 18;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text(profile.name, left, y);
  y += 6;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10.5);
  doc.text(profile.roleTitle, left, y);
  y += 5;

  doc.setFontSize(9);
  const contact = [
    profile.location,
    profile.phone,
    profile.email,
    profile.social.linkedin,
    profile.social.github,
  ].join("  |  ");
  y = wrap(doc, contact, left, y, max, 4.2, bottomMargin);
  y += 3;

  const heading = (label: string) => {
    if (y > 245) {
      doc.addPage();
      y = 18;
    }
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10.5);
    doc.text(label, left, y);
    y += 1.8;
    doc.setDrawColor(15, 23, 42);
    doc.line(left, y, left + max, y);
    y += 5;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
  };

  heading("PROFILE SUMMARY");
  y = wrap(doc, profile.summary, left, y, max, 4.3, bottomMargin);
  y += 3;

  heading("SKILLS");
  for (const group of profile.skills) {
    const fullLine = `${group.label}: ${group.items.join(", ")}`;
    y = wrap(doc, fullLine, left, y, max, 4.1, bottomMargin);
    y += 1;
  }
  y += 2;

  heading("PROJECTS");
  for (const project of profile.projects) {
    doc.setFont("helvetica", "bold");
    y = wrap(doc, project.title, left, y, max, 4.2, bottomMargin);
    doc.setFont("helvetica", "normal");
    y = wrap(doc, `Repository: ${project.url}`, left, y, max, 4.0, bottomMargin);
    for (const item of project.highlights) {
      y = wrap(doc, `• ${item}`, left, y, max, 4.1, bottomMargin);
    }
    y += 2;
  }
  y += 1;

  heading("CERTIFICATIONS");
  for (const cert of profile.certifications) {
    y = wrap(doc, `• ${cert.title} — ${cert.issuer}`, left, y, max, 4.0, bottomMargin);
  }
  y += 3;

  heading("EDUCATION");
  doc.setFont("helvetica", "bold");
  y = wrap(doc, profile.education.degree, left, y, max, 4.2, bottomMargin);
  doc.setFont("helvetica", "normal");
  y = wrap(doc, profile.education.institution, left, y, max, 4.0, bottomMargin);
  wrap(doc, profile.education.period, left, y, max, 4.0, bottomMargin);

  doc.save(filename);
}

import type { jsPDF } from "jspdf";
import { profile } from "../data/profile";

function wrap(doc: jsPDF, text: string, x: number, y: number, maxWidth: number, lineHeight: number) {
  const lines = doc.splitTextToSize(text, maxWidth) as string[];
  for (const line of lines) {
    if (y > 278) {
      doc.addPage();
      y = 18;
    }
    doc.text(line, x, y);
    y += lineHeight;
  }
  return y;
}

export async function downloadResumePdf() {
  const { jsPDF } = await import("jspdf");
  const doc = new jsPDF({ unit: "mm", format: "letter" });
  const left = 16;
  const max = 178;
  let y = 18;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text(profile.name, left, y);
  y += 7;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.text(profile.roleTitle, left, y);
  y += 6;

  doc.setFontSize(9.5);
  const contact = [
    profile.location,
    profile.phone,
    profile.email,
    profile.social.linkedin,
    profile.social.github,
  ].join("  |  ");
  y = wrap(doc, contact, left, y, max, 4.5);
  y += 4;

  const heading = (label: string) => {
    if (y > 270) {
      doc.addPage();
      y = 18;
    }
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.text(label, left, y);
    y += 2;
    doc.setDrawColor(15, 23, 42);
    doc.line(left, y, left + max, y);
    y += 6;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
  };

  heading("PROFESSIONAL SUMMARY");
  y = wrap(doc, profile.summary, left, y, max, 4.6);
  y += 5;

  heading("SKILLS");
  for (const group of profile.skills) {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    y = wrap(doc, `${group.label}:`, left, y, max, 4.4);
    doc.setFont("helvetica", "normal");
    y = wrap(doc, group.items.join(", "), left, y, max, 4.4);
    y += 2.5;
  }
  y += 2;

  heading("PROJECTS");
  for (const project of profile.projects) {
    doc.setFont("helvetica", "bold");
    y = wrap(doc, project.title, left, y, max, 4.4);
    doc.setFont("helvetica", "normal");
    y = wrap(doc, project.url, left, y, max, 4.4);
    for (const item of project.highlights) {
      y = wrap(doc, `• ${item}`, left, y, max, 4.4);
    }
    y += 3;
  }

  heading("CERTIFICATIONS");
  for (const cert of profile.certifications) {
    y = wrap(doc, `• ${cert.title} | ${cert.issuer}`, left, y, max, 4.4);
  }
  y += 4;

  heading("EDUCATION");
  wrap(doc, profile.education.degree, left, y, max, 4.4);

  const filename = "Sham_Kumar_M_SOC_Analyst_Resume.pdf";
  doc.save(filename);
}

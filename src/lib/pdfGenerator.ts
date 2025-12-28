import jsPDF from "jspdf";
import { Questions } from "@/app/generate/types";

export function generateQuestionsPDF(questions: Questions) {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const lineHeight = 7;
  let yPosition = margin;

  const addText = (text: string, fontSize: number = 10, isBold: boolean = false) => {
    if (yPosition > pageHeight - margin) {
      doc.addPage();
      yPosition = margin;
    }
    
    doc.setFontSize(fontSize);
    doc.setFont("helvetica", isBold ? "bold" : "normal");
    
    const lines = doc.splitTextToSize(text, pageWidth - 2 * margin);
    lines.forEach((line: string) => {
      if (yPosition > pageHeight - margin) {
        doc.addPage();
        yPosition = margin;
      }
      doc.text(line, margin, yPosition);
      yPosition += lineHeight;
    });
    return lines.length;
  };

  const addSection = (title: string, items: string[], type: string) => {
    if (!items || items.length === 0) return;

    yPosition += 5;
    addText(title, 14, true);
    yPosition += 2;

    items.forEach((item, index) => {
      const questionNumber = `${index + 1}.`;
      addText(questionNumber, 11, true);
      addText(item.trim(), 10, false);
      yPosition += 2;
    });

    yPosition += 5;
  };

  doc.setFillColor(15, 23, 42);
  doc.rect(0, 0, pageWidth, 20, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.text("Chesume Interview Questions", pageWidth / 2, 13, { align: "center" });

  yPosition = 35;
  doc.setTextColor(0, 0, 0);

  addText(`Generated on: ${new Date().toLocaleDateString()}`, 9, false);
  addText("Personalized interview preparation questions", 9, false);
  yPosition += 5;

  const categories = [
    { label: "Technical Fundamentals", items: questions.technical, type: "technical" },
    { label: "Behavioral Skills", items: questions.behavioral, type: "behavioral" },
    { label: "Project Experience", items: questions.project_specific, type: "technical" },
    { label: "Problem-Solving Scenarios", items: questions.scenario_based, type: "technical" },
  ];

  categories.forEach((cat) => addSection(cat.label, cat.items, cat.type));

  doc.save("chesume-interview-questions.pdf");
}

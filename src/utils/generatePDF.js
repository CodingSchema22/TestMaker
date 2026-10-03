import jsPDF from "jspdf";

export const generatePDF = (paper) => {
  const doc = new jsPDF();

  let y = 10;

  // Title
  doc.setFontSize(16);
  doc.text(`${paper.subject} - Class ${paper.class}`, 10, y);
  y += 10;

  doc.setFontSize(12);
  doc.text(`Total Marks: ${paper.totalMarks}`, 10, y);
  y += 10;

  doc.text("Instructions: Attempt all questions carefully.", 10, y);
  y += 15;

  // Questions
  paper.questions.forEach((q, index) => {
    const text = `${index + 1}. ${q.question}`;

    const splitText = doc.splitTextToSize(text, 180);
    doc.text(splitText, 10, y);

    y += splitText.length * 7;

    if (y > 270) {
      doc.addPage();
      y = 10;
    }
  });

  doc.save("test-paper.pdf");
};
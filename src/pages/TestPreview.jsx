
import { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import DashboardLayout from "../layouts/DashboardLayout";
export default function TestPreview() {
    const downloadPDF = async () => {
  const testRef = useRef();

const downloadPDF = async () => {
  const element = testRef.current;

  const canvas = await html2canvas(element, {
    scale: 2,
  });

  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF("p", "mm", "a4");

  const pdfWidth = pdf.internal.pageSize.getWidth();

  const imgWidth = pdfWidth;
  const imgHeight =
    (canvas.height * imgWidth) / canvas.width;

  pdf.addImage(
    imgData,
    "PNG",
    0,
    0,
    imgWidth,
    imgHeight
  );

  pdf.save("Generated-Test.pdf");
};

const printTest = () => {
  window.print();
};
};

const printTest = () => {
  window.print();
};
  // const testData = {
  //   school: "ABC Public School",
  //   class: "9",
  //   subject: "Computer Science",
  //   time: "60 Minutes",
  //   marks: 50,

  //   mcqs: [
  //     "What does CPU stand for?",
  //     "Which language is used for web development?",
  //     "What is RAM?"
  //   ],

  //   shortQuestions: [
  //     "Define computer hardware.",
  //     "What is an operating system?"
  //   ],

  //   longQuestions: [
  //     "Explain the components of a computer system.",
  //     "Describe the software development life cycle."
  //   ]
  // };

  const testData = JSON.parse(
  localStorage.getItem("generatedTest")
);
  return (
    <DashboardLayout>
<div className="flex gap-4 mb-6">

  <button
    onClick={downloadPDF}
    className="bg-green-600 text-white px-5 py-3 rounded-lg"
  >
    Download PDF
  </button>

  <button
    onClick={printTest}
    className="bg-blue-600 text-white px-5 py-3 rounded-lg"
  >
    Print Test
  </button>

</div>
      <div className="max-w-5xl mx-auto">

        <div className="bg-white shadow rounded-xl p-10">

          <div className="text-center border-b pb-6">

            <h1 className="text-3xl font-bold">
              {testData.school}
            </h1>

            <h2 className="text-xl mt-2">
              Monthly Test
            </h2>

          </div>

          <div className="grid grid-cols-2 gap-4 mt-6">

            <p>
              <strong>Class:</strong> {testData.class}
            </p>

            <p>
              <strong>Subject:</strong> {testData.subject}
            </p>

            <p>
              <strong>Time:</strong> {testData.time}
            </p>

            <p>
              <strong>Total Marks:</strong> {testData.marks}
            </p>

          </div>

          {/* MCQs */}

         {/* MCQs */}
<div className="mt-10">
  <h2 className="text-2xl font-bold mb-4">
    Part I - MCQs
  </h2>

  {testData?.mcqs?.length > 0 ? (
    testData.mcqs.map((q, index) => (
      <div key={index} className="mb-5">
        <p>
          {index + 1}. {q.question}
        </p>

        <div className="grid grid-cols-2 mt-2 ml-5 gap-2">
          <p>A) __________</p>
          <p>B) __________</p>
          <p>C) __________</p>
          <p>D) __________</p>
        </div>
      </div>
    ))
  ) : (
    <p>No MCQs available</p>
  )}
</div>

{/* Short Questions */}
<div className="mt-10">
  <h2 className="text-2xl font-bold mb-4">
    Part II - Short Questions
  </h2>

  {testData?.short?.length > 0 ? (
    testData.short.map((q, index) => (
      <div key={index} className="mb-6">
        <p>
          {index + 1}. {q.question}
        </p>
        <div className="border-b mt-4"></div>
      </div>
    ))
  ) : (
    <p>No Short Questions available</p>
  )}
</div>

{/* Long Questions */}
<div className="mt-10">
  <h2 className="text-2xl font-bold mb-4">
    Part III - Long Questions
  </h2>

  {testData?.long?.length > 0 ? (
    testData.long.map((q, index) => (
      <div key={index} className="mb-8">
        <p>
          {index + 1}. {q.question}
        </p>
        <div className="h-24 border rounded mt-4"></div>
      </div>
    ))
  ) : (
    <p>No Long Questions available</p>
  )}
</div>

        </div>

      </div>
    </DashboardLayout>
  );
}
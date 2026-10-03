import { generatePDF } from "../utils/generatePDF";

const PaperView = ({ paper }) => {
  return (
    <div>
      <button
        onClick={() => generatePDF(paper)}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Download PDF
      </button>
    </div>
  );
};

export default PaperView;
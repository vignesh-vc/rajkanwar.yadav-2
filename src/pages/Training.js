import React from "react";

const nephrologyTrainingIntro = `I trained in Department of Nephrology at All India Institute Medical Sciences, New Delhi, a 2500 bedded super-specialty hospital, catering to the whole Nation and adjoining neighboring countries like Pakistan, Nepal, Afghanistan and Bangladesh, is truly one of its kind in the Asia.\nTraining at AIIMS has provided me with an unmatched clinical exposure in all aspects of nephrology. The tremendous patient load has rendered me competent and confident in dealing with all kinds of patients. Some aspects of my clinical experience are summarized here:`;

const nephrologyTrainingPoints = [
  "Screening for kidney diseases",
  "Evaluation and management of acute, acute-on-chronic and chronic renal failure patients",
  "Evaluation and management of rapidly progressive renal failure patients",
  "Management of patients with renal involvement in acute intensive care settings",
  "Pre-transplant evaluation of renal transplant recipients and donors",
  "Immediate and long-term management of patients post renal transplantation",
  "Evaluation of patients for deceased donor renal transplantation ",
  "Interventions in form of femoral/jugular/subclavian tunneled and non-tunneled catheterization for hemodialysis",
  "Interventions in form of creation of radio-cehalicAVF",
  "Insertion acute peritoneal dialysis catheters and management of patients on acute PD ",
  "Insertion soft peritoneal dialysis catheters and management of patients on CAPD",
  "Highest exposure in terms of all aspects of nephrology",
  "Twice weekly Nephrology OPD",
  "Twice weekly post renal transplant care OPD ",
  "About 1000 femoral catheterizations performed",
  "About 500 jugular catheterizations performed",
  "About 50 AVF created",
  "About 50 Acute PD catheterizations performed",
  "About 20 CAPD catheterizations performed",
  "About 200 renal (native and allograft) biopsies performed",
  "Exposure to highest number of transplantations- 600 including live and deceased donor transplantations",
  "Managing a Nephrology ICU "
];

const Training = () => (
  <div className="min-h-screen bg-gray-50 px-6 md:px-20 py-12">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Nephrology Training</h1>
      <p className="text-gray-700 mb-8 whitespace-pre-line">{nephrologyTrainingIntro}</p>
      <ul className="space-y-4">
        {nephrologyTrainingPoints.map((point, idx) => (
          <li
            key={idx}
            className="p-4 border border-gray-300 rounded-lg shadow-sm transition-all duration-300 cursor-default hover:border-l-4 hover:border-[#00CC99] hover:pl-6 bg-white"
          >
            <div className="text-base font-semibold text-gray-800">{point}</div>
          </li>
        ))}
      </ul>
      <button
        onClick={() => window.location.href = '/about'}
        className="mt-8 px-4 py-2 bg-[#00CC99] text-white rounded shadow hover:bg-[#009977] transition"
      >
        Back to About
      </button>
    </div>
  </div>
);

export default Training; 
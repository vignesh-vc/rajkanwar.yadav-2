import React from "react";

const conferences = [
  "HAPICON November 2004 held at Haryana",
  "APICON January 2009 held at Greater Noida (NCR)",
  "SAARC Diabetes October 2009 held at India Habitat Centre, New Delhi",
  "APICON January 2010 held at Jaipur",
  "APICON January 2011 held at Ahmedabad",
  "ISNCON 2012 held at New Delhi",
  "ISNCON 2013 December 2013 held at The Leela, Gurgaon",
  "ISNCON 2014 held at Kolkata ",
  "North Zone ISNCON 2014 held at Greater NOIDA ",
  "IANCON September 2014 held at Indore, M.P. India",
  "IACMCON October 2014 held at Agra",
  "AIIMS Nephrology conclave, AIIMS, New Delhi in 2015",
  "CME on renal diseases held at AIIMS, New Delhi",
  "Transplant conclave, AIIMS, New Delhi in 2016",
  "3rd International Renal Pathology Conference 2017 held at AIIMS, New Delhi.",
  "ISNCON December 2017 “48th Annual Conference of Indian Society of Nephrology” held at New Delhi. ",
  "PDSICON “22nd Annual Conference of the Peritoneal Dialysis Society of India”, September 2019 held at Hyderabad ",
  "ISNCON December 2022 held at Pune.",
  "Annual Conference of Delhi Nephrology Society",
  "ISNCON December 2023 “53rd Annual National Conference of Indian Society of Nephrology” held at ITC Royal Bengal, Kolkata.",
  "Inaugural Conference of Indian Society of Transplant Surgeons” September 2024 held at AIIMS, New Delhi.",
  "1st AIIMS Interventional Nephrology Conference” September 2024 held at AIIMS, New Delhi.",
  "TTS 2024 30th International Congress of The Transplantation Society held at ISTANBUL TURKEY.",
  "IPC-IPSCON 2024 International Pharmacology Conference (IPC) & 54th Annual Conference of Indian Pharmacological Society 2024 held at AIIMS, New Delhi.",
  "ISPNCON 2024 held from December 2024 in New Delhi."
];

const presentations = [
  "Oral Presentation in North Zone ISN held at Greater Noida, 2014 - “Ambulatory Blood Pressure and clinic-based Blood Pressure measurement in living kidney donors before and after nephrectomy- a short term follow-up study”.",
  "Poster presentation in IANCON held at Indore2014 – “Ambulatory blood pressure monitoring (ABPM): Pre and post medical donor nephrectomy”.",
  "Oral presentation at IACMCON held at Agra ,2014 – “Stress hyperglycemia as an early prognostic indicator in non-diabetic myocardial infarction patients”.",
  "Poster presentation in ISNCON held at Kolkata, 2014 “Role of ambulatory blood pressure monitoring in the diagnosis of hypertension in living kidney donors”.",
  "Oral presentation on World Kidney Day -2016 in the CME on ‘Renal Diseases’ at AIIMS, New Delhi on 10th March, 2016 - “Conservative management of CKD”.  ",
  "Talk on HYPERTENSION and kidney on the behalf of hypertension society of India on 8th August, 2016.",
  "Talk on Prevention of CKD. World Kidney Day – Kidney & Women’ Health, VMMC & Safdarjung Hospital, New Delhi on 8th March, 2018.",
  "Talk on Pregnancy in transplant patient. Symposium on kidney disease. AIIMS, New Delhi on 8th March, 2018. ",
  "Poster presentation: Outcome of Outcome of primary focal segmental glomerular sclerosis (FSGS)after renal transplantation in adult, 48th Annual conference of Indian society of Nephrology, New Delhi on 16 Dec, 2017.",
  "Talk on Prevention of CKD, World Kidney Day – 2019 at VMMC & Safdarjung Hospital, New Delhi on 14 March, 2019.",
  "Talk on Principles of handling psychiatric comorbidities in non- communicable diseases, Principles of handling at AIIMS, New Delhi on 9th April, 2018.",
  "Talk on psychiatric comorbidities in Nephrology at AIIMS, New Delhi on 9th April",
  "Talk on Recent Update on Nephrology, New Generation Calcium channel Blockers (CCB) at Kathmandu, Nepal on 25-27 May, 2018.",
  "Talk on Tropical nephrology – an overview, CHETMEDICON 2018 at Chennai on18 August, 2018.",
  "Hemodialysis Machine & safety Alarms, National Seminar on Kidney Disease at Lucknow on 11th Nov, 2018"
];

function extractYear(str) {
  const match = str.match(/(19|20)\d{2}/g);
  if (match) {
    return parseInt(match[match.length - 1], 10);
  }
  return 0;
}

const sortedConferences = [...conferences].sort((a, b) => extractYear(b) - extractYear(a));
const sortedPresentations = [...presentations].sort((a, b) => extractYear(b) - extractYear(a));

export { conferences, presentations };

const Conference = () => (
  <div className="min-h-screen bg-gray-50 px-6 md:px-20 py-12">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Conferences & Presentations</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Conferences</h2>
        <ul className="space-y-4">
          {sortedConferences.map((conf, idx) => (
            <li key={idx} className="p-4 border border-gray-300 rounded-lg shadow-sm transition-all duration-300 cursor-default hover:border-l-4 hover:border-[#00CC99] hover:pl-6 bg-white">
              <div className="text-base font-semibold text-gray-800">{conf}</div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Presentations</h2>
        <ul className="space-y-4">
          {sortedPresentations.map((pres, idx) => (
            <li key={idx} className="p-4 border border-gray-300 rounded-lg shadow-sm transition-all duration-300 cursor-default hover:border-l-4 hover:border-[#00CC99] hover:pl-6 bg-white">
              <div className="text-base font-semibold text-gray-800">{pres}</div>
            </li>
          ))}
        </ul>
      </section>

      <button
        onClick={() => window.location.href = '/'}
        className="mt-8 px-4 py-2 bg-[#00CC99] text-white rounded shadow hover:bg-[#009977] transition"
      >
        Back to Home
      </button>
    </div>
  </div>
);

export default Conference; 
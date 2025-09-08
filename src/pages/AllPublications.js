import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

// Full, yearwise-formatted, deduplicated publication list (exactly 45 entries)
const allPublications = [
  // 2024
  "Kumar S, Raman S, Sesham K, Gupta A, Yadav RK, Mridha AR, Yadav SC. Visual, rapid, and cost-effective BK virus detection system for renal transplanted patients using gold nanoparticle coupled loop-mediated isothermal amplification (nanoLAMP). J Virol Methods. 2024 Apr;325:114889. doi: 10.1016/j.jviromet.2024.114889. Epub 2024 Jan 28. PMID: 38290650.",
  "Sangha SS, Yadav S, Yadav RK, Kumar A, Seenu V, Agarwal SK, Kabra M, Chowdhury MR, Vishwakarma VK and Bhowmik D. Pattern of CYP3A5 and MDR-1, single-nucleotide polymorphism and its impact on Tacrolimus level and clinical outcomes in living renal allograft recipient: RPS Pharmacy and Pharmacology Reports, 2024, 3 rqae016 https://doi.org/10.1093/rpsppr/rqae016 Advance access publication 6 June 2024",
  "Yadav RK, Sukhwinder Singh Sangha, Sushma Yadav, Preeti Sharma, Harsh Shah, Dipankar Bhowmik Accepted in Jati : 16 July 2024 “A Clinical Study to Evaluate the anti-inflammatory effect of Ferronemia (Tablactoferrin plus disodium guanosine monophosphate) therapy in the Patients with Chronic Kidney Disease” (Jr.No: 2023-700).doa:06.08.24",
  "Pahuja T, Sangha SS, Sarkar A, Yadav RK. Factor V Leiden Heterozygous Mutation and Hyperthomocysteinemia Presnting with Vascular Rejection and Renal Allograft Infarction. Indian J Nephrol. Doi:10.25259/IJN¬_330_2024",
  // 2023
  "Vishwakarma VK, Shah S, Kaur T, Singh AP, Arava SK, Kumar N, Yadav RK, Yadav S, Arora T, Yadav HN. Effect of vinpocetine alone and in combination with enalapril in experimental model of diabetic cardiomyopathy in rats: possible involvement of PDE-1/TGF-β/ Smad 2/3 signalling pathways. J Pharm Pharmacol. 2023 Sep 1;75(9):1198-1211. doi: 10.1093/jpp/rgad043. PMID: 37229596.",
  // 2022
  "Bagchi S, Upadhyay AD, Barwad A, Singh G, Subbiah AK, Yadav RK, Mahajan S, Bhowmik D, Kumar Agarwal S, The International IgA nephropathy network (IIgANN) prediction tool underestimates disease progression in Indian patients, Kidney International Reports (2022), doi: https://doi.org/10.1016/j.ekir.2022.03.016",
  "George K, Upadhyay AD, Subbiah AK, Yadav RK, Mahajan S, Bhowmik D, Agarwal SK, Bagchi S. Metabolic acidosis in the initial 6 months after renal transplantation: A prospective study. Nephrology (Carlton). 2022 Jan;27(1):90-96. doi: 10.1111/nep.13954. Epub 2021 Aug 2. PMID: 34302717.",
  "Yadav S, Chauhan M, Jain D, Aggarwal HK, Yadav RK: Renal Outcomes of Pregnancy-Related Acute Kidney Injury: a Single Centre Experience in India. MAEDICA – A Journal of Clinical Medicine 2022; 17(1): 88-95 https://doi.org/10.26574/maedica.2022.17.1.88",
  "Devagourou A, Sharma KK, Yadav RK, Gupta VP, Kalaivani M. An Experimental Study to Evaluate the Effect of Low-Intensity Intradialytic Exercises on Serum Urea, Creatinine, and Fatigue of Chronic Kidney Disease Patients Undergoing Hemodialysis. Saudi J Kidney Dis Transpl 2021;32(5):1253-1259.",
  "Shadab, S., Mittal, P., Barwad, A. Singh G, Subbiah AK, Yadav RK et al. Characterizing predictors of non-diabetic kidney disease (NDKD) in diabetic patients. Int Urol Nephrol 54, 1303–1309 (2022). https://doi.org/10.1007/s11255-021-02998-1",
  "Baksi A, Asuri K, Vuthaluru S, Yadav RK, Prajapati OP, Bansal VK, Kumar S, Mahajan S, Bhowmik D, Bagga A, Agarwal SK. Does Laparoscopic Omentectomy Reduce CAPD Catheter Malfunction: A Three-arm Pilot Randomized Trial. Indian J Nephrol. 2022 Jul-Aug;32(4):299-306. doi: 10.4103/ijn.ijn_168_21. Epub 2022 May 20. PMID: 35967525; PMCID: PMC9364995.",
  "George K, Subbiah AK, Yadav RK, Bagchi S, Mahajan S, Bhowmik D, Agarwal SK: Utility and patient acceptance of telemedicine in nephrology. Journal of Nephrology (2022) 35:2325–2331 https://doi.org/10.1007/s40620-022-01471-1",
  "Mehra M, Yadav RK, Rajora MAK, Dahiya U, Agarwal SK: Factors affecting quality of day time and night time sleep among dialysis patients: A single center experience. Semin Dial. 2022 Sep 27. doi: 10.1111/sdi.13125. Epub ahead of print. PMID: 36167309.",
  "Sangha SS, Yadav RK, Subbiah A, Bagchi S, Mahajan S, Bhowmik D, et al. Clinical profile of nonproteinuric kidney disease in type 2 diabetic patients in India. Indian J Nephrol 0; 0:0",
  // 2021
  "Mangalgi S, Madan K, Das CJ, Singh G, Sati H, Yadav RK, Xess I, Singh S, Bhowmik D, Agarwal SK, Bagchi S. Pulmonary infections after renal transplantation: a prospective study from a tropical country. Transplant International 2021; 34: 525–34.",
  "Behl T, Shah S, Kaur I, Yadav S, Kanwar R, Seth S, Wig N, Sharma KK, Yadav HN.  Role of ACE2 and Vitamin D: The two players in global fight against COVID -19 pandemic. Accepted in Annals of the National Academy of Medical Sciences (India). Ann Natl Acad Med Sci (India) 2021; 00:1–11.",
  // 2019
  "Subbiah A, Bagchi S, Yadav RK, Mahajan S, Bhowmik D, Agarwal SK. Moxifloxacin-associated Neutropenia in a Patient Planned for Renal Transplantation. Indian J Nephrol. 2019 Jul-Aug;29(4):303-305. doi: 10.4103/ijn.IJN_234_18.",
  "Yadav RK, Ariga KK, Subbiah A, Bagchi S, Mahajan S, Bhowmik D, Agarwal SK. Novel Heterozygous Mutations of Congenital Thrombotic Thrombocytopenic Purpura: A Rare Case Report. Indian J Nephrol. 2019 Jul-Aug;29(4):295-297. doi: 10.4103/ijn.IJN_241_18.",
  "Yadav RK, Bhowmik D, Subbiah A, Yadav S, Bagchi S, Mahajan S, Agarwal SK. To Study the Impact of Donor Nephrectomy on Blood Pressure as Measured by Ambulatory Blood Pressure Monitoring and Renal Function. Indian J Nephrol. 2019 Jul-Aug;29(4):272-277. doi: 10.4103/ijn.IJN_266_18.",
  // 2018
  "Subbiah A, Mahajan S, Yadav RK, Agarwal SK. Colovesical fistula: a rare complication after renal transplantation.BMJ Case Rep 2018 Jan 6:2018 published online First: 23.12.2017doi:10.1136/bcr-2017- 222682.",
  "Subbiah A, Bagchi S, Bhowmik D, Mahajan S, Yadav RK, Chhabra Y, et al. Dengue fever in renal allograft recipients: Clinical course and outcome. Transpl Infect Dis. 2018 Mar 7: e12875; https://doi.org/10.IIII/tid.12875",
  "Aggarwal HK, Jain D, Mor S, Yadav RK, Jain P. Prevalence and Clinical Correlates of Microalbuminuria in Patients with Essential Hypertension - A Tertiary Care Center Cross Sectional Study. J Assoc Physicians India 2018;66,30-4.",
  "26.	Subbiah A, Mahajan S, Yadav RK, Agarwal SK. Intravenous immunoglobulin therapy for dengue capillary leak syndrome in a renal allograft recipient. BMJ Case Rep 19 June 2108. doi:10.1136/bcr-2018- 225",
  // 2017
  "Agarwal SK, Bagchi S, Yadav RK. HCV Treatment in Patients on Maintenance Hemodialysis by Sofosbuvir-based Direct Antiviral Agent: A Single Center Experience from India. K I Reports 2017; 2: 831–5.",
  "Aggarwal H.K., Jain D, Singh A, Yadav RK, Jain P. Spectrum and Outcome of Acute Kidney Injury: A Tertiary Care Centre Experience from North India. J Ann Eu Med 2017; DOI: 10.4328/AEMED.114.",
  "Bagchi S, Subbiah A, Bhowmik D, Mahajan S, Yadav RK, Kalaivani M et al. Low-dose Rituximab therapy in resistant idiopathic membranous nephropathy: single-center experience. Clinical Kidney Journal, 2017, doi: 10.1093/ckj/sfx105.",
  "Yadav RK, Das CJ, Bagchi S, Agarwal S.  Asymptomatic Pontine and Extra-Pontine Lesions in a Patient with End-Stage Renal Disease. Saudi J. Kidney Dis. Transpl. 2016;27(2):395-397",
  // 2016
  "Aggarwal HK, Jain D, Mittal A, Rao A, Yadav RK, Jain P. Systemic lupus erythematous presenting as fulminant lupus pneumonitis: a rare case report. Reumatismo. 2016;68(1)48-52.",
  "Yadav RK, Yadav S, Rao A, Aggarwal HK, Jain D. Purple urine bag syndrome: an uncommon case presentation. The Indian Practitioner2016; 69(10): 29 -31.",
  // 2015
  "Aggarwal HK, Jain D, Dabas G, Yadav RK, Jain P. Cerebral venous thrombosis: a rare presentation of paroxysmal nocturnal hemoglobinuria. Arch. Clin. Cases 2015; 2(4):198-201.",
  // 2013
  "H. K. Aggarwal, Tarana Gupta, Deepak Jain, R. K. Yadav. Refractory Hypokalemia: A Rare Presentation of Hypomagnesemia. JIMSA 2013;26(2):107-108.",
  // 2012
  "H.K. Aggarwal, Tarana Gupta, Deepak Jain, R.K. Yadav. Steele Richardson syndrome – an interesting case report. The Indian Practitioner 2012; 65(2):115-117.",
  "H.K. Aggarwal, Deepak Jain, Amrish Sahney, Teena Bansal, R.K. Yadav, K.L. Kathuria. Effect of Dialyser Reuse on the Efficacy of Haemodialysis in Patients of Chronic Kidney Disease in Developing World. JIMSA 2012; 25(2):81-83.",
  // 2011
  "H.K. Aggarwal, Deepak Jain, Sonia Sindhu, R.K. Yadav. Evaluation of role of Low Molecular Weight Heparin and Vitamin E on renal functions in patients of diabetic nephropathy. Dicle Medical Journal 2011; 38(2):129-133.",
  "H.K. Aggarwal, D.K. Jain, R.K. Yadav.  Priapism induced with single oral dose of Sildenafil: A rare case report. International Journal of Pharmacy and Pharmaceutical Sciences 2011; 3(2):94-95.",
  "H.K. Aggarwal, S.K. Singh, Deepak Jain, R.K. Yadav. To study the effect of N- acetylcysteine in preventing radiocontrast induced nephrotoxicity in patients with pre – existing renal insufficiency undergoing intravenous pyelography. The Indian Practitioner 2011; 64(4):219-225.",
  // 2010
  "N. Nand, R.K. Yadav, K. Bharti, M. Sharma. Evaluation of Efficacy and Safety of Continuous Hemodiafiltration in cases of Acute Renal Failure. JIMSA 2010; 23(4):223-225.",
  "H.K. Aggarwal, Deepak Jain, Paulomi Talapatra, R.K.Yadav, Tarana Gupta, Kashmiri LalKathuria. Evaluation of role of doxycycline (a matrix metalloproteinase inhibitor) on renal functions in patients of diabetic nephropathy. Renal Failure 2010; 32:941-946.",
  "H.K. Aggarwal, Deepak Jain, Mohit Lathar, R.K. Yadav, Amrish Sawhney. Lipoprotein-A and carotid intima media thickness as cardiovascular risk factors in patients of chronic kidney disease Lipoprotein-A and carotid intima media thickness. Renal Failure 2010; 32:647-652.",
  // 2009
  "N. Nand, H.K. Aggarwal, R.K. Yadav, A. Gupta, M. Sharma. Role of High-sensitivity C - reactive protein as a marker of Inflammation in Pre-dialysis Patients of Chronic Renal Failure. Journal Indian Academy of Clinical Medicine 2009; 10(1 & 2):18-22.",
  "Nitya Nand, D. Kumar, M. Sharma, R.K. Yadav. Oxidative stress in patient with different histopathological types of idiopathic glomerulonephritis. JIMSA 2009; 22(4):197-199.",
  "Goel M.K, Malik J.S, Khanna Pardeep, Gaur DR, Behera B.K, Yadav R.K. Sero-epidemiological investigation of an outbreak of fever in rural area of Rohtak. Journal of communicable diseases 2009; 41(3):215-217.",
  // 2008
  "M.S. Gupta, R.K .Yadav, H. Singh. Glucose Tolerance in Non-Diabetic Patients with Acute Myocardial Infarction – A Short Term Follow-up Study. Journal, Indian Academy of Clinical Medicine 2008; 9(1):15-19.",
  "Nitya Nand, R.K. Yadav, H.K. Aggarwal, Amit Yadav, Manju Sharma. To Study the Effects of L-carnitine Administration on Anaemia and Oxidative Stress in Hemodialyzed Patients. Journal, Indian Academy of Clinical Medicine 2008; 9(4):268-273.",
  // 2007
  "S.N. Chugh, Surekha Dabla, Vijay Pal, R.K. Yadav, Arvind Garg. Oesophageal stricture following aluminium phosphide (Celphos) poisoning: a rare complication. International Journal of Medical Toxicology & legal medicine 2007; 10:63-64."
];

function extractYear(pub) {
  const match = pub.match(/(19|20)\d{2}/g);
  if (match) {
    return match[match.length - 1];
  }
  return null;
}

function linkify(text) {
  // First, linkify URLs
  let parts = text.split(/(https?:\/\/[^\s]+)/g).map((part, i) =>
    part.match(/https?:\/\/[^\s]+/)
      ? <a key={`url-${i}`} href={part} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline break-all">{part}</a>
      : part
  );
  // Then, linkify PMID (only one, no duplication, and as JSX)
  return parts.flatMap((part, i) => {
    if (typeof part === "string") {
      const pmidRegex = /PMID:\s*(\d+)/g;
      const result = [];
      let lastIndex = 0;
      let match;
      while ((match = pmidRegex.exec(part)) !== null) {
        // Push text before PMID
        if (match.index > lastIndex) {
          result.push(part.slice(lastIndex, match.index));
        }
        // Push "PMID: " label
        result.push("PMID: ");
        // Push the link for the number
        result.push(
          <a
            key={`pmid-${i}-${match[1]}`}
            href={`https://pubmed.ncbi.nlm.nih.gov/${match[1]}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline break-all"
          >
            {match[1]}
          </a>
        );
        lastIndex = pmidRegex.lastIndex;
      }
      // Push any remaining text after the last PMID
      if (lastIndex < part.length) {
        result.push(part.slice(lastIndex));
      }
      return result;
    }
    return part;
  });
}

const AllPublications = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 md:px-20 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">List Of Publications</h1>
        <ul className="space-y-4 text-justify">
          {allPublications.map((pub, idx) => (
            <li
              key={idx}
              className="p-4 text-justify border border-gray-300 rounded-lg shadow-sm transition-all duration-300 cursor-default hover:border-l-4 hover:border-[#00CC99] hover:pl-6 bg-white"
            >
              <div className="text-base font-semibold text-gray-800">{linkify(pub)}</div>
            </li>
          ))}
        </ul>
        <button
          onClick={() => window.location.href = '/'}
          className="mt-8 px-4 py-2 bg-[#00CC99] text-white rounded shadow hover:bg-[#009977] transition"
        >
          Back to Home
        </button>
      </div>
             {showScrollToTop && (
         <button
           onClick={scrollToTop}
           className="fixed bottom-6 right-6 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 hover:scale-110"
           aria-label="Scroll to top"
         >
           <FaArrowUp className="text-xl" />
         </button>
       )}
    </div>
  );
};

export default AllPublications; 
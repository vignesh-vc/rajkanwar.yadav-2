import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const publications = [
  { id: 1, title: 'S.N. Chugh, Surekha Dabla, Vijay Pal, R.K. Yadav, Arvind Garg. Oesophageal stricture following aluminium phosphide (Celphos) poisoning: a rare complication. International Journal of Medical Toxicology & legal medicine 2007; 10:63-64.', year: 2007 },
  { id: 2, title: 'M.S. Gupta, R.K .Yadav, H. Singh. Glucose Tolerance in Non-Diabetic Patients with Acute Myocardial Infarction – A Short Term Follow-up Study. Journal, Indian Academy of Clinical Medicine 2008; 9(1):15-19.', year: 2008 },
  { id: 3, title: 'Nitya Nand, R.K. Yadav, H.K. Aggarwal, Amit Yadav, Manju Sharma. To Study the Effects of L-carnitine Administration on Anaemia and Oxidative Stress in Hemodialyzed Patients. Journal, Indian Academy of Clinical Medicine 2008; 9(4):268-273.', year: 2008 },
  { id: 4, title: 'N. Nand, H.K. Aggarwal, R.K. Yadav, A. Gupta, M. Sharma. Role of High-sensitivity C - reactive protein as a marker of Inflammation in Pre-dialysis Patients of Chronic Renal Failure. Journal Indian Academy of Clinical Medicine 2009; 10(1 & 2):18-22.', year: 2009 },
  { id: 5, title: 'Nitya Nand, D. Kumar, M. Sharma, R.K. Yadav. Oxidative stress in patient with different histopathological types of idiopathic glomerulonephritis. JIMSA 2009; 22(4):197-199.', year: 2009 },
  { id: 6, title: 'Goel M.K, Malik J.S, Khanna Pardeep, Gaur DR, Behera B.K, Yadav R.K. Sero-epidemiological investigation of an outbreak of fever in rural area of Rohtak. Journal of communicable diseases 2009; 41(3):215-217.', year: 2009 },
  { id: 7, title: 'N. Nand, R.K. Yadav, K. Bharti, M. Sharma. Evaluation of Efficacy and Safety of Continuous Hemodiafiltration in cases of Acute Renal Failure. JIMSA 2010; 23(4):223-225.', year: 2010 },
  { id: 8, title: 'H.K. Aggarwal, Deepak Jain, Paulomi Talapatra, R.K.Yadav, Tarana Gupta, Kashmiri LalKathuria. Evaluation of role of doxycycline (a matrix metalloproteinase inhibitor) on renal functions in patients of diabetic nephropathy. Renal Failure 2010; 32:941-946.', year: 2010 },
  { id: 9, title: 'H.K. Aggarwal, Deepak Jain, Mohit Lathar, R.K. Yadav, Amrish Sawhney. Lipoprotein-A and carotid intima media thickness as cardiovascular risk factors in patients of chronic kidney disease Lipoprotein-A and carotid intima media thickness. Renal Failure 2010; 32:647-652.', year: 2010 },
  { id: 10, title: 'H.K. Aggarwal, Deepak Jain, Sonia Sindhu, R.K. Yadav. Evaluation of role of Low Molecular Weight Heparin and Vitamin E on renal functions in patients of diabetic nephropathy. Dicle Medical Journal 2011; 38(2):129-133.', year: 2011 },
  { id: 11, title: 'H.K. Aggarwal, D.K. Jain, R.K. Yadav.  Priapism induced with single oral dose of Sildenafil: A rare case report. International Journal of Pharmacy and Pharmaceutical Sciences 2011; 3(2):94-95.', year: 2011 },
  { id: 12, title: 'H.K. Aggarwal, S.K. Singh, Deepak Jain, R.K. Yadav. To study the effect of N- acetylcysteine in preventing radiocontrast induced nephrotoxicity in patients with pre – existing renal insufficiency undergoing intravenous pyelography. The Indian Practitioner 2011; 64(4):219-225.', year: 2011 },
  { id: 13, title: 'H.K. Aggarwal, Tarana Gupta, Deepak Jain, R.K. Yadav. Steele Richardson syndrome – an interesting case report. The Indian Practitioner 2012; 65(2):115-117.', year: 2012 },
  { id: 14, title: 'H.K. Aggarwal, Deepak Jain, Amrish Sahney, Teena Bansal, R.K. Yadav, K.L. Kathuria. Effect of Dialyser Reuse on the Efficacy of Haemodialysis in Patients of Chronic Kidney Disease in Developing World. JIMSA 2012; 25(2):81-83.', year: 2012 },
  { id: 15, title: 'H. K. Aggarwal, Tarana Gupta, Deepak Jain, R. K. Yadav. Refractory Hypokalemia: A Rare Presentation of Hypomagnesemia. JIMSA 2013;26(2):107-108.', year: 2013 },
  { id: 16, title: 'Aggarwal HK, Jain D, Dabas G, Yadav RK, Jain P. Cerebral venous thrombosis: a rare presentation of paroxysmal nocturnal hemoglobinuria. Arch. Clin. Cases 2015; 2(4):198-201.', year: 2015 },
  { id: 17, title: 'Yadav RK, Das CJ, Bagchi S, Agarwal S.  Asymptomatic Pontine and Extra-Pontine Lesions in a Patient with End-Stage Renal Disease. Saudi J. Kidney Dis. Transpl. 2016;27(2):395-397', year: 2016 },
  { id: 18, title: 'Aggarwal HK, Jain D, Mittal A, Rao A, Yadav RK, Jain P. Systemic lupus erythematous presenting as fulminant lupus pneumonitis: a rare case report. Reumatismo. 2016;68(1)48-52.', year: 2016 },
  { id: 19, title: 'Yadav RK, Yadav S, Rao A, Aggarwal HK, Jain D. Purple urine bag syndrome: an uncommon case presentation. The Indian Practitioner2016; 69(10): 29 -31.', year: 2016 },
  { id: 20, title: 'Agarwal SK, Bagchi S, Yadav RK. HCV Treatment in Patients on Maintenance Hemodialysis by Sofosbuvir-based Direct Antiviral Agent: A Single Center Experience from India. K I Reports 2017; 2: 831–5.', year: 2017 },
  { id: 21, title: 'Aggarwal H.K., Jain D, Singh A, Yadav RK, Jain P. Spectrum and Outcome of Acute Kidney Injury: A Tertiary Care Centre Experience from North India. J Ann Eu Med 2017; DOI: 10.4328/AEMED.114.', year: 2017 },
  { id: 22, title: 'Bagchi S, Subbiah A, Bhowmik D,Mahajan S, Yadav RK, Kalaivani M et al. Low-dose Rituximab therapy in resistant idiopathic membranous nephropathy: single-center experience. Clinical Kidney Journal, 2017, doi: 10.1093/ckj/sfx105.', year: 2017 },
  { id: 23, title: 'Subbiah A, Mahajan S, Yadav RK, Agarwal SK. Colovesical fistula: a rare complication after renal transplantation.BMJ Case Rep 2018 Jan 6:2018 published online First: 23.12.2017doi:10.1136/bcr-2017- 222682.', year: 2018 },
  { id: 24, title: 'Subbiah A, Bagchi S, Bhowmik D, Mahajan S, Yadav RK, Chhabra Y, et al. Dengue fever in renal allograft recipients: Clinical course and outcome. Transpl Infect Dis. 2018 Mar 7: e12875; https://doi.org/10.IIII/tid.12875', year: 2018 },
  { id: 25, title: 'Aggarwal HK, Jain D, Mor S, Yadav RK, Jain P. Prevalence and Clinical Correlates of Microalbuminuria in Patients with Essential Hypertension - A Tertiary Care Center Cross Sectional Study. J Assoc Physicians India 2018;66,30-4.', year: 2018 },
  { id: 26, title: 'Subbiah A, Mahajan S, Yadav RK, Agarwal SK. Intravenous immunoglobulin therapy for dengue capillary leak syndrome in a renal allograft recipient. BMJ Case Rep 19 June 2108. doi:10.1136/bcr-2018- 225.', year: 2018 },
  { id: 27, title: 'Subbiah A, Bagchi S, Yadav RK, Mahajan S, Bhowmik D, Agarwal SK. Moxifloxacin-associated Neutropenia in a Patient Planned for Renal Transplantation. Indian J Nephrol. 2019 Jul-Aug;29(4):303-305. doi: 10.4103/ijn.IJN_234_18.', year: 2019 },
  { id: 28, title: 'Yadav RK, Ariga KK, Subbiah A, Bagchi S, Mahajan S, Bhowmik D, Agarwal SK. Novel Heterozygous Mutations of Congenital Thrombotic Thrombocytopenic Purpura: A Rare Case Report. Indian J Nephrol. 2019 Jul-Aug;29(4):295-297. doi: 10.4103/ijn.IJN_241_18.', year: 2019 },
  { id: 29, title: 'Yadav RK, Bhowmik D, Subbiah A, Yadav S, Bagchi S, Mahajan S, Agarwal SK. To Study the Impact of Donor Nephrectomy on Blood Pressure as Measured by Ambulatory Blood Pressure Monitoring and Renal Function. Indian J Nephrol. 2019 Jul-Aug;29(4):272-277. doi: 10.4103/ijn.IJN_266_18.', year: 2019 },
  { id: 30, title: 'Mangalgi S, Madan K, Das CJ, Singh G, Sati H, Yadav RK, Xess I, Singh S, Bhowmik D, Agarwal SK, Bagchi S. Pulmonary infections after renal transplantation: a prospective study from a tropical country. Transplant International 2021; 34: 525–34.', year: 2021 },
  { id: 31, title: 'Behl T, Shah S, Kaur I, Yadav S, Kanwar R, Seth S, Wig N, Sharma KK, Yadav HN.  Role of ACE2 and Vitamin D: The two players in global fight against COVID -19 pandemic. Accepted in Annals of the National Academy of Medical Sciences (India). Ann Natl Acad Med Sci (India) 2021; 00:1–11.', year: 2021 },
  { id: 32, title: 'Bagchi S, Upadhyay AD, Barwad A, Singh G, Subbiah AK, Yadav RK, Mahajan S, Bhowmik D, Kumar Agarwal S, The International IgA nephropathy network (IIgANN) prediction tool underestimates disease progression in Indian patients, Kidney International Reports (2022), doi: https://doi.org/10.1016/j.ekir.2022.03.016', year: 2022 },
  { id: 33, title: 'George K, Upadhyay AD, Subbiah AK, Yadav RK, Mahajan S, Bhowmik D, Agarwal SK, Bagchi S. Metabolic acidosis in the initial 6 months after renal transplantation: A prospective study. Nephrology (Carlton). 2022 Jan;27(1):90-96. doi: 10.1111/nep.13954. Epub 2021 Aug 2. PMID: 34302717.', year: 2022 },
  { id: 34, title: 'Yadav S, Chauhan M, Jain D, Aggarwal HK, Yadav RK: Renal Outcomes of Pregnancy-Related Acute Kidney Injury: a Single Centre Experience in India. MAEDICA – A Journal of Clinical Medicine 2022; 17(1): 88-95 https://doi.org/10.26574/maedica.2022.17.1.88', year: 2022 },
  { id: 35, title: 'Devagourou A, Sharma KK, Yadav RK, Gupta VP, Kalaivani M. An Experimental Study to Evaluate the Effect of Low-Intensity Intradialytic Exercises on Serum Urea, Creatinine, and Fatigue of Chronic Kidney Disease Patients Undergoing Hemodialysis. Saudi J Kidney Dis Transpl 2021;32(5):1253-1259.', year: 2021 },
  { id: 36, title: 'Shadab, S., Mittal, P., Barwad, A. Singh G, Subbiah AK, Yadav RK et al. Characterizing predictors of non-diabetic kidney disease (NDKD) in diabetic patients. Int Urol Nephrol 54, 1303–1309 (2022). https://doi.org/10.1007/s11255-021-02998-1', year: 2022 },
  { id: 37, title: 'Baksi A, Asuri K, Vuthaluru S, Yadav RK, Prajapati OP, Bansal VK, Kumar S, Mahajan S, Bhowmik D, Bagga A, Agarwal SK. Does Laparoscopic Omentectomy Reduce CAPD Catheter Malfunction: A Three-arm Pilot Randomized Trial. Indian J Nephrol. 2022 Jul-Aug;32(4):299-306. doi: 10.4103/ijn.ijn_168_21. Epub 2022 May 20. PMID: 35967525; PMCID: PMC9364995.', year: 2022 },
  { id: 38, title: 'George K, Subbiah AK, Yadav RK, Bagchi S, Mahajan S, Bhowmik D, Agarwal SK: Utility and patient acceptance of telemedicine in nephrology. Journal of Nephrology (2022) 35:2325–2331 https://doi.org/10.1007/s40620-022-01471-1.', year: 2022 },
  { id: 39, title: 'Mehra M, Yadav RK, Rajora MAK, Dahiya U, Agarwal SK: Factors affecting quality of day time and night time sleep among dialysis patients: A single center experience. Semin Dial. 2022 Sep 27. doi: 10.1111/sdi.13125. Epub ahead of print. PMID: 36167309.', year: 2022 },
  { id: 40, title: 'Sangha SS, Yadav RK, Subbiah A, Bagchi S, Mahajan S, Bhowmik D, et al. Clinical profile of nonproteinuric kidney disease in type 2 diabetic patients in India. Indian J Nephrol 0; 0:0', year: 2022 },
  { id: 41, title: 'Vishwakarma VK, Shah S, Kaur T, Singh AP, Arava SK, Kumar N, Yadav RK, Yadav S, Arora T, Yadav HN. Effect of vinpocetine alone and in combination with enalapril in experimental model of diabetic cardiomyopathy in rats: possible involvement of PDE-1/TGF-β/ Smad 2/3 signalling pathways. J Pharm Pharmacol. 2023 Sep 1;75(9):1198-1211. doi: 10.1093/jpp/rgad043. PMID: 37229596.', year: 2023 },
  { id: 42, title: 'Kumar S, Raman S, Sesham K, Gupta A, Yadav RK, Mridha AR, Yadav SC. Visual, rapid, and cost-effective BK virus detection system for renal transplanted patients using gold nanoparticle coupled loop-mediated isothermal amplification (nanoLAMP). J Virol Methods. 2024 Apr;325:114889. doi: 10.1016/j.jviromet.2024.114889. Epub 2024 Jan 28. PMID: 38290650.', year: 2024 },
  { id: 43, title: 'Sangha SS, Yadav S, Yadav RK, Kumar A, Seenu V, Agarwal SK, Kabra M, Chowdhury MR, Vishwakarma VK and Bhowmik D. Pattern of CYP3A5 and MDR-1, single-nucleotide polymorphism and its impact on Tacrolimus level and clinical outcomes in living renal allograft recipient: RPS Pharmacy and Pharmacology Reports, 2024, 3 rqae016 https://doi.org/10.1093/rpsppr/rqae016 Advance access publication 6 June 2024', year: 2024 },
  { id: 44, title: 'Yadav RK, Sukhwinder Singh Sangha, Sushma Yadav, Preeti Sharma, Harsh Shah, Dipankar Bhowmik Accepted in Jati : 16 July 2024 “A Clinical Study to Evaluate the anti-inflammatory effect of Ferronemia (Tablactoferrin plus disodium guanosine monophosphate) therapy in the Patients with Chronic Kidney Disease” (Jr.No: 2023-700).doa:06.08.24', year: 2024 },
  { id: 45, title: 'Pahuja T, Sangha SS, Sarkar A, Yadav RK. Factor V Leiden Heterozygous Mutation and Hyperthomocysteinemia Presnting with Vascular Rejection and Renal Allograft Infarction. Indian J Nephrol. Doi:10.25259/IJN¬_330_2024', year: 2024 },
];

const presentations = [
  { id: 1, title: 'Oral Presentation in North Zone ISN held at Greater Noida, 2014 - “Ambulatory Blood Pressure and clinic-based Blood Pressure measurement in living kidney donors before and after nephrectomy- a short term follow-up study”.', year: 2014 },
  { id: 2, title: 'Poster presentation in IANCON held at Indore 2014 – “Ambulatory blood pressure monitoring (ABPM): Pre and post medical donor nephrectomy”.', year: 2014 },
  { id: 3, title: 'Oral presentation at IACMCON held at Agra, 2014 – “Stress hyperglycemia as an early prognostic indicator in non-diabetic myocardial infarction patients”.', year: 2014 },
  { id: 4, title: 'Poster presentation in ISNCON held at Kolkata, 2014 “Role of ambulatory blood pressure monitoring in the diagnosis of hypertension in living kidney donors”.', year: 2014 },
  { id: 5, title: 'Oral presentation on World Kidney Day -2016 in the CME on ‘Renal Diseases’ at AIIMS, New Delhi on 10th March, 2016 - “Conservative management of CKD”.', year: 2016 },
  { id: 6, title: 'Talk on HYPERTENSION and kidney on the behalf of hypertension society of India on 8th August, 2016.' },
  { id: 7, title: 'Talk on Prevention of CKD. World Kidney Day – Kidney & Women’ Health, VMMC & Safdarjung Hospital, New Delhi on 8th March, 2018.', year: 2018 },
  { id: 8, title: 'Talk on Pregnancy in transplant patient. Symposium on kidney disease. AIIMS, New Delhi on 8th March, 2018.', year: 2018 },
  { id: 9, title: 'Poster presentation: Outcome of primary focal segmental glomerular sclerosis (FSGS) after renal transplantation in adult, 48th Annual conference of Indian society of Nephrology, New Delhi on 16 Dec, 2017.', year: 2017 },
  { id: 10, title: 'Talk on Prevention of CKD, World Kidney Day – 2019 at VMMC & Safdarjung Hospital, New Delhi on 14 March, 2019.', year: 2019 },
  { id: 11, title: 'Talk on Principles of handling psychiatric comorbidities in non-communicable diseases, Principles of handling at AIIMS, New Delhi on 9th April, 2018.', year: 2018 },
  { id: 12, title: 'Talk on psychiatric comorbidities in Nephrology at AIIMS, New Delhi on 9th April.' },
  { id: 13, title: 'Talk on Recent Update on Nephrology, New Generation Calcium channel Blockers (CCB) at Kathmandu, Nepal on 25-27 May, 2018.', year: 2018 },
  { id: 14, title: 'Talk on Tropical nephrology – an overview, CHETMEDICON 2018 at Chennai on 18 August, 2018.', year: 2018 },
  { id: 15, title: 'Hemodialysis Machine & safety Alarms, National Seminar on Kidney Disease at Lucknow on 11th Nov, 2018', year: 2018 },
];

const certifications = [
  { id: 1, title: 'Good Clinical Practice Certified', year: 2021 },
  { id: 2, title: 'IATA and Dangerous Goods Handling Certified', year: 2020 },
  { id: 3, title: 'RAVE EDC Data Capture Tools', year: 2020 },
];

const Articles = () => {
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
  const navigate = useNavigate();

  const handleNavigation = (type, id) => {
    navigate(`/${type}/${id}`);
  };

  const renderList = (items, type) => (
    <ul className="space-y-4">
      {items.map((item) => (
        <li
          key={item.id}
          className="p-4 border border-gray-300 rounded-lg shadow-sm transition-all duration-300 cursor-pointer hover:border-l-4 hover:border-[#00CC99] hover:pl-6"
          onClick={() => handleNavigation(type, item.id)}
        >
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="text-gray-500">Year: {item.year}</p>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="min-h-screen bg-gray-50 px-6 md:px-20 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Publications & Certifications</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Publications</h2>
          {renderList(publications, 'publication')}
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Presentations</h2>
          {renderList(presentations, 'presentation')}
        </section>

        <div className="border-t-4 border-[#00CC99] w-48 mx-auto my-10 rounded-full"></div>

        {/* <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Certifications</h2>
          {renderList(certifications, 'certification')}
        </section> */}
      </div>
    </div>
  );
};

export default Articles;

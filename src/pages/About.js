import React, { useEffect, useState } from "react";
import profileImg from "../assests/Profile.png";
import { FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa";
import { conferences, presentations } from "./Conference";

// Data
const honorsAwards = [
  { title: "Certificate of Participation in CME on Renal Diseases", year: "March 2016, New Delhi" },
  { title: "Certificate DNS ANNUAL UPDATE 2024 held at Jawaharlal Nehru Auditorium, AIIMS, New Delhi", year: "7th April 2024" },
  { title: "Proudly Confer the Scroll of Honour in Training workshop on Certificate Course in Chronic Kidney Disease (CCCKD) for Medical Officers held in", year: "01st – 02nd August 2024, Bhopal, Madhya Pradesh" },
  { title: "Proudly Confer the Scroll of Honour in Training workshop on Certificate Course in Chronic Kidney Disease (CCCKD) for Medical Officers held in", year: "30th -31st July 2024, Bhopal, Madhya Pradesh" },
  { title: "Certificate Course in Chronic Kidney Disease (CCCKD) for medical officers held on", year: "9th -10th July 2024, Bhopal, Madhya Pradesh" },
  { title: "Member of the National Academy of Medical Sciences (India)", year: "2024" },
  { title: "Awarded “Pattern of CYP3A5 and MDR-1 single nucleotide polymorphism and its impact on tacrolimus levels and clinical outcomes in living renal allograft recipient Istanbul, Turkey", year: "September, 22 to 25, 2024" },
  { title: "Certificate of Participation of Annual Conference of Delhi Nephrology Society held on", year: "April 2023" },
  { title: "Certificate 10th APCM-ISPD held at New Delhi", year: "September 2023" },
  { title: "Certificate of Achievement has won BEST RESEARCHER AWARD in INSO awards", year: "April 2022" },
  { title: "Certificate of Appreciation of World Kidney Day", year: "March 2022" },
  { title: "In Appreciation of “Rotary Club of Delhi South” during RY", year: "2021-22" },
  { title: "ISN recognized interventional center", year: "2020" },
  { title: "RAVE EDC Data Capture Tools", year: "2020" },
  { title: "Certificate to Recognize “free Eye & Kidney Inspection and Testing Camp” held at SONEPAT Haryana", year: "April 2017" },
  { title: "Awarded “Fellow of the American Society of Nephrology” by 2017 ASN Council", year: "25th May, 2017" },
  { title: "“Certificate of Participation” in World Kidney Day held at New Delhi", year: "March 2017" },
  { title: "Invited as National faculty in 48th Annual conference of Indian Society of Nephrology held at New Delhi", year: "14-17th Dec, 2017" },
  { title: "Admitted as a life member to Indian Society of Nephrology – Northern Zone", year: "14th Dec, 2017" },
  { title: "Certificate of Appreciation for participation in the CME medicine update at Bhiwani", year: "1st May 2011" },
  { title: "Certificate of Participation in API Haryana Chapter cardiology meet", year: "2014" },
  { title: "“Certificate of Excellence” for the Research Presentation on “Ambulatory blood pressure and Clinic based blood pressure measurement in living kidney donors before and after nephrectomy- A short term follow up study” 18th Annual conference of North Zone ISN and Delhi Nephrology Society, Greater Noida, NCR", year: "March, 2014" },
  { title: "“1st prize” in Poster presentation at 9th Annual conference of Indian academy of Nephrology, Indore", year: "2014" },
  { title: "“Certificate of Excellence” for Research paper presentation at North Zone Indian Society of Nephrology conference, Greater Noida", year: "2014" },
  { title: "Certificate to participation in the 2nd Regional CME November", year: "2012" },
  { title: "Certificate of Participation in Diabetes Summit", year: "2010" },
  { title: "Certificate of Pharmacovigilance: A Primer held in LGIMS Rohtak on March", year: "2010" },
  { title: "“Best Published Article Awards-2009” In Journal International Medical Science Academy", year: "2009" },
  { title: "Nitya Nand, D. Kumar, M. Sharma, R.K. Yadav. Oxidative stress in patient with different histopathological types of idiopathic glomerulonephritis. JIMSA 2009; 22(4):197-199.", year: "2009" },
  { title: "Started CAPD Program at Pt. BDS Post Graduate Institute of Medical Sciences, Rohtak", year: "2014" },
  { title: "Started External Jugular tunneled catheter placement in AIIMS, New Delhi" },
  { title: "Reviewer of national and International medical Journals - Renal Failure, Indian Journal of Dermatology, Venereology and Leprology, Indian Journal of Urology and International General of Medical & Clinical Research" },
  { title: "Member of organization team - AIIMS- Brigham Nephrology conference in AIIMS, New Delhi in 2012 & 2013" },
  { title: "Team member of many CME organized at Pt. BDS PGIMS, Rohtak" },
  { title: "Member of organization team - AIIMS Nephrology conclave, AIIMS, New Delhi in 2015" },
  { title: "Member Organizing Committee of the “World Kidney Day -2016” held on 9th -11th March, 2016 organized jointly by Department of Nephrology and Pediatrics, AIIMS and Department of Nephrology, PGIMER-RML hospital, New Delhi" },
  { title: "Member of organization team - Transplant conclave, AIIMS, New Delhi in 2016" },
  { title: "Shri Loknath Saraf Memorial Award, Rajasthan Ratnakar (A Leading Social Organization of Delhi)" }
];

const defaultExperience = [
  "Associate Professor (2019-till date), Department of Nephrology, AIIMS, New Delhi",
  "Assistant Professor (2015-2019): Department of Nephrology, AIIMS, New Delhi",
  "Recognized DM Nephrology teacher in Department of Nephrology, AIIMS, New Delhi 03-10-2015 till date.",
  "MCI, India, recognized post graduate teacher in Department of Medicine, Pt. BDS, PGIMS, Rohtak – 2014-2015",
  "Formerly Associate Professor (2012–2015): Department of Medicine, Pt. BDS, PGIMS, Rohtak",
  "Guided in formulating and drafting MD research thesis protocols – 2008 to 2015",
  "Formerly Assistant Professor (2008-2012): Department of Medicine, Pt. BDS PGIMS, Rohtak",
  "Formerly Senior resident (2005-2008): Department of Medicine, Pt. BDS PGIMS, Rohtak",
  "Formerly - member PG board of studies, Department of Medicine, Pt. BDS PGIMS, Rohtak"
];

const additionalExperience = {
  "Post Graduate Thesis:": [
    "Ambulatory blood pressure and clinic-based blood pressure measurement in living kidney donors before and after nephrectomy- A short term follow-up study - Dissertation for DM Nephrology",
    "Glucose Tolerance in Non - Diabetic Patients with Acute Myocardial Infarction – A Short Term Follow -up Study Thesis for MD General Medicine"
  ],
  "Organizational skills and social work": [
    "Organized multiple health awareness medical camps in Haryana state",
    "Actively participated in many Radio & Door darshan medical awareness talk shows",
    "Actively participated in Pulse Polio control Program during MBBS course",
    "Received more than 50 appreciation letters from different education society",
    "Member of organization team - AIIMS- Brigham Nephrology conference in AIIMS, New Delhi in 2012 & 2013",
    "Team member of many CME organized at Pt. BDS PGIMS, Rohtak",
    "Member of organization team - AIIMS Nephrology conclave, AIIMS, New Delhi in 2015",
    "Member Organizing Committee of the “World Kidney Day -2016” held on 9th -11th March, 2016 organized jointly by Department of Nephrology and Pediatrics, AIIMS and Department of Nephrology, PGIMER-RML hospital, New Delhi",
    "Member of organization team - Transplant conclave, AIIMS, New Delhi in 2016"
  ],
  "Affiliations and Memberships": [
    "Member of VDGOOD Professional Association and Awarded this Jan 2022.",
    "Full member International Society of Nephrology (No. 246692)",
    "Life Member of Indian Society of Nephrology (LM – 1282)",
    "Life Member of Indian Society of organ transplantation (LM – 945)",
    "Life Member of Association of Physician of India (No. L14194)",
    "Life Member of Indian Academy of Clinical Medicine (No. L430)",
    "Member of Indian academy of Nephrology",
    "Member of Indian Society of Nephrology, North Zone",
    "Member of Delhi Nephrology Society",
    "Member of Association of Physician of India, Haryana chapter",
    "Member of Bio info Publication"
  ],
};

const recentPublications = [
  "Kumar S, Raman S, Sesham K, Gupta A, Yadav RK, Mridha AR, Yadav SC. Visual, rapid, and cost-effective BK virus detection system for renal transplanted patients using gold nanoparticle coupled loop-mediated isothermal amplification (nanoLAMP). J Virol Methods. 2024 Apr;325:114889. doi: 10.1016/j.jviromet.2024.114889. Epub 2024 Jan 28. PMID: 38290650.",
  "Sangha SS, Yadav S, Yadav RK, Kumar A, Seenu V, Agarwal SK, Kabra M, Chowdhury MR, Vishwakarma VK and Bhowmik D. Pattern of CYP3A5 and MDR-1, single-nucleotide polymorphism and its impact on Tacrolimus level and clinical outcomes in living renal allograft recipient: RPS Pharmacy and Pharmacology Reports, 2024, 3 rqae016 https://doi.org/10.1093/rpsppr/rqae016 Advance access publication 6 June 2024",
  "Yadav RK, Sukhwinder Singh Sangha, Sushma Yadav, Preeti Sharma, Harsh Shah, Dipankar Bhowmik Accepted in Jati : 16 July 2024 “A Clinical Study to Evaluate the anti-inflammatory effect of Ferronemia (Tablactoferrin plus disodium guanosine monophosphate) therapy in the Patients with Chronic Kidney Disease” (Jr.No: 2023-700).doa:06.08.24",
  "Pahuja T, Sangha SS, Sarkar A, Yadav RK. Factor V Leiden Heterozygous Mutation and Hyperthomocysteinemia Presnting with Vascular Rejection and Renal Allograft Infarction. Indian J Nephrol. Doi:10.25259/IJN¬_330_2024",
  // 2023
  "Vishwakarma VK, Shah S, Kaur T, Singh AP, Arava SK, Kumar N, Yadav RK, Yadav S, Arora T, Yadav HN. Effect of vinpocetine alone and in combination with enalapril in experimental model of diabetic cardiomyopathy in rats: possible involvement of PDE-1/TGF-β/ Smad 2/3 signalling pathways. J Pharm Pharmacol. 2023 Sep 1;75(9):1198-1211. doi: 10.1093/jpp/rgad043. PMID: 37229596.",
  // 2022
  "Bagchi S, Upadhyay AD, Barwad A, Singh G, Subbiah AK, Yadav RK, Mahajan S, Bhowmik D, Kumar Agarwal S, The International IgA nephropathy network (IIgANN) prediction tool underestimates disease progression in Indian patients, Kidney International Reports (2022), doi: https://doi.org/10.1016/j.ekir.2022.03.016.",
  "George K, Upadhyay AD, Subbiah AK, Yadav RK, Mahajan S, Bhowmik D, Agarwal SK, Bagchi S. Metabolic acidosis in the initial 6 months after renal transplantation: A prospective study. Nephrology (Carlton). 2022 Jan;27(1):90-96. doi: 10.1111/nep.13954. Epub 2021 Aug 2. PMID: 34302717.",
  "Yadav S, Chauhan M, Jain D, Aggarwal HK, Yadav RK: Renal Outcomes of Pregnancy-Related Acute Kidney Injury: a Single Centre Experience in India. MAEDICA – A Journal of Clinical Medicine 2022; 17(1): 88-95 https://doi.org/10.26574/maedica.2022.17.1.88",
  "Devagourou A, Sharma KK, Yadav RK, Gupta VP, Kalaivani M. An Experimental Study to Evaluate the Effect of Low-Intensity Intradialytic Exercises on Serum Urea, Creatinine, and Fatigue of Chronic Kidney Disease Patients Undergoing Hemodialysis. Saudi J Kidney Dis Transpl 2021;32(5):1253-1259.",
  "Shadab, S., Mittal, P., Barwad, A. Singh G, Subbiah AK, Yadav RK et al. Characterizing predictors of non-diabetic kidney disease (NDKD) in diabetic patients. Int Urol Nephrol 54, 1303–1309 (2022). https://doi.org/10.1007/s11255-021-02998-1.",
];

const contactInfo = {
  address: "Sri Aurobindo Marg, Ansari Nagar, New Delhi, India, 110029",
  phone: "+91-1126588500",
  fax: "+91-1126588631",
  email: "rkyadavnephrology@gmail.com",
};

const researchInterests = [
  "Chronic Renal Failure",
  "Acute Kidney Injury",
  "Hypertension",
  "Kidney Transplantation",
];

const specialty = "Nephrology";

const socialLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/raj-kanwar-yadav-01910387/", icon: <FaLinkedin className="text-2xl" /> },
  { name: "Facebook", url: "https://www.facebook.com/rajkanwar.yadav/", icon: <FaFacebook className="text-2xl" /> },
];

// Section rendering helper
const Section = ({ title, children }) => (
  <div className="mb-6 relative">
    <div className="absolute w-3.5 h-3.5 bg-gray-300 rounded-full left-[-25px] top-2"></div>
    <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
    {children}
  </div>
);

// 1. Add a helper to extract year and sort publications
function extractYear(pub) {
  const match = pub.match(/(19|20)\d{2}/g);
  if (match) {
    // Return the last year found (in case of ranges)
    return parseInt(match[match.length - 1], 10);
  }
  return 0;
}

const getRecentByYear = (arr, n = 5) =>
  [...arr]
    .sort((a, b) => extractYear(b) - extractYear(a))
    .slice(0, n);

const sortedRecentPublications = [...recentPublications]
  .sort((a, b) => extractYear(b) - extractYear(a))
  .slice(0, 10);

const About = () => {
  const [visibleHonors, setVisibleHonors] = useState(10);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-2 sm:px-4 md:px-8 py-6 flex flex-col items-center">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-[400px,1fr] gap-8">
        {/* Left Column */}
        <div className="flex flex-col gap-6 items-center md:items-start md:sticky md:top-20 md:self-start h-fit pr-4">
          {/* Profile Image */}
          <img
            src={profileImg}
            alt="Dr. Raj Kanwar Yadav"
            className="w-32 h-32 sm:w-24 sm:h-24 md:w-48 md:h-48 object-cover rounded-full shadow-lg border-4 border-gray-300 mb-2 mx-auto bg-white"
          />
          {/* Contact Info */}
          <section className="bg-white rounded-xl shadow p-4 w-full">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Contact Information</h3>
            <p className="text-gray-600 text-sm whitespace-pre-line">
              Room no 4088, Teaching Block,
              Department of Nephrology
              AIIMS, New Delhi – 110029
            </p>
            <ul className="flex pt-3 gap-3">
              {socialLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-700 text-sm flex items-center gap-1 hover:text-black">
                    {link.icon}
                    <span className="sr-only">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
          {/* Research Interests */}
          <section className="bg-white rounded-xl shadow p-4 w-full">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Clinical/Research Interests</h3>
            <ul className="list-disc pl-5 text-gray-700 text-sm">
              {researchInterests.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>
          {/* Specialty */}
          <section className="bg-white rounded-xl shadow p-4 w-full">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Specialty</h3>
            <p className="text-gray-700 text-sm">{specialty}</p>
          </section>
          {/* Social Links */}
          <section className="bg-white rounded-xl shadow p-4 w-full">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Social media presentation/Interviews</h3>
            <a
              href="https://www.youtube.com/watch?v=P46IHWnac8c"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-black hover:text-gray-700 font-semibold text-md"
            >
              <FaYoutube className="text-2xl" />
              Post Vaccination : Care and Misconception Part-1
            </a>
            <a
              href="https://www.youtube.com/watch?v=-1h6bbxvWyM"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-black hover:text-gray-700 font-semibold text-md mt-2"
            >
              <FaYoutube className="text-2xl" />
              Armaanon ki Udaan
            </a>
            <a
              href="https://www.youtube.com/watch?v=93kjWZKpkb0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-black hover:text-gray-700 font-semibold text-md mt-2"
            >
              <FaYoutube className="text-2xl" />
              Dr R K Yadav - Nephrologist
            </a>
          </section>
        </div>
        {/* Right Column */}
        <div className="flex flex-col gap-10 min-w-0 pl-4 w-full flex-1">
          {/* Doctor Info */}
          <section>
            <div className="w-full relative border-l-2 border-gray-300 pl-10">
              {/* Header */}
              <div className="mb-8 relative">
                <div className="absolute w-3.5 h-3.5 bg-gray-300 rounded-full left-[-25px] top-2"></div>
                <h1 className="text-3xl font-bold text-gray-800">Dr. Raj Kanwar Yadav</h1>
                <p className="text-gray-500 text-lg">M.B.B.S, M.D. (Medicine), D.M. (Nephrology)</p>
                <p className="text-gray-500 text-lg">Department of Nephrology, AIIMS- New Delhi</p>
              </div>
              {/* Bio-Sketch */}
              <div className="mb-10 relative">
                <div className="absolute w-3.5 h-3.5 bg-gray-300 rounded-full left-[-25px] top-2"></div>
                <h2 className="text-2xl font-semibold mb-2">Bio-Sketch</h2>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li className="text-gray-600 leading-relaxed">
                    Dr. Raj Kanwar Yadav is a distinguished nephrologist and academician with over two decades of experience in internal medicine and nephrology. He completed his MBBS from Jawaharlal Nehru Medical College, Ajmer, followed by an MD in General Medicine from PGIMS, Rohtak, and a DM in Nephrology from the prestigious AIIMS, New Delhi. </li>
                  <li className="text-gray-600 leading-relaxed">
                    Currently serving as an Associate Professor in the Department of Nephrology at AIIMS, New Delhi, Dr. Yadav has held numerous academic positions, including faculty roles at PGIMS, Rohtak. He is a recognized postgraduate and DM Nephrology teacher, actively involved in mentoring, thesis supervision, and bedside teaching.</li>

                  <li className="text-gray-600 leading-relaxed">

                    A prolific researcher and speaker, Dr. Yadav has attended and presented at numerous national and international conferences. He has over 70 peer-reviewed publications and has contributed to multiple medical textbooks, particularly in nephrology and transplant medicine. His clinical expertise spans across dialysis, renal transplantation, and interventional nephrology, having performed hundreds of catheterizations, biopsies, and transplant management procedures.
                  </li>
                  <li className="text-gray-600 leading-relaxed">
                    He is a Fellow of the American Society of Nephrology and holds memberships in several prominent societies including the Indian Society of Nephrology and the International Society of Nephrology. Dr. Yadav has also played a vital role in organizing nephrology conclaves, CMEs, and health camps.  </li>
                  <li className="text-gray-600 leading-relaxed">

                    Renowned for his compassionate patient care, academic commitment, and clinical acumen, Dr. Yadav continues to make significant contributions to kidney health, education, and research in India and beyond.
                  </li>

                </ul>
              </div>
              {/* Education */}
              <div className="mb-10 relative">
                <div className="absolute w-3.5 h-3.5 bg-gray-300 rounded-full left-[-25px] top-2"></div>
                <h2 className="text-2xl font-semibold mb-4">Education</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold">DM (Nephrology)</h3>
                    <p className="text-gray-600">AIIMS, New Delhi</p>
                    <p className="text-gray-600">2011-2014</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">M.D.(Gen. Med)</h3>
                    <p className="text-gray-600">Pt. B.D. Sharma, PGIMS, Rohtak</p>
                    <p className="text-gray-600">Maharishi Dayanand University, Rohtak</p>
                    <p className="text-gray-600">2002-2005</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">M.B.B.S.</h3>
                    <p className="text-gray-600">Jawaharlal Nehru Medical College, Ajmer</p>
                    <p className="text-gray-600">University of Rajasthan, Jaipur</p>
                    <p className="text-gray-600">1995-2001</p>
                  </div>



                </div>
              </div>
            </div>
          </section>
          {/* Work Experience Section */}
          <section>
            <div className="w-full relative border-l-2 border-gray-300 pl-10">
              <Section title="Teaching Experience">
                <ul className="list-disc pl-5 text-gray-700 text-[16px] space-y-2 mb-8">
                  {defaultExperience.map((item, index) => (
                    <li key={index} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
              </Section>
              <Section title="Affiliations and Membership">
                <ul className="list-disc pl-5 text-gray-700 text-[16px] space-y-2 mb-8">
                  {(additionalExperience["Affiliations and Memberships"] || []).map((item, index) => (
                    <li key={index} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
              </Section>
              <Section title="PG Thesis">
                <ul className="list-disc pl-5 text-gray-700 text-[16px] space-y-2 mb-8">
                  {(additionalExperience["Post Graduate Thesis:"] || []).map((item, index) => (
                    <li key={index} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
              </Section>
              <Section title="Organizational Skills & Social Work">
                <ul className="list-disc pl-5 text-gray-700 text-[16px] space-y-2 mb-8">
                  {(additionalExperience["Organizational skills and social work"] || []).map((item, index) => (
                    <li key={index} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
              </Section>
              <Section title="Recent Clinical Trials">
                <ul className="list-disc pl-5 text-gray-700 text-[16px] space-y-2 mb-8">
                  <li className="text-gray-600 leading-relaxed">
                    As Open-label, Randomized, Parallel-group, Two Arm Clinical Study to Evaluate the anti-inflammatory effect of ferronemia (lactoferrin + disodium guanosine monophosphate) tablet + Conservative Chronic Kidney Disease Management Therapy versus Conservative Chronic Kidney Disease Management Therapy in the Subjects with Chronic Kidney Disease.<br />
                    <b>Principal Investigator</b>, Jul 2022 - Mar 2023, Trial ID: CTRI/2022/07/044200
                  </li>
                  <li className="text-gray-600 leading-relaxed">
                    Pattern of CYP3A5 and MDR-1 single nucleotide polymorphism and its Impact on Individualization of Tacrolimus based Immunosuppression in Living Renal Allograft recipient.<br />
                    <b>Principal Investigator</b>, Mar 2017 - Mar 2017, Trial ID: CTRI/2017/03/007997
                  </li>
                </ul>
              </Section>
              <Section title="Recent Conferences">
                <ul className="list-disc pl-5 text-gray-700 text-[16px] space-y-2 mb-8">
                  {getRecentByYear(conferences).map((conf, idx) => (
                    <li key={idx} className="leading-relaxed">{conf}</li>
                  ))}
                </ul>
                <button
                  onClick={() => window.location.href = '/conference'}
                  className="mt-2 px-4 py-2 bg-gray-200 text-gray-800 rounded shadow hover:bg-gray-300 transition"
                >
                  All Conferences
                </button>
              </Section>
              <Section title="Recent Presentations">
                <ul className="list-disc pl-5 text-gray-700 text-[16px] space-y-2 mb-8">
                  {getRecentByYear(presentations).map((pres, idx) => (
                    <li key={idx} className="leading-relaxed">{pres}</li>
                  ))}
                </ul>
                <button
                  onClick={() => window.location.href = '/conference'}
                  className="mt-2 px-4 py-2 bg-gray-200 text-gray-800 rounded shadow hover:bg-gray-300 transition"
                >
                  All Presentations
                </button>
              </Section>
              <Section title="Recent Publications">
                <ul className="list-disc pl-5 text-gray-700 text-[16px] space-y-2 mb-8">
                  {sortedRecentPublications.map((item, index) => (
                    <li key={index} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
                <button
                  onClick={() => window.location.href = '/all-publications'}
                  className="mt-2 px-4 py-2 bg-gray-200 text-gray-800 rounded shadow hover:bg-gray-300 transition"
                >
                  All Publications
                </button>
              </Section>
            </div>
          </section>
          {/* Honors, Awards, Publications, Clinical Trials */}
          <section>
            <div className="w-full relative border-l-2 border-gray-300 pl-10">
              <div className="mb-10 relative">
                <div className="absolute w-3.5 h-3.5 bg-gray-300 rounded-full left-[-25px] top-2"></div>
                <h2 className="text-2xl font-semibold mb-4">Honors, Awards and achievements</h2>
                <div className="space-y-6">
                  {honorsAwards.slice(0, visibleHonors).map((item, idx) => (
                    <div key={idx}>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      {item.year && <p className="text-gray-600">{item.year}</p>}
                    </div>
                  ))}
                  {visibleHonors < honorsAwards.length && (
                    <button
                      onClick={() => setVisibleHonors((prev) => prev + 10)}
                      className="mt-4 px-4 py-2 bg-gray-200 text-gray-800 rounded shadow hover:bg-gray-300 transition"
                    >
                      Show More
                    </button>
                  )}
                </div>
              </div>
              <button
                onClick={() => window.location.href = '/all-honors'}
                className="mt-4 ml-4 px-4 py-2 bg-gray-200 text-gray-800 rounded shadow hover:bg-gray-300 transition"
              >
                All Honors, Awards and Achievements
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;

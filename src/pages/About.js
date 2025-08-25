import React, { useEffect, useState, useRef, forwardRef } from "react";
import profileImg from "../assests/Yadav.jpg";
import { FaLinkedin, FaFacebook, FaYoutube, FaArrowUp } from "react-icons/fa";
import { conferences, presentations } from "./Conference";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import Location from "../assests/location.png"
gsap.registerPlugin(ScrollTrigger);

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
const ChapterinBook = [
  "S K Agarwal & Dr. R K Yadav. ABO blood group and antigen:  An overview.  Chapter 1, Page no. 1–6, ABO –incompatible Kidney transplantation, ECAB clinical update nephrology (Elsevier Publication), 2016.",
  "Rizvi Y, Yadav RK, Agarwal SK. Approach to Edema, page No.12-14, Edema in renal disease, Nephrology for Physicians, (Tree Life Media) 2017.",
  "R K Yadav, Mohita Agarwal, N M Philip, S Yadav. Renal and urinary tract disorders in pregnancy. Chapter 11, Page no 104-11, Common medical disorders in pregnancy (AOGS Publisher) Jan, 2020.",
  "RK Yadav, KK Ariga, S Yadav: A renal transplant recipient with current urinary tract infections and graft dysfunction. Pee Pee 2021:237-40 (in press).",
  "R K Yadav, S Sundaray S Yadav. Aging and kidney diseases. India Point of Care (Elsevier) (Manuscript no: IPOC -D-21-00443R1) (Digital)(Accepted).",
  "Yadav RK, Maity Indradip, Yadav Sushma: Point-of-Care Ultrasound for the Nephrologist. Practical Guide to Point-of-Care Ultrasound A Simplified Approach, JP Brother Medical Publisher First Edition, 2023, 151-160.",
  "Sudeep Prakash, Aruna Acharya, RK Yadav: Adequacy of Dialysis, Chapter 31, Page No.136, Introduction, Measures of Dialysis Adequacy, Urea Reduction Ratio (URR) and KT/V, (Jaypee Brothers Medical Publishers (P) Ltd.), 2024.",
  "Corresponding author"
];
const PersonalStatement = [
  "Tended to remain actively involved in academic, research and healthcare activities after joining as a teacher in AIIMS, New Delhi and Pt. B.D.S. PGIMS, Rohtak, including under graduate teaching i.e., MBBS, BDS, BSC nursing and post graduate teaching i.e., MD and DM. Supervision of post graduate students (MD and DM) for journal club, seminar, case presentation and group discussion. Always took keen interest in bed side teaching and guiding in dissertation work, article publication of post graduate students. Apart from it, organized multiple nephrology conferences in AIIMS, New Delhi as a team member. ",
  "Finally for patients, it is my endeavor to deliver a reliable, responsible, transparent and ethical care to them who have entrusted their well-being in my hands."
]
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
  "Kidney Transplantation"
];

const specialty = "Nephrology";

const socialLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/raj-kanwar-yadav-01910387/", icon: <FaLinkedin className="text-2xl" /> },
  { name: "Facebook", url: "https://www.facebook.com/rajkanwar.yadav/", icon: <FaFacebook className="text-2xl" /> },
];

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

const nephrologyTrainingIntro = `I trained in Department of Nephrology at All India Institute Medical Sciences, New Delhi, a 2500 bedded super-specialty hospital, catering to the whole Nation and adjoining neighboring countries like Pakistan, Nepal, Afghanistan and Bangladesh, is truly one of its kind in the Asia.\nTraining at AIIMS has provided me with an unmatched clinical exposure in all aspects of nephrology. The tremendous patient load has rendered me competent and confident in dealing with all kinds of patients. Some aspects of my clinical experience are summarized here:`;

// Section rendering helper
export const Section = forwardRef(({ title, children }, ref) => (
  <div ref={ref} className="mb-5 relative">
    <div className="absolute left-[-18px] top-1 h-full flex flex-col items-center">
      {/* symbol */}
      <span className="px-1 text-2xl text-gray-500">✦</span>

      {/* line */}
      <span className="w-[2px] flex-1 bg-gray-400 mt-1"></span>
    </div>

    <h2 className="text-2xl ml-[10px] pt-[5px] font-semibold mb-2">{title}</h2>
    {children}
  </div>
));

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

const About = () => {
  const [visibleHonors, setVisibleHonors] = useState(10);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const trainingSectionRef = useRef(null);
  const trainingButtonRef = useRef(null);
  const sectionRefs = useRef([]);
  sectionRefs.current = [];
  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };
  const navigate = useNavigate();

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Animate each section on scroll
    sectionRefs.current.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
    if (trainingSectionRef.current) {
      gsap.from(trainingSectionRef.current, { opacity: 0, y: 40, duration: 1 });
    }
    if (trainingButtonRef.current) {
      gsap.from(trainingButtonRef.current, { opacity: 0, scale: 0.8, duration: 0.8, delay: 0.5 });
    }

    // Cleanup scroll event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen px-2 sm:px-4 md:px-8 py-6 flex justify-center">
      <div className="w-full max-w-[1500px]"> {/* prevent stretching too wide */}

        {/* Left Column (Fixed) */}
        <div
          className="flex flex-col items-start  md:ml-[50px]
  md:fixed md:top-16 md:left-0 
  md:w-[440px] 
  min-h-[calc(100vh-4rem)] 
  p-10 bg-gray-300 
  text-left border-r pt-[30px] rounded-lg 
  shadow-md"
        >

          {/* Profile Image */}
          <img
            src={profileImg}
            alt="Dr. Raj Kanwar Yadav"
            className="w-[185px] h-[185px] object-cover rounded-full shadow-md border-2 border-gray-400 mt-[-20px] self-center"
          />

          {/* Name + Designation */}
          <h2 className="text-sm sm:text-base md:text-[22px] font-bold text-gray-900 leading-tight text-center w-full">
            Dr. Raj Kanwar Yadav
          </h2>
          <p className="text-xs sm:text-sm md:text-[13px] text-gray-600 font-medium mb-2 text-center w-full leading-snug">
            M.B.B.S, M.D. (Medicine), D.M. (Nephrology)<br />
            Associate Professor, Department of Nephrology, <br /> AIIMS – New Delhi
          </p>

          {/* Divider */}
          <div className="flex items-center w-full my-2 mt-[-5px]">
            <hr className="flex-grow border-t border-gray-400" />
            <span className="px-2 text-gray-500 text-[10px] sm:text-xs">✦</span>
            <hr className="flex-grow border-t border-gray-400" />
          </div>

          {/* Contact Info */}
          <section className="w-full   text-xs sm:text-sm space-y-1 mb-3 text-gray-700">
            <div className="flex items-start gap-1">
              <img className="w-[17px] h-[17px] " src={Location}></img>

              <span>
                Room no 4088, Teaching Block,<br />
                Department of Nephrology,<br />
                AIIMS, New Delhi – 110029
              </span>
            </div>

            <ul className="flex gap-2 pl-5">
              {socialLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text- text-sm"
                  >
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* Divider */}
          <div className="flex items-center w-full  my-2 mt-[-5px]">
            <hr className="flex-grow border-t border-gray-400" />
            <span className="px-2 text-gray-500 text-[10px] sm:text-xs">✦</span>
            <hr className="flex-grow border-t border-gray-400" />
          </div>


          <section className="w-full text-xs sm:text-sm mb-1">
            <h3 className="font-bold text-gray-800 mb-2">Clinical/Research Interests</h3>
            <ul className="grid grid-cols-2 gap-y-1 gap-x-4">
              {researchInterests.map((item, idx) => (
                <li key={idx} className="flex items-center gap-1">
                  <span className="text-gray-600">★</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Divider */}
          <div className="flex items-center w-full  my-2 mt-[-5px]">
            <hr className="flex-grow border-t border-gray-400" />
            <span className="px-2 text-gray-500 text-[10px] sm:text-xs">✦</span>
            <hr className="flex-grow border-t border-gray-400" />
          </div>

          {/* Specialty */}
          <section className="w-full text-xs sm:text-sm mb-1">
            <h3 className="font-bold text-gray-800 mb-2">Specialty</h3>
            <p className="text-gray-700 mt-[-8px]">{specialty}</p>
          </section>

          {/* Divider */}
          <div className="flex items-center w-full mt-[-5px] ">
            <hr className="flex-grow border-t border-gray-400" />
            <span className="px-2 text-gray-500 text-[10px] sm:text-xs">✦</span>
            <hr className="flex-grow border-t border-gray-400" />
          </div>

          {/* Social Media Links */}
          {/* Social Media Links */}
<section className="w-full text-xs sm:text-sm">
  <h3 className="font-bold text-gray-800 mb-2">
    Social Media Presentations / Interviews
  </h3>
  <ul className="space-y-2">
    {/* First Item - Full Width */}
    <li>
      <a
        href="https://www.youtube.com/watch?v=P46IHWnac8c"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-blue-600 hover:underline text-[15px] sm:text-[12px]"
      >
        <FaYoutube className="text-red-600 text-sm" />
        Care and Misconception Part-1
      </a>
    </li>

    {/* 2nd line with 2 items side by side */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      <li>
        <a
          href="https://www.youtube.com/watch?v=-1h6bbxvWyM"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-600 hover:underline text-[15px] sm:text-[12px]"
        >
          <FaYoutube className="text-red-600 text-sm" />
          Armaanon ki Udaan
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/watch?v=93kjWZKpkb0"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-600 hover:underline text-[15px] sm:text-[12px]"
        >
          <FaYoutube className="text-red-600 text-sm" />
          Dr R K Yadav - Nephrologist
        </a>
      </li>
    </div>
  </ul>
</section>




        </div>

        {/* Right Column (Scrolls) */}
        <div
          className="flex flex-col gap-8 
  md:ml-[470px]">   {/* 400px left + 50px gap */}

          <section>
            <div className="w-full  relative  pl-10">


              {/* Bio-Sketch */}
              <div className="mb-6 relative">
                <div className="absolute left-[-18px] top-1 h-full flex flex-col items-center">
                  {/* symbol */}
                  <span className="px-1 text-2xl  text-gray-500">✦</span>

                  {/* line */}
                  <span className="w-[2px] flex-1 bg-gray-400 mt-1"></span>
                </div>

                <h2 className="text-2xl ml-[10px] pt-[5px] font-semibold mb-2">Bio-Sketch</h2>
                <ul className="pl-6 mt-4 space-y-2">
                  <li className="text-gray-600 leading-relaxed">
                    Dr. Raj Kanwar Yadav is a distinguished nephrologist and academician with
                    over two decades of experience in internal medicine and nephrology. He
                    completed his MBBS from Jawaharlal Nehru Medical College, Ajmer, followed
                    by an MD in General Medicine from PGIMS, Rohtak, and a DM in Nephrology
                    from the prestigious AIIMS, New Delhi.
                  </li>
                  <li className="text-gray-600 leading-relaxed">
                    Currently serving as an Associate Professor in the Department of
                    Nephrology at AIIMS, New Delhi, Dr. Yadav has held numerous academic
                    positions, including faculty roles at PGIMS, Rohtak. He is a recognized
                    postgraduate and DM Nephrology teacher, actively involved in mentoring,
                    thesis supervision, and bedside teaching.
                  </li>
                  <li className="text-gray-600 leading-relaxed">
                    A prolific researcher and speaker, Dr. Yadav has attended and presented at
                    numerous national and international conferences. He has over 70
                    peer-reviewed publications and has contributed to multiple medical
                    textbooks, particularly in nephrology and transplant medicine. His
                    clinical expertise spans across dialysis, renal transplantation, and
                    interventional nephrology, having performed hundreds of catheterizations,
                    biopsies, and transplant management procedures.
                  </li>
                  <li className="text-gray-600 leading-relaxed">
                    He is a Fellow of the American Society of Nephrology and holds memberships
                    in several prominent societies including the Indian Society of Nephrology
                    and the International Society of Nephrology. Dr. Yadav has also played a
                    vital role in organizing nephrology conclaves, CMEs, and health camps.
                  </li>
                  <li className="text-gray-600 leading-relaxed">
                    Renowned for his compassionate patient care, academic commitment, and
                    clinical acumen, Dr. Yadav continues to make significant contributions to
                    kidney health, education, and research in India and beyond.
                  </li>
                </ul>
              </div>




              {/* Education */}
              <div className=" relative">
                <div className="mb- absolute left-[-18px] top-1 h-full flex flex-col items-center">
                  {/* symbol */}
                  <span className="px-1 text-2xl text-gray-500">✦</span>

                  {/* line */}
                  <span className="w-[2px] flex-1 bg-gray-400 mt-1"></span>
                </div>

                <h2 className="text-2xl ml-[10px] pt-[5px] font-semibold mb-2">Education</h2>
                <div className="space-y-6 pl-5">
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
          <section className="">
            <div className="w-full  relative pl-10">
              <Section ref={addToRefs} title="Affiliations and Membership">
                <ul className="list-disc pl-5 text-gray-700 text-[16px] space-y-2 mb-8 break-words w-full">
                  {(additionalExperience["Affiliations and Memberships"] || []).map((item, index) => (
                    <li key={index} className="leading-relaxed break-words w-full">{item}</li>
                  ))}
                </ul>
              </Section>
              <Section ref={addToRefs} title="Teaching Experience">
                <ul className="list-disc pl-5 text-gray-700 text-[16px] space-y-2 mb-8 break-words w-full">
                  {defaultExperience.map((item, index) => (
                    <li key={index} className="leading-relaxed break-words w-full">{item}</li>
                  ))}
                </ul>
              </Section>
              <Section ref={addToRefs} title="Nephrology Training">
                <p className="text-gray-700 mb-4 whitespace-pre-line">
                  Dr. RK Yadav trained in Department of Nephrology at All India Institute Medical Sciences, New Delhi, a 2500 bedded super-specialty hospital, catering to the whole Nation and adjoining neighboring countries like Pakistan, Nepal, Afghanistan and Bangladesh, is truly one of its kind in the Asia.
                  Training at AIIMS has provided me with an unmatched clinical exposure in all aspects of nephrology. The tremendous patient load has rendered me competent and confident in dealing with all kinds of patients. Some aspects of my clinical experience are summarized here:
                </p>
                <ul className="list-disc pl-5">
                  {nephrologyTrainingPoints.slice(0, 5).map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
                <button
                  onClick={() => window.location.href = '/training'}
                  className="mt-2 px-4 py-2 bg-gray-200 text-gray-800 rounded shadow hover:bg-gray-300 transition w-full sm:w-auto">
                  All Training
                </button>
              </Section>
              <Section ref={addToRefs} title="PG Thesis">
                <ul className="list-disc pl-5 text-gray-700 text-[16px] space-y-2 mb-8 break-words w-full">
                  {(additionalExperience["Post Graduate Thesis:"] || []).map((item, index) => (
                    <li key={index} className="leading-relaxed break-words w-full">{item}</li>
                  ))}
                </ul>
              </Section>
              <Section ref={addToRefs} title="Organizational Skills & Social Work">
                <ul className="list-disc pl-5 text-gray-700 text-[16px] space-y-2 mb-8 break-words w-full">
                  {(additionalExperience["Organizational skills and social work"] || []).map((item, index) => (
                    <li key={index} className="leading-relaxed break-words w-full">{item}</li>
                  ))}
                </ul>
              </Section>

              <Section ref={addToRefs} title="Conferences">
                <ul className="list-disc pl-5 text-gray-700 text-[16px] space-y-2 mb-8 break-words w-full">
                  {getRecentByYear(conferences).map((conf, idx) => (
                    <li key={idx} className="leading-relaxed break-words w-full">{linkify(conf)}</li>
                  ))}
                </ul>
                <button
                  onClick={() => window.location.href = '/conference'}
                  className="mt-2 px-4 py-2 bg-gray-200 text-gray-800 rounded shadow hover:bg-gray-300 transition w-full sm:w-auto"
                >
                  All Conferences
                </button>
              </Section>
              <Section ref={addToRefs} title="Presentations">
                <ul className="list-disc pl-5 text-gray-700 text-[16px] space-y-2 mb-8 break-words w-full">
                  {getRecentByYear(presentations).map((pres, idx) => (
                    <li key={idx} className="leading-relaxed break-words w-full">{linkify(pres)}</li>
                  ))}
                </ul>
                <button
                  onClick={() => window.location.href = '/conference'}
                  className="mt-2 px-4 py-2 bg-gray-200 text-gray-800 rounded shadow hover:bg-gray-300 transition w-full sm:w-auto"
                >
                  All Presentations
                </button>
              </Section>


              <Section ref={addToRefs} title="Publications">
                <ul className="list-disc pl-5 text-gray-700 text-[16px] space-y-2 mb-8 break-words w-full">
                  {sortedRecentPublications.map((item, index) => (
                    <li key={index} className="leading-relaxed break-words w-full">{linkify(item)}</li>
                  ))}
                </ul>
                <button
                  onClick={() => window.location.href = '/publications'}
                  className="mt-2 px-4 py-2 bg-gray-200 text-gray-800 rounded shadow hover:bg-gray-300 transition w-full sm:w-auto"
                >
                  All Publications
                </button>
              </Section>
              <Section ref={addToRefs} title="Clinical Trials">
                <ul className="list-disc pl-5 text-gray-700 text-[16px] space-y-2 mb-8 break-words w-full">
                  <li className="text-gray-600 leading-relaxed">
                    As Open-label, Randomized, Parallel-group, Two Arm Clinical Study to Evaluate the anti-inflammatory effect of ferronemia (lactoferrin + disodium guanosine monophosphate) tablet + Conservative Chronic Kidney Disease Management Therapy versus Conservative Chronic Kidney Disease Management Therapy in the Subjects with Chronic Kidney Disease.<br />
                    <b>Principal Investigator</b>, Jul 2022 - Mar 2023, Trial ID:
                    <a href="https://ctri.nic.in/Clinicaltrials/pmaindet2.php?EncHid=NzE1MjE=&Enc=&userName=" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">CTRI/2022/07/044200</a>
                  </li>
                  <li className="text-gray-600 leading-relaxed">
                    Pattern of CYP3A5 and MDR-1 single nucleotide polymorphism and its Impact on Individualization of Tacrolimus based Immunosuppression in Living Renal Allograft recipient.<br />
                    <b>Principal Investigator</b>, Mar 2017 - Mar 2017, Trial ID:
                    <a href="https://ctri.nic.in/Clinicaltrials/pmaindet2.php?EncHid=MTYyNTc=&Enc=&userName=" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">CTRI/2017/03/007997</a>
                  </li>
                </ul>
              </Section>


            </div>
          </section>

          <section className="mt-[-30px]">
            <div className="w-full relative pl-10">
              <div className="mb-10 relative">
                <div className="absolute left-[-18px] top-1 h-full flex flex-col items-center">
                  {/* symbol */}
                  <span className="px-1 text-2xl text-gray-500">✦</span>

                  {/* line */}
                  <span className="w-[2px] flex-1 bg-gray-400 mt-1"></span>
                </div>

                {/* Heading */}
                <h2 className="text-2xl ml-[10px] pt-[5px] font-semibold mb-2">Abstracts</h2>

                {/* Table */}
                <div className="overflow-x-auto pl-5">
                  <table className="min-w-full border border-gray-300 text-sm">
                    <thead className="bg-gray-200">
                      <tr>
                        <th className="p-2 border">S. No.</th>
                        <th className="p-2 border">Authors</th>
                        <th className="p-2 border">Title/Abstract</th>
                        <th className="p-2 border">Conference</th>
                        <th className="p-2 border">Date</th>
                        <th className="p-2 border">Location</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 border">1</td>
                        <td className="p-2 border">MS Gupta, RK Yadav</td>
                        <td className="p-2 border">Glucose tolerance in non-diabetic patients with acute myocardial infarction- A short term follows up study</td>
                        <td className="p-2 border">56th Annual Conference of Cardiological Society of India</td>
                        <td className="p-2 border">2-5 December, 2004</td>
                        <td className="p-2 border">Karnataka, Bangalore</td>
                      </tr>
                      <tr>
                        <td className="p-2 border">2</td>
                        <td className="p-2 border">MS Gupta, Manish Singhal, Vijay Shanker, RK Yadav, A Kaushal</td>
                        <td className="p-2 border">Ezetimibe as an Adjunct to Atorvastatin in Patients of Dyslipidemia</td>
                        <td className="p-2 border">57th Annual Conference of Cardiological Society of India & 15th Asian Pacific Congress of Cardiology</td>
                        <td className="p-2 border">December 1-4, 2005</td>
                        <td className="p-2 border">Mumbai, India</td>
                      </tr>
                      <tr>
                        <td className="p-2 border">3</td>
                        <td className="p-2 border">Yadav RK, Agarwal SK, Bhowmik D, Mahajan S, Bagchi S</td>
                        <td className="p-2 border">Outcome of primary focal segmental glomerular sclerosis (FSGS)after renal transplantation in adult</td>
                        <td className="p-2 border">48th Annual conference of Indian society of Nephrology</td>
                        <td className="p-2 border">16 Dec, 2017</td>
                        <td className="p-2 border">New Delhi</td>
                      </tr>
                      <tr>
                        <td className="p-2 border">4</td>
                        <td className="p-2 border">Bagchi S, Singh G, Bhowmik D, Mahajan S, Yadav RK, Barwad A, Dinda A, Agarwal SK</td>
                        <td className="p-2 border">Borderline cellular rejection: Clinical co-relates and impact on graft outcome</td>
                        <td className="p-2 border">48th Annual conference of Indian society of Nephrology</td>
                        <td className="p-2 border">15 Dec, 2017</td>
                        <td className="p-2 border">New Delhi</td>
                      </tr>
                      <tr>
                        <td className="p-2 border">5</td>
                        <td className="p-2 border">Behera V, Bagchi S, Yadav RK, Mahajan S, Bhowmik D, Agarwal SK</td>
                        <td className="p-2 border">Rituximab treatment of adults patients with resistant primary focal segmental glomerulosclerosis</td>
                        <td className="p-2 border">48th Annual conference of Indian society of Nephrology</td>
                        <td className="p-2 border">16 Dec, 2017</td>
                        <td className="p-2 border">New Delhi</td>
                      </tr>
                      <tr>
                        <td className="p-2 border">6</td>
                        <td className="p-2 border">Mangalgi S, Bagchi S, Madan K, Das CJ, Singh G, Yadav RK, Xess I, Singh S, Agarwal SK</td>
                        <td className="p-2 border">Profile of pulmonary infections in renal transplant recipients in a tertiary care centre</td>
                        <td className="p-2 border">48th Annual conference of Indian society of Nephrology</td>
                        <td className="p-2 border">15 Dec, 2017</td>
                        <td className="p-2 border">New Delhi</td>
                      </tr>
                      <tr>
                        <td className="p-2 border">7</td>
                        <td className="p-2 border">Behera V, Yadav RK, Bhowmik D, Kapil A, Kumar A, Bagchi S, Mahajan S, Agarwal SK</td>
                        <td className="p-2 border">Prospective study of Clinical Profile, Outcomes and survival of Temporary femoral hemodialysis catheters</td>
                        <td className="p-2 border">49th Annual conference of Indian society of Nephrology</td>
                        <td className="p-2 border">22 Dec 2018</td>
                        <td className="p-2 border">Bhubaneswar</td>
                      </tr>
                      <tr>
                        <td className="p-2 border">8</td>
                        <td className="p-2 border">Philip Nishita Mohan, Bhowmik D, Mahajan S, Bagchi S, Yadav RK, Arun Kumar, Agarwal SK</td>
                        <td className="p-2 border">Post Renal Transplant Malignancy in India-Single center experience</td>
                        <td className="p-2 border">49th Annual conference of Indian society of Nephrology</td>
                        <td className="p-2 border">22 Dec 2018</td>
                        <td className="p-2 border">Bhubaneswar</td>
                      </tr>
                      <tr>
                        <td className="p-2 border">9</td>
                        <td className="p-2 border">Yadav RK</td>
                        <td className="p-2 border">Clinico Microbiological Profile and Outcomes of Central Catheter Related Blood stream infections in Hemodialysis: A Single Centre Study</td>
                        <td className="p-2 border">ISN WCN 2019</td>
                        <td className="p-2 border">14 April, 2019</td>
                        <td className="p-2 border">Melbourne, Australia</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

          </section>

          {/* Honors, Awards, Publications, Clinical Trials */}
          <section className="mt-[-30px]" >
            <div className="w-full relative  pl-10">
              <div className="mb-10 relative">
                <div className="absolute left-[-18px] top-1 h-full flex flex-col items-center">
                  {/* symbol */}
                  <span className="px-1 text-2xl text-gray-500">✦</span>

                  {/* line */}
                  <span className="w-[2px] flex-1 bg-gray-400 mt-1"></span>
                </div>

                <h2 className="text-2xl ml-[10px] pt-[5px] font-semibold mb-2">Honors, Awards and achievements</h2>
                <div className="space-y-6 pl-5">
                  {honorsAwards.slice(0, visibleHonors).map((item, idx) => (
                    <div key={idx}>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      {item.year && <p className="text-gray-600">{item.year}</p>}
                    </div>
                  ))}

                </div>
                <button
                  onClick={() => window.location.href = '/honors'}
                  className="mt-4 ml-4 px-4 py-2 bg-gray-200 text-gray-800 rounded shadow hover:bg-gray-300 transition"
                >
                  All Honors, Awards and Achievements
                </button>
              </div>

            </div>
          </section>

          <section className="mt-[-30px]">
            <div className="w-full relative  pl-10">
              <div className="mb-10 relative">
                <div className="absolute left-[-18px] top-1 h-full flex flex-col items-center">
                  {/* symbol */}
                  <span className="px-1 text-2xl text-gray-500">✦</span>

                  {/* line */}
                  <span className="w-[2px] flex-1 bg-gray-400 mt-1"></span>
                </div>

                <h2 className="text-2xl ml-[10px] pt-[5px] font-semibold mb-2">Chapters in Book</h2>
                <ul className="list-disc pl-5 text-gray-700 text-[16px] space-y-2 mb-8 break-words w-full">
                  {ChapterinBook.map((item, idx) => (
                    <li key={idx} className="leading-relaxed break-words w-full">{item}</li>
                  ))}
                </ul>
              </div>

            </div>
          </section>

          <section className="mt-[-30px]">
            <div className="w-full relative  pl-10">
              <div className="mb-10 relative">
                <div className="absolute left-[-18px] top-1 h-full flex flex-col items-center">
                  {/* symbol */}
                  <span className="px-1 text-2xl text-gray-500">✦</span>

                  {/* line */}
                  <span className="w-[2px] flex-1 bg-gray-400 mt-1"></span>
                </div>

                <h2 className="text-2xl ml-[10px] pt-[5px] font-semibold mb-2">Personal Statement</h2>
                <ul className="list-disc pl-5 text-gray-700 text-[16px] space-y-2 mb-8 break-words w-full">
                  {PersonalStatement.map((item, idx) => (
                    <li key={idx} className="leading-relaxed break-words w-full">{item}</li>
                  ))}
                </ul>
              </div>

            </div>
          </section>

        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
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

export default About;

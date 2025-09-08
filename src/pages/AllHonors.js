import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const honorsAwards = [
  { title: "Certificate of Participation as a Delegate in the CME/Chairperson PD College-Reinvigorating a Wonderful Treatment Modality held on 18th August 2024." },
  { title: "Certification of Participation as a Faculty in Inaugural Conference of Indian Society of Transplant Surgeons held on 8th September 2024." },
  { title: "Proudly Confer the Scroll of Honour in Training workshop on Certificate Course in Chronic Kidney Disease (CCCKD) for Medical Officers held in 01st – 02nd August 2024 at Bhopal, Madhya Pradesh." },
  { title: "Proudly Confer the Scroll of Honour in Training workshop on Certificate Course in Chronic Kidney Disease (CCCKD) for Medical Officers held in 30th -31st July 2024 at Bhopal, Madhya Pradesh." },
  { title: "Certificate DNS ANNUAL UPDATE 2024 held at Jawaharlal Nehru Auditorium, AIIMS, New Delhi on 7th April 2024." },
  { title: "Certificate Course in Chronic Kidney Disease (CCCKD) for medical officers held on 9th -10th July 2024 at Bhopal, Madhya Pradesh." },
  { title: "Certificate 10th APCM-ISPD held at New Delhi, September 2023." },
  { title: "Certificate of participation of Annual Conference of Delhi Nephrology Society held on April 2023." },
  { title: "Certificate RRT Update-2022 held at Hotel Pride Plaza, Aerocity, New Delhi." },
  { title: "Certificate of Achievement has won BEST RESEARCHER AWARD in INSO awards April 2022." },
  { title: "Certificate of Appreciation of “World Kidney Day”, March 2022" },
  { title: "In Appreciation of “Rotary Club of Delhi South” during RY 2021-22." },
  { title: "ISN recognized interventional center in 2020." },
  { title: "Letter of Appreciation in 64th Institute Day Exhibition on “Universal Health Coverage” held at September, 2019" },
  { title: "Certificate of Participation in DNS ANNUAL UPDATE 2019 held at New Delhi, March 2019." },
  { title: "“Certificate of Participation” hands on Cath-Lab Workshop on Cath lab Interventional procedures, TCC Placement, Access Mapping, Angiography, Angioplasty held at New Delhi, November 2018." },
  { title: "Certificate is awarded in State level Conference CHETMEDICON august 2018" },
  { title: "Certificate of Participation in National CME held on New Delhi April 2018." },
  { title: "Certificate of Participation “Delhi Nephrology Society” April-2018." },
  { title: "“Certificate of Participation” in “Basic Course in Medical and Health Professions’ Education” held at AIIMS, New Delhi, March 2018." },
  { title: "Certificate to Recognize “free Eye & Kidney Inspection and Testing Camp” held at SONEPAT Haryana, April 2017." },
  { title: "“Certificate of Participation” in World Kidney Day held at New Delhi, March 2017" },
  { title: "Awarded “Fellow of the American Society of Nephrology” by 2017 ASN Council on 25th May, 2017." },
  { title: "Admitted as a life member to Indian Society of Nephrology – Northern Zone on 14th Dec, 2017." },
  { title: "Invited as National faculty in 48th Annual conference of Indian Society of Nephrology held at New Delhi from 14-17th Dec, 2017." },
  { title: "Certificate of Participation in CME on Renal Diseases on March 2016 at New Delhi." },
  { title: "“Certificate of Participation” in “Basic Course in Medical and Health Professions’ Education” held at KL Wig CMET, New Delhi, March 2016 " },
  { title: "Certificate of the 9th Annual Conference of the Indian Academy of Nephrology held on September 2014." },
  { title: "“Certificate of Participation” in State level CME API Haryana Chapter, HAPICON 2015 " },
  { title: "“Certificate of Participation” in 4th Annual Update of AVATAR, New Delhi, June 2015 " },
  { title: "“Certificate of Participation” in 3rd Annual Update of AVATAR, New Delhi, June 2014 " },
  { title: "Started CAPD Program at Pt. BDS Post Graduate Institute of Medical Sciences, Rohtak in 2014." },
  { title: "Started External Jugular tunneled catheter placement in AIIMS, New Delhi" },
  { title: "Reviewer of national and International medical Journals - Renal Failure, Indian Journal of Dermatology, Venereology and Leprology, Indian Journal of Urology and International General of Medical & Clinical Research" },
  { title: "“Certificate of Participation” in American College of Physicians – Medical knowledge self-assessment program 16 in 2013" },
  { title: "“Certificate of Appreciation & Attendance” for 1st Update Lung in Systemic Diseases organized by the Deptt. Of General Medicine & Deptt. of Pulmonary & Critical Care Medicine on 24th April 2011" },
  { title: "“Best Published Article Awards-2009” In Journal International Medical Science Academy" },
  { title: "“Certificate of Excellence” for the Research Presentation on “Ambulatory blood pressure and Clinic based blood pressure measurement in living kidney donors before and after nephrectomy- A short term follow up study” 18th Annual conference of North Zone ISN and Delhi Nephrology Society, Greater Noida, NCR- March, 2014." },
  { title: "“Certificate of Excellence” for Research paper presentation at North Zone Indian Society of Nephrology conference, Greater Noida – 2014" },
  { title: "“1st prize” in Poster presentation at 9th Annual conference of Indian academy of Nephrology, Indore – 2014" },
  { title: "Awarded “Fellow of the American Society of Nephrology” by 2017 ASN Council on 25th May, 2017" },
  { title: "Certificate of Appreciation for participation in the CME medicine update at Bhiwani on 1st May 2011." },
  { title: "Certificate to participation in the 2nd Regional CME November 2012." },
  { title: "Certificate of Pharmacovigilance: A Primer held in LGIMS Rohtak on March 2010." },
  { title: "Certificate of Participation in Diabetes Summit 2010." },
  { title: "Shri Loknath Saraf Memorial Award, Rajasthan Ratnakar (A Leading Social Organization of Delhi)." },
  { title: "Member of the National Academy of Medical Sciences (India) in the year 2024." },
  { title: "Awarded “Pattern of CYP3A5 and MDR-1 single nucleotide polymorphism and its impact on tacrolimus levels and clinical outcomes in living renal allograft recipient Istanbul, Turkey- September, 22 to 25, 2024." }
];

function extractYear(item) {
  const match = item.title.match(/(19|20)\d{2}/g);
  if (match) {
    return parseInt(match[match.length - 1], 10);
  }
  return 0;
}

const sortedHonors = [...honorsAwards].sort((a, b) => extractYear(b) - extractYear(a));

const AllHonors = () => {
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
    <div className="min-h-screen bg-white px-4 py-8 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">All Honors, Awards and Achievements</h1>
        <ul className="space-y-4">
          {sortedHonors.map((item, idx) => (
            <li
            key={idx}
            className="p-4 text-justify border border-gray-300 rounded-lg shadow-sm transition-all duration-300 cursor-default hover:border-l-4 hover:border-[#00CC99] hover:pl-6 bg-white"
          >  <div className="text-base font-semibold text-gray-800">{item.title}</div>
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

export default AllHonors; 
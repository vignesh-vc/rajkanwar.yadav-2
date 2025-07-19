import React, { useEffect, useState } from "react";
import profileImg from "../assests/photo.jpg";
import { FaLinkedin, FaFacebook } from "react-icons/fa";

const About = () => {
  const [activeTab, setActiveTab] = useState("default");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dotStyle = "absolute w-3.5 h-3.5 bg-[#00CC99] rounded-full left-[-25px] top-2";
  const dotStyleBlack = "absolute w-3.5 h-3.5 bg-black rounded-full left-[-25px] top-2";

  const renderDoctorInfo = () => (
    <div className="w-full relative border-l-2 border-[#00CC99] pl-10">
      {/* Header */}
      <div className="mb-8 relative">
        <div className={dotStyle}></div>
        <h1 className="text-3xl font-bold text-gray-800">Dr. Raj Kanwar Yadav</h1>
        <p className="text-gray-500 text-lg">M.B.B.S, M.D. (Medicine), D.M. (Nephrology)</p>
      </div>

      {/* Biography */}
      <div className="mb-10 relative">
        <div className={dotStyle}></div>
        <h2 className="text-2xl font-semibold mb-2">Bio-Sketch</h2>
        <p className="text-gray-600 leading-relaxed">
          Dr. Raj Kanwar Yadav, MBBS is an Additional Professor in the Department of Nephrology at All India Institute of Medical Sciences, New Delhi. He received his Medical Degree from Jawaharlal Nehru Medical College. His specialization is Nephrology.</p>
      </div>

      {/* Education */}
      <div className="mb-10 relative">
        <div className={dotStyle}></div>
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold">DM (Nephrology)</h3>
            <p className="text-gray-600">AIIMS, New Delhi</p>
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
      <div className="mb-10 relative">
        <div className={dotStyle}></div>
        <h2 className="text-2xl font-semibold mb-2">Recent Publications</h2>
        
        {/* Recent Publications List - Added */}
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li className="text-gray-600 leading-relaxed">
            Visual, rapid, and cost-effective BK virus detection system for renal transplanted patients using gold nanoparticle coupled loop-mediated isothermal amplification (nanoLAMP). <i>The Indian practitioner</i>, 2024, PMID: 38290650
          </li>
          <li className="text-gray-600 leading-relaxed">
            Effect of vinpocetine alone and in combination with enalapril in experimental model of diabetic cardiomyopathy in rats: possible involvement of PDE-1/TGF-β/ Smad 2/3 signalling pathways. <i>Seminars in dialysis</i>, 2023, PMID: 37229596
          </li>
          <li className="text-gray-600 leading-relaxed">
            Clinical Profile of Nonproteinuric Kidney Disease in Type 2 Diabetic Patients in India. <i>Saudi journal of kidney diseases and transplantation : an official publication of the Saudi Center for Organ Transplantation, Saudi Arabia</i>, 2023, PMID: 37781550
          </li>
          <li className="text-gray-600 leading-relaxed">
            Utility and patient acceptance of telemedicine in nephrology. <i>Journal of the Association of Physicians of India</i>, 2022, PMID: 36367662
          </li>
          <li className="text-gray-600 leading-relaxed">
            Does Laparoscopic Omentectomy Reduce CAPD Catheter Malfunction: A Three-arm Pilot Randomized Trial. <i>The Indian practitioner</i>, 2022, PMID: 35967525
          </li>
          <li className="text-gray-600 leading-relaxed">
            Characterizing predictors of non-diabetic kidney disease (NDKD) in diabetic patients. <i>International Journal of Pharmacy and Pharmaceutical Sciences</i>, 2022, PMID: 34590241
          </li>
          <li className="text-gray-600 leading-relaxed">
            Renal Outcomes of Pregnancy-Related Acute Kidney Injury: a Single Centre Experience in India. <i>Renal failure</i>, 2022, PMID: 35733733
          </li>
        </ul>
      </div>
      
      <div className="mb-10 relative">
        <div className={dotStyle}></div>
        <h2 className="text-2xl font-semibold mb-2">Recent Clinical Trials</h2>
        
        {/* Recent Publications List - Added */}
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li className="text-gray-600 leading-relaxed">
            As Open-label, Randomized, Parallel-group, Two Arm Clinical Study to Evaluate the anti-inflammatory effect of ferronemia (lactoferrin + disodium guanosine monophosphate) tablet + Conservative Chronic Kidney Disease Management Therapy versus Conservative Chronic Kidney Disease Management Therapy in the Subjects with Chronic Kidney Disease. <br/> <b>Principal Investigator</b>, Jul 2022 - Mar 2023, Trial ID: CTRI/2022/07/044200
          </li>
          <li className="text-gray-600 leading-relaxed">
            Pattern of CYP3A5 and MDR-1 single nucleotide polymorphism and its Impact on Individualization of Tacrolimus based Immunosuppression in Living Renal Allograft recipient. <br/> <b>Principal Investigator</b>, Mar 2017 - Mar 2017, Trial ID: CTRI/2017/03/007997
          </li>
        </ul>
      </div>
    </div>
  );

  // Honors, Awards and Achievements Data
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

  // Pagination state for honors/awards
  const [visibleHonors, setVisibleHonors] = useState(10);
  const showMoreHonors = () => setVisibleHonors((prev) => prev + 10);

  const renderDoctorCertification = () => (
    <div className="w-full relative border-l-2 border-[#00CC99] pl-10">
      {/* Certification */}
      <div className="mb-10 relative">
        <div className={dotStyle}></div>
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
              onClick={showMoreHonors}
              className="mt-4 px-4 py-2 bg-[#00CC99] text-white rounded shadow hover:bg-[#009977] transition"
            >
              Show More
            </button>
          )}
        </div>
      </div>
    </div>
  );

  const renderDoctorImage = () => (
    <div className="w-full  flex justify-center">
      <div className="w-full h-full flex items-center  md:mt-[-100px] justify-center">
        <img
          src={profileImg}
          alt="Dr. B M Suraj"
          className="w-full max-w-[400px] h-auto object-cover rounded-xl shadow-2xl"
        />
      </div>
    </div>
  );

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

  const renderWorkExperience = () => (
    <div className="w-full relative border-l-2 border-[#00CC99] pl-10">
      {/* Title */}
      <div className="mb-6 relative">
        <div className={dotStyle}></div>
        <h2 className="text-3xl font-bold text-gray-800">Teaching experience</h2>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6 flex-wrap">
        <button
          onClick={() => setActiveTab("default")}
          className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${activeTab === "default"
            ? "bg-[#00CC99] text-white shadow"
            : "bg-white text-[#00CC99] border-[#00CC99] hover:bg-[#00CC99] hover:text-white"
            }`}
        >
          All Experience
        </button>
        {Object.keys(additionalExperience).map((key) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${activeTab === key
              ? "bg-[#00CC99] text-white shadow"
              : "bg-white text-[#00CC99] border-[#00CC99] hover:bg-[#00CC99] hover:text-white"
              }`}
          >
            {key}
          </button>
        ))}
      </div>

      {/* Experience Content */}
      {activeTab === "default" ? (
        <ul className="list-disc pl-5 text-gray-700 text-[16px] space-y-2">
          {defaultExperience.map((item, index) => (
            <li key={index} className="leading-relaxed">{item}</li>
          ))}
        </ul>
      ) : (
        <div className="space-y-6">
          {['Post Graduate Thesis:', 'Organizational skills and social work', 'Affiliations and Memberships'].includes(activeTab) ? (
            <ul className="list-disc pl-5 text-gray-700 text-[16px] space-y-2">
              {additionalExperience[activeTab].map((item, index) => (
                <li key={index} className="leading-relaxed">{item}</li>
              ))}
            </ul>
          ) : (
            <ul className="list-disc pl-5 text-gray-700 text-sm">
              {additionalExperience[activeTab].map((item, index) => (
                <li key={index} className="relative">
                  <div className={dotStyle}></div>
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );

  // Sidebar Data (for left column)
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

  return (
    <div className="min-h-screen bg-white px-2 sm:px-4 md:px-8 py-6 flex flex-col items-center">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-[auto,1fr] gap-8">
        {/* Left Column */}
        <div className="flex flex-col gap-6 items-center md:items-start md:sticky md:top-20 md:self-start h-fit pr-4">
          {/* Profile Image */}
          <img
            src={profileImg}
            alt="Dr. Raj Kanwar Yadav"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 object-cover rounded-2xl shadow-lg border-4 border-[#00CC99] mb-2"
          />
          {/* Contact Info */}
          <section className="bg-white rounded-xl shadow p-4 w-full">
            <h3 className="text-lg font-semibold text-[#00CC99] mb-2">Contact Information</h3>
            <p className="text-gray-700 text-sm whitespace-pre-line">{contactInfo.address}</p>
            {/* <p className="text-gray-700 text-sm">Phone: {contactInfo.phone}</p> */}
            <p className="text-gray-700 text-sm">Email: <a href={`mailto:${contactInfo.email}`} className="text-[#00CC99] underline">{contactInfo.email}</a></p>
          </section>
          {/* Research Interests */}
          <section className="bg-white rounded-xl shadow p-4 w-full">
            <h3 className="text-lg font-semibold text-[#00CC99] mb-2">Clinical/Research Interests</h3>
            <ul className="list-disc pl-5 text-gray-700 text-sm">
              {researchInterests.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>
          {/* Specialty */}
          <section className="bg-white rounded-xl shadow p-4 w-full">
            <h3 className="text-lg font-semibold text-[#00CC99] mb-2">Specialty</h3>
            <p className="text-gray-700 text-sm">{specialty}</p>
          </section>
          {/* Social Links */}
          <section className="bg-white rounded-xl shadow p-4 w-full">
            <h3 className="text-lg font-semibold text-[#00CC99] mb-2">Social Media Accounts</h3>
            <ul className="flex gap-3">
              {socialLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-[#00CC99] text-sm flex items-center gap-1 hover:text-[#336699]">
                    {link.icon}
                    <span className="sr-only">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
        {/* Right Column */}
        <div className="flex flex-col gap-10 min-w-0 pl-4 w-full flex-1">
          {/* Doctor Info */}
          <section>{renderDoctorInfo()}</section>
          {/* Work Experience Section */}
          <section>{renderWorkExperience()}</section>
          {/* Honors, Awards, Publications, Clinical Trials */}
          <section>{renderDoctorCertification()}</section>
        </div>
      </div>
    </div>
  );
};

export default About;

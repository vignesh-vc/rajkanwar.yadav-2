import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FaHeartbeat, FaCapsules, FaStethoscope } from "react-icons/fa";
import Thyroid from "../assests/thyroid.jpg"
import Heart from "../assests/heart.jpg";
import BP from "../assests/bp.jpg";
import Respiratory from "../assests/respiratory.webp";
import Migraine from "../assests/Migraine.jpg";
import Pain from "../assests/Pain Management.jpg";
import Gastric from "../assests/Gastric.jpg";
import Diabetes from "../assests/Diabetes.jpg";
import Infectious from "../assests/Infectious.jpg";
import Vaccination from "../assests/Vaccination.jpg";

const treatments = [
  {
    id: 1,
    icon: <FaHeartbeat className="text-white text-xl" />,
    title: "Thyroid Disease",
    description: "Get butterflies, not butterfly gland diseases",
    img: Thyroid,
    htmlContent: `
      <h1 class="text-xl font-semibold mt-6 mb-2">Thyroid Disease:</h1>
      <p>The thyroid gland, which is located at the base of the neck, is in charge of releasing hormones into the bloodstream. This gland's malfunction can result in a variety of symptoms and complications. The highly experienced specialists at our clinic help diagnose and treat patients with thyroid disorders.</p>
      <p class="mt-4">Thyroid disease occurs when the thyroid gland produces either too much or too little hormones. Thyroid diseases include hyperthyroidism, hypothyroidism, thyroiditis, and Hashimoto's thyroiditis.</p>
      <p class="mt-4">We provide comprehensive, seamless, coordinated, and patient-centered care by keeping patients at the center of our program. From the initial evaluation to treatment and meticulous follow-up monitoring, we use a team approach to coordinate all aspects of patient care. Look no further and schedule a thyroid examination if you are facing any fertility issues, weight issues, or are seeing any recent bodily changes such as excessive sweating, hand tremors, or sleep problems.</p>
      <p class="mt-4 font-bold">BOOK YOUR APPOINTMENT NOW !!!</p>
    `,
  },
  {
    id: 2,
    icon: <FaHeartbeat className="text-white text-xl" />,
    title: "Heart Problems",
    description: "Get butterflies, not butterfly gland diseases",
    img:Heart ,
    htmlContent: `
    <h1 class="text-xl font-semibold mt-6 mb-2"></h1>
     <p>Despite having a chronic cardiac condition, you can live a healthy, happy life if you have the right team in place, the right medications and devices prescribed as needed, and the right lifestyle changes. </p>
       <ul class="list-disc ml-5">
        <li>Coronary artery disease (CAD)</li>
        <li>Heart attack</li>
        <li>High blood pressure</li>
        <li>Valve disease</li>
        <li>Cardiomyopathy</li>
      </ul>
      <p>A chronic cardiac condition's symptoms can range from mild to severe and vary from person to person. Symptoms can appear suddenly or gradually, depending on the cause. A very mild condition may not have any visible symptoms at all. It is critical to recognize the signs as soon as they appear and to treat the condition as soon as possible with the assistance of your cardiac healthcare team. Treatment differs from one patient to the next. </p>
      <p class="mt-4 font-bold">OUR CARDIAC HEALTHCARE TEAM WILL DETERMINE THE BEST TREATMENT PLAN FOR YOU. !!!</p>
    `,
  },
  {
    id: 3,
    icon: <FaHeartbeat className="text-white text-xl" />,
    title: "B.P. Management",
    description: "Get butterflies, not butterfly gland diseases",
    img: BP,
    htmlContent: `
      <h1 class="text-xl font-semibold mt-6 mb-2"></h1>
      <p>High blood pressure is usually caused by the narrowing of the arteries caused by the buildup of a sticky substance called plaque. Plaque forms as a result of excess cholesterol in your blood, which is typically caused by a diet high in certain types of fats and low in fibre.</p>
      <p class="mt-4">As plaque accumulates along the artery walls, the arteries become less flexible and less capable of efficiently transporting blood. This is referred to as artery "hardening." </p>
      <p class="mt-4">High blood pressure can also be caused by smoking, obesity or being overweight, excessive drinking or other substance abuse, and being physically inactive. Blood pressure is also more common in the elderly.</p>
      <p class="mt-4 ">Various medications can be used to keep blood pressure under control. Quitting smoking, reducing unhealthy fats, and consuming more fibre along with regular exercise are all important lifestyle changes. </p>
      <p class="mt-4 ">It's critical to have your blood pressure checked on a regular basis to ensure that your treatment is working. High blood pressure usually causes no symptoms until serious damage occurs, thus making regular checkups all the more important. </p>
      <p class="mt-4 font-bold">BOOK AN APPOINTMENT NOW.  !!!</p>
    `,
  },
  {
    id: 4,
    icon: <FaHeartbeat className="text-white text-xl" />,
    title: "Respiratory Problems",
    description: "Get butterflies, not butterfly gland diseases",
    img: Respiratory,
    htmlContent: `
      <h1 class="text-xl font-semibold mt-6 mb-2"></h1>
      <p>Respiratory illness is a common problem in metropolitan cities. Certain factors and behaviours, such as smoking, air pollution, and environmental issues can contribute to respiratory diseases. Other causes include autoimmune diseases such as rheumatoid arthritis and genetic defects. </p>
      <p class="mt-4">Asthma, chronic obstructive pulmonary disease, cystic fibrosis, chronic
bronchitis, tuberculosis, lung cancer, pulmonary edema, and pneumonia are examples of common respiratory diseases.</p>
      <p class="mt-4 ">Early symptoms of respiratory diseases include wheezing, difficulty breathing, chest pain, chronic cough with or without blood, and excessive mucus production. These symptoms are warning signs that necessitate immediate medical attention, so consulting a doctor is strongly advised.</p>
      <p class="mt-4 font-bold">TO DETERMINE THE TYPE OF RESPIRATORY PROBLEM, IT IS BEST TO SEEK A CONSULTATION WITH OUR EXPERTS. !!!</p>
    `,
  },
  {
    id: 5,
    icon: <FaHeartbeat className="text-white text-xl" />,
    title: "Migraine",
    description: "Get butterflies, not butterfly gland diseases",
    img: Migraine,
    htmlContent: `
      <h1 class="text-xl font-semibold mt-6 mb-2"></h1>
      <p>Migraine is characterized by throbbing pain on one side of the head. A migraine headache is triggered by a variety of factors, including stress, hormonal imbalance, and others. It may be accompanied by vomiting, nausea, eye pain, or light sensitivity in some cases. Migraine attacks cause excruciating headaches that can last for hours or even days.</p>
      <p class="mt-4">The cause of a migraine is unknown; however, it is linked to unusual brain activity. The unusual changes in the brain have an impact on the normal functioning of the nervous system and result in a chemical imbalance in the brain. The following are the primary migraine triggers:</p>
       <ul class="list-disc ml-5">
        <li>Stress</li>
        <li>Hormonal imbalance</li>
        <li>Diet </li>
        <li>Physical ailments</li>
        <li>Medications</li>
        <li>Environmental triggers</li>
      </ul>
      <p class="mt-4">Furthermore, there is no single treatment that can completely eliminate migraines. The majority of available treatments are aimed at alleviating symptoms and preventing migraine attacks from occurring in the first place. </p>
      <p class="mt-4 font-bold">    CONTACT US TO KNOW MORE !!!</p>
    `,
  },
  {
    id: 6,
    icon: <FaHeartbeat className="text-white text-xl" />,
    title: "Pain Management",
    description: "Get butterflies, not butterfly gland diseases",
    img: Pain,
    htmlContent: `
      <h1 class="text-xl font-semibold mt-6 mb-2"></h1>
      <p>Pain or chronic pain is a complete medical problem that has a significant impact on your immune system and can result in unexpected outcomes. We provide comprehensive pain management services for a wide range of chronic pain conditions, including back pain, neck pain, shoulder pain, facial pain, headache, neuropathic pain, slipped disc, failed back surgery pain, sciatica, and others. At our pain management clinic, you will receive the best pain treatment available.</p>
      <p class="mt-4">For our patients. we offer the most advanced pain treatment options available anywhere in the world. We care for our patients in a supportive and compassionate environment, allowing them to regain their independence and comfort while improving their quality of life. </p>
      <p class="mt-4">We guarantee a pain-free life in order to improve the overall quality of life. </p>
      <p class="mt-4 font-bold">BOOK YOUR APPOINTMENT NOW !!!</p>
    `,
  },
  {
    id: 7,
    icon: <FaHeartbeat className="text-white text-xl" />,
    title: "Gastric Disorders",
    description: "Get butterflies, not butterfly gland diseases",
    img: Gastric,
    htmlContent: `
      <h1 class="text-xl font-semibold mt-6 mb-2"></h1>
      <p>Gastrointestinal conditions are disorders of the digestive system, an extensive and complex system that breaks down food in order to absorb water and extract nutrients, minerals, and vitamins for the body's use, while also removing unabsorbed waste (feces).</p>
      <p class="mt-4">The symptoms of digestive disorders differ from one condition to the other and from one person to the other. However, some common symptoms include:</p>
      <ul class="list-disc ml-5">
        <li>Abdominal discomfort (bloating, pain or cramps)</li>
        <li>Unintentional weight loss</li>
        <li>Nausea and vomiting</li>
        <li>Acid reflux (heartburn)</li>
        <li>Constipation and diarrhea </li>
        <li>Fecal incontinence </li>
        <li>Fatigue</li>
         <li>Appetite loss</li>
         <li>Difficulty swallowing</li>
          </ul>
      <p class="mt-4"> If you notice blood in your vomit or stool, contact your doctor right away.</p>
      <p class="mt-4 font-bold">FIX YOUR APPOINTMENT WITHOUT ANY DELAY !!!!!!</p>
    `,
  },
  {
    id: 8,
    icon: <FaHeartbeat className="text-white text-xl" />,
    title: "Diabetes Management",
    description: "Get butterflies, not butterfly gland diseases",
    img: Diabetes,
    htmlContent: `
      <h1 class="text-xl font-semibold mt-6 mb-2"></h1>
      <p>We specialize in helping patients manage their diabetes so they can stay healthy.</p>
      <p class="mt-4">Diabetes mellitus is a metabolic disorder characterized by high levels of blood glucose (blood sugar). Diabetes causes high blood sugar levels because the body does not produce enough insulin (the hormone that converts nutrients into energy), or because the cells do not respond to the insulin that is produced.</p>
      <p class="mt-4">Diabetes, if left undiagnosed and untreated, can lead to cardiovascular disease, kidney damage, stroke, amputations due to diabetic foot conditions, and blindness due to diabetic retinopathy.</p>
      <p class="mt-4">We have the knowledge and experience to accurately diagnose and effectively manage diabetes at our clinic. Our diabetes specialists assess and care for people with all types of diabetes and diabetes-related issues.</p>
      <p class="mt-4">Furthermore, our Diabetes Management Program provides comprehensive diabetes education to patients and families.</p>
      <p class="mt-4 font-bold">CONTACT US IF YOU WANT TO LEARN MORE ABOUT THE DIABETES MANAGEMENT PROGRAM.</p>
    `,
  },
  {
    id: 9,
    icon: <FaHeartbeat className="text-white text-xl" />,
    title: "Infectious Diseases",
    description: "Get butterflies, not butterfly gland diseases",
    img: Infectious,
    htmlContent: `
      <h1 class="text-xl font-semibold mt-6 mb-2"></h1>
      <p>A microbiome of bacteria, pathogens, fungi, and viruses lives in your body. They usually do not cause any harm. Microorganisms, on the other hand, can occasionally cause disease. Infection-causing pathogens or parasites can also be contracted from other people, animals, insects, or contaminated food.</p>
      <p class="mt-4 ">Infectious diseases can be difficult to diagnose and treat because their symptoms and severity vary so much. Experts specialize in the diagnosis and treatment of a wide range of these conditions.</p>
      <p class="mt-4">Depending on your condition and symptoms, appropriate diagnostic methods are performed to identify the root cause and on the basis of that treatment is provided. If you experience symptoms like unexplained high fever, flu, common cold, or sepsis, be cautious.</p>
      <p class="mt-4 font-bold">BOOK YOUR APPOINTMENT NOW !!!</p>
    `,
  },
  {
    id: 10,
    icon: <FaHeartbeat className="text-white text-xl" />,
    title: "Vaccination And Check-up",
    description: "Get butterflies, not butterfly gland diseases",
    img: Vaccination,
    htmlContent: `
      <h1 class="text-xl font-semibold mt-6 mb-2"></h1>
      <p>Regular health checks can detect any early warning signs of illness. During a health check-up, our doctors will inquire about your medical history, family history of the disease, and your lifestyle, which includes your diet, weight, physical activity, alcohol consumption, and smoking habits. Kidney and liver function, blood tests, glucose levels, chest x-ray, ECG, abdomen ultrasound, and urine analysis are among the tests done. Everyone should have a routine checkup once a year, however, if you have an underlying health problem, you should see a doctor more frequently.</p>
      <p class="mt-4">We use a multidisciplinary team approach to prevent, detect, and treat a variety of illnesses, including diabetes, hypertension, obesity, cardiac issues, and cancer. Our team of preventive health experts encourages you to adopt healthy lifestyle habits and provides customized solutions to help you maintain your health and improve your quality of life.</p>
      <p class="mt-4">Services like immunization are also offered at our clinic. It is a process that protects people from harmful infections and illnesses before they become infected. Vaccines are used to provide immunity. Some of these include - the pneumococcal vaccine, an annual flu shot, a tetanus-diphtheria-pertussis booster, a herpes zoster vaccine, and vaccines for conditions like Measles, Mumps, Hepatitis, and more. </p>
      <p class="mt-4 font-bold">TO BOOK AN APPOINTMENT, CONTACT US !!!</p>
    `,
  },

  // Add the rest as needed...
];

const TreatmentDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const navigate = useNavigate();

  const treatment = treatments.find((t) => t.id === parseInt(id));

  if (!treatment) {
    return (
      <div className="text-center py-20 text-red-500">
        Treatment not found!
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-4">{treatment.title}</h1>

      {treatment.img && (
        <img
          src={treatment.img}
          alt={treatment.title}
          className="w-full h-96 object-cover rounded-xl mb-8"
        />
      )}

      {treatment.htmlContent ? (
        <div
          className="text-gray-700 leading-relaxed blog-content"
          dangerouslySetInnerHTML={{ __html: treatment.htmlContent }}
        />
      ) : (
        <p className="text-gray-500">Detailed content is coming soon.</p>
      )}

      {/* Centered Booking Button */}
      <div className="flex justify-center mt-8">
        <Link
          to="/booking"
          className="text-white px-6 py-3 rounded-lg text-lg font-medium border-2 transition duration-1000"
          style={{
            fontWeight: "bold",
            backgroundColor: "#336699",
            borderColor: "#336699",
            transition: "background-color 1s, color 1s, border-color 1s",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "white";
            e.target.style.color = "#336699";
            e.target.style.borderColor = "#336699";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#336699";
            e.target.style.color = "white";
            e.target.style.borderColor = "#336699";
          }}
        >
          Booking Appointment
        </Link>
      </div>
    </div>
  );
};

export default TreatmentDetail;

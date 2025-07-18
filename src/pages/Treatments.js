import React from "react";
import { FaHeartbeat, FaCapsules, FaStethoscope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
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
    description:
      "Get butterflies, not butterfly gland diseases",
    image:Thyroid
  },
  {
    id: 2,
    icon: <FaCapsules className="text-white text-xl" />,
    title: "Heart Problems",
    description:
      "Don’t let your heart fail!",
      image: Heart
  },
  {
    id: 3,
    icon: <FaStethoscope className="text-white text-xl" />,
    title: "B.P. Management",
    description:
      "Control your blood pressure",
      image:BP
  },
  {
    id: 4,
    icon: <FaHeartbeat className="text-white text-xl" />,
    title: "Respiratory Problems",
    description:
      "Breathe in a better quality of life",
      image:Respiratory
  },
  {
    id: 5,
    icon: <FaCapsules className="text-white text-xl" />,
    title: "Migraine",
    description:
      "Migraine : It's not just a headache",
      image:Migraine
  },
  {
    id: 6,
    icon: <FaStethoscope className="text-white text-xl" />,
    title: "Pain Management",
    description:
      "Because you deserve a pain-free life",
      image:Pain
  },
  {
    id: 7,
    icon: <FaHeartbeat className="text-white text-xl" />,
    title: "Gastric Disorders",
    description:
      "There might be more to that “tummy pain”",
      image:Gastric
  },
  {
    id: 8,
    icon: <FaCapsules className="text-white text-xl" />,
    title: "Diabetes Management",
    description:
      "Diabetes care in a multidisciplinary setting",
      image:Diabetes
  },
  {
    id: 9,
    icon: <FaStethoscope className="text-white text-xl" />,
    title: "Infectious Diseases",
    description:
      "Stop the spread!",
      image:Infectious
  },
  {
    id: 10,
    icon: <FaHeartbeat className="text-white text-xl" />,
    title: "Vaccination And Check-up",
    description:
      "Trap the root cause",
      image:Vaccination
  }
];
const Treatments = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const navigate = useNavigate();

  const handleExplore = (id) => {
    navigate(`/treatment/${id}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#336699] mb-10">
        All Treatments
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {treatments.map((treatment) => (
          <div
            key={treatment.id}
            className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition text-left"
          >
            <img
              src={treatment.image}
              alt={treatment.title}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#00CC99] mb-4">
              {treatment.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {treatment.title}
            </h3>
            <p className="text-gray-600 mb-6 text-sm">{treatment.description}</p>
            <button
              onClick={() => handleExplore(treatment.id)}
              className="flex items-center justify-between w-full border border-gray-200 rounded-full py-2 px-4 group hover:bg-[#00CC99] transition"
            >
              <span className="text-sm font-medium text-gray-900">Explore</span>
              <span className="ml-auto w-8 h-8 rounded-full bg-[#00CC99] text-purple-700 flex items-center justify-center group-hover:bg-[#336699] group-hover:rotate-[-90deg] group-hover:text-white transition">
                →
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Treatments;

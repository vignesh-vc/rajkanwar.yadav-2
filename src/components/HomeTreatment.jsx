import React from "react";
import { FaHeartbeat, FaCapsules, FaStethoscope } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";

const treatments = [
  {
    id: 1,
    icon: <FaHeartbeat className="text-white text-xl" />,
    title: "Thyroid Disease",
    description:
      "Get butterflies, not butterfly gland diseases",
  },
  {
    id: 2,
    icon: <FaCapsules className="text-white text-xl" />,
    title: "Heart Problems",
    description:
      "Don’t let your heart fail!",
  },
  {
    id: 3,
    icon: <FaStethoscope className="text-white text-xl" />,
    title: "B.P. Management",
    description:
      "Control your blood pressure",
  },
  {
    id: 4,
    icon: <FaHeartbeat className="text-white text-xl" />,
    title: "Respiratory Problems",
    description:
      "Breathe in a better quality of life",
  },
  {
    id: 5,
    icon: <FaCapsules className="text-white text-xl" />,
    title: "Migraine",
    description:
      " It's not just a headache",
  },
  {
    id: 6,
    icon: <FaStethoscope className="text-white text-xl" />,
    title: "Pain Management",
    description:
      "Because you deserve a pain-free life",
  },
];

const TreatmentSection = () => {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/treatment/${id}`);
  };

  return (
    <section className="bg-gradient-to-r from-[#00CC99] to-[#336699] py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
          Our Treatments
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {treatments.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 text-left shadow-sm hover:shadow-lg transition"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#00CC99] mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-6 text-sm">{item.description}</p>
              <button
                onClick={() => handleNavigate(item.id)}
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

        {/* ✅ View All Treatments Button */}
        <div className="flex justify-center mt-10">
          <Link
            to="/treatments"
            className="flex items-center justify-between border border-white rounded-full py-3 px-6 bg-white hover:bg-opacity-90 transition group"
          >
            <span className="text-base font-medium text-gray-900">
              View All Treatments
            </span>
            <span className="ml-3 w-8 h-8 rounded-full bg-[#00CC99] text-purple-700 flex items-center justify-center transition-transform duration-300 group-hover:rotate-[-90deg] hover:bg-[#336699] hover:text-white">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TreatmentSection;

import React from "react";
import CountUp from "react-countup";
import experience from '../assests/one.png'
const stats = [
  {
    title: 5.0,
    label: "Rating",
    iconText: "⭐⭐⭐⭐⭐",
    subtitle: "Google",
    subtitleColor: "text-red-600",
    isDecimal: true,
  },
  {
    title: 3,
    label: "Reviews",
    iconText: "⭐⭐⭐⭐⭐",
    subtitle: "Google",
    subtitleColor: "text-red-600",
  },
  {
    title: 19,
    label: "Years of Experience",
    image:{experience},
    suffix: "+",
  },
];

const StatsCard = () => {
  return (
    <div className="bg-white py-6 px-4 sm:px-6 md:px-10 shadow-xl rounded-3xl flex flex-col md:flex-row justify-around items-center w-full max-w-7xl border border-gray-100 m-0">
      {stats.map((stat, index) => (
        <React.Fragment key={index}>
          <div className="flex flex-col items-center text-center mb-6 md:mb-0 hover:scale-105 transition-transform duration-300 ease-in-out w-full md:w-auto">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#336699] drop-shadow">
              <CountUp
                end={stat.title}
                duration={2}
                decimals={stat.isDecimal ? 1 : 0}
                suffix={stat.suffix || ""}
                enableScrollSpy={true}
                scrollSpyDelay={300}
              />
            </h2>

            {stat.subtitle && (
              <p className="text-base sm:text-lg mt-1 flex items-center gap-2">
                <span className={`${stat.subtitleColor} font-semibold text-lg sm:text-xl`}>
                  {stat.subtitle}
                </span>
                <span className="text-yellow-400 text-xl">{stat.iconText}</span>
              </p>
            )}

            <p className="text-gray-600 mt-1 text-sm sm:text-base">{stat.label}</p>

            {stat.image && (
              <img
                src={experience}
                alt={stat.label}
                className="w-10 sm:w-12 mt-3 drop-shadow"
              />
            )}
          </div>

          {/* Divider */}
          {index !== stats.length - 1 && (
            <div className="hidden md:block h-20 w-[2px] bg-gray-200 mx-4 md:mx-8" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default StatsCard;

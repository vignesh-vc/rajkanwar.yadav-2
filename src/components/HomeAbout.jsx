import about_img from '../assests/R.png'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AboutSection = () => {

  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate('/aboutme');
  };




  return (
    <div className="relative bg-gradient-to-r from-[#00CC99] to-[#336699] py-16 px-6 md:px-20 text-white">
      {/* Wave Effect at Bottom */}
      <svg
        className="absolute bottom-[-1px] left-0 w-full"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#f9f9f9"
          d="M0,160L60,165.3C120,171,240,181,360,186.7C480,192,600,192,720,192C840,192,960,192,1080,186.7C1200,181,1320,171,1380,165.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Image Section */}
        <div className="relative w-full max-w-sm">
          <div className="absolute top-4 left-4 w-full h-full bg-white rounded-xl opacity-30"></div>
          <img
            src={about_img}
            alt="About Hospital"
            className="relative z-10 rounded-xl shadow-2xl"
          />
        </div>

        {/* Text Section */}
        {/* Text Section */}
        <div className="max-w-lg text-left">
          <h2 className="text-4xl font-bold leading-tight">
            About <span className="text-white">Our Hospital</span>
          </h2>
          <p className="mt-4 text-white text-lg opacity-90">
            We provide world-class healthcare with top doctors and modern facilities.
            Our goal is to ensure the best medical service with comfort and care.
          </p>
          <Link
            to="/aboutme"
            className="inline-block mt-6 px-6 py-3 bg-white text-[#336699] font-bold rounded-lg shadow-lg hover:bg-gray-200 transition"
          >
            Learn More
          </Link>
        </div>

      </div>
    </div>
  );
};

export default AboutSection;

import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Jane D",
    role: "CEO",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    stars: 5,
    feedback:
      "The user interface of this pagedone is so intuitive, I was able to start using it without any guidance."
  },
  {
    name: "Harsh P.",
    role: "Product Designer",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    stars: 5,
    feedback:
      "I used to dread doing my taxes every year, but pagedone has made the process so much simpler and stress-free."
  }
];

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const handleTransition = (newIndex) => {
    setFade(true);
    setTimeout(() => {
      setIndex(newIndex);
      setFade(false);
    }, 300);
  };

  const prevTestimonial = () => {
    const newIndex = index === 0 ? testimonials.length - 1 : index - 1;
    handleTransition(newIndex);
  };

  const nextTestimonial = () => {
    const newIndex = index === testimonials.length - 1 ? 0 : index + 1;
    handleTransition(newIndex);
  };

  return (
    <div style={{marginTop:"50px",marginBottom:"80px"}} className="max-w-5xl mx-auto p-6  bg-white shadow-md rounded-lg">
      <div className="grid md:grid-cols-2 gap-6 items-center">
        {/* Left Section */}
        <div>
          <p className="text-gray-500">Testimonial</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            23k+ Customers gave their{" "}
            <span style={{ color: "#336699" }}>Feedback</span>
          </h2>
          <div className="flex gap-3 mt-4">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-md transition duration-300"
              style={{
                border: "1px solid #336699",
                color: "#336699",
                backgroundColor: "transparent"
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#336699";
                e.target.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "#336699";
              }}
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-md transition duration-300"
              style={{
                border: "1px solid #336699",
                color: "#336699",
                backgroundColor: "transparent"
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#336699";
                e.target.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "#336699";
              }}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Right Section - Testimonial Cards */}
        <div className="relative w-full flex justify-center">
          <div
            className={`w-full md:w-96 p-6 rounded-lg text-center shadow-lg transition-opacity duration-300 ${
              fade ? "opacity-0" : "opacity-100"
            }`}
            style={{ border: "1px solid #336699" }}
          >
            <img
              src={testimonials[index].image}
              alt={testimonials[index].name}
              className="w-16 h-16 mx-auto rounded-full object-cover mb-3"
            />
            <h4 className="font-semibold text-lg">
              {testimonials[index].name}
            </h4>
            <p className="text-gray-500 text-sm">{testimonials[index].role}</p>
            <div className="flex justify-center mt-2 text-yellow-500">
              {Array.from({ length: testimonials[index].stars }).map((_, i) => (
                <span key={i}>⭐</span>
              ))}
            </div>
            <p className="text-gray-600 mt-3">
              {testimonials[index].feedback}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;

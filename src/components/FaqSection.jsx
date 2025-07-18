import React, { useState } from "react";

const faqData = [
    {
        category: "General",
        questions: [
            { question: "Why should I consult Dr. Raj Kanwar Yadav?", answer: "Dr. Raj Kanwar Yadav is a specialist in General Physician. He has more than 19 years of experience." },
            { question: "Why is it best to consult a specialist?", answer: "Specialists have deep expertise in their fields, leading to better diagnosis and treatment." },
        ],
    },
    {
        category: "Pricing",
        questions: [
            { question: "What are the consultation fees?", answer: "The consultation fees start at $50 per session." },
            { question: "Do you offer any discounts?", answer: "Yes, we provide discounts for senior citizens and students." },
        ],
    },
    {
        category: "Subscription",
        questions: [
            { question: "How does the subscription work?", answer: "The subscription allows unlimited consultations for a fixed monthly fee." },
            { question: "Can I cancel my subscription anytime?", answer: "Yes, you can cancel your subscription with a 7-day notice." },
        ],
    },
];

const FaqSection = () => {
    const [selectedCategory, setSelectedCategory] = useState("General");
    const [openIndex, setOpenIndex] = useState(null);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setOpenIndex(null);
    };

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="relative w-full pb-[150px] bg-gradient-to-b from-[#EFFFE5] to-white flex flex-col items-center py-10 px-4 sm:px-6 md:px-12 lg:px-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#333] mb-6 text-center  decoration-[#A3E4A3]">
                Frequently Asked Questions
            </h2>

            <div className="grid z-5 grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-6xl">
                {/* Category Buttons */}
                <div className="md:col-span-1 z-5 flex md:flex-col flex-wrap justify-center md:justify-start gap-2 md:gap-4">
                    {faqData.map((item) => (
                        <button
                            key={item.category}
                            className={`px-4 py-2 text-sm sm:text-base rounded-md transition-all duration-700 ease-in-out font-semibold ${selectedCategory === item.category
                                    ? "bg-[#5CAF5F] text-white scale-105 shadow"
                                    : "bg-[#A3E4A3] text-[#333] hover:bg-[#5CAF5F] hover:text-white hover:scale-105"
                                }`}
                            onClick={() => handleCategoryClick(item.category)}
                        >
                            {item.category}
                        </button>
                    ))}
                </div>

                {/* FAQ List */}
                <div className="md:col-span-3 space-y-3">
                    {faqData
                        .find((item) => item.category === selectedCategory)
                        ?.questions.map((faq, index) => (
                            <div key={index} className="transition-all duration-700 ease-in-out transform hover:scale-[1.01]">
                                <button
                                    className={`w-full flex justify-between items-center px-4 py-3 sm:px-6 sm:py-4 rounded-md transition-all duration-700 ease-in-out font-medium text-left ${openIndex === index
                                            ? "bg-[#5CAF5F] text-white"
                                            : "bg-white text-[#333] hover:bg-[#5CAF5F] hover:text-white"
                                        }`}
                                    onClick={() => handleToggle(index)}
                                >
                                    <span className="text-sm sm:text-base">{faq.question}</span>
                                    <span className="text-xl font-bold">
                                        {openIndex === index ? "−" : "+"}
                                    </span>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-700 ease-in-out ${openIndex === index
                                            ? "max-h-40 opacity-100 px-4 sm:px-6 pt-2 pb-4 bg-[#A3E4A3]/20 rounded-b-md text-sm sm:text-base"
                                            : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <p className="text-[#333]">{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
            {/* <svg  className="absolute bottom-0 top-[300px] left-0 h-[550px]  w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#efffe5" fill-opacity="1" d="M0,192L34.3,160C68.6,128,137,64,206,74.7C274.3,85,343,171,411,176C480,181,549,107,617,106.7C685.7,107,754,181,823,224C891.4,267,960,277,1029,234.7C1097.1,192,1166,96,1234,69.3C1302.9,43,1371,85,1406,106.7L1440,128L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>
           */}
             </div>);
};

export default FaqSection;
// style={{position:"absolute",top:"200px"}}
import React, { useState } from 'react';
import { FaAngleRight } from "react-icons/fa";

const faqData = [
  { question: "Is natural wood flooring suitable for the living room?", answer: "Yes, natural wood flooring is a great choice for living rooms because of its warmth and elegance." },
  { question: "Can wooden flooring be installed in kitchens and bathrooms?", answer: "Wooden flooring can be installed in kitchens, but it is not typically recommended for bathrooms due to the moisture." },
  { question: "How do I maintain wooden flooring?", answer: "Regular sweeping, vacuuming, and occasional mopping with a wood-friendly cleaner are recommended." },
  { question: "Is wooden flooring eco-friendly?", answer: "Yes, wooden flooring is considered eco-friendly when sourced from sustainable forests." },
  { question: "Are wooden floors suitable for homes with pets?", answer: "Yes, wooden floors can be suitable for homes with pets, but they may get scratched. Regular maintenance is necessary." },
];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto my-8 mb-16">
      <h2 className="text-2xl font-bold mb-4 text-center">FAQs</h2>
      <div className="space-y-2">
        {faqData.map((item, index) => (
          <div key={index} className="border-b border-slate-200">
            <button
              onClick={() => toggleAccordion(index)}
              className={`w-full flex justify-between items-center text-left p-4 hover:bg-[#3d8e03] rounded-lg ${activeIndex === index ? 'bg-[#3d8e03] text-white' : 'bg-gray-100'} transition-colors duration-300`}
            >
              <span>{index + 1}. {item.question}</span>
              <FaAngleRight
                className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-90' : 'rotate-0'}`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-100 ease-in-out ${activeIndex === index ? 'max-h-40' : 'max-h-0'}`}
            >
              <div className="p-4 text-sm text-slate-500">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accordion;

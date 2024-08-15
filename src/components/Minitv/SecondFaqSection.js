import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const FAQItem = ({ question, answer, isOpen, onToggle }) => (
  <div className="border-b border-[hsla(0,0%,100%,.4)] pb-4">
    <div className="flex items-start justify-between">
      <button className="flex items-center text-left w-full" onClick={onToggle}>
        <span className="text-sm font-bold">{question}</span>
      </button>
      <button onClick={onToggle} className="ml-4">
        {isOpen ? (
          <ExpandLessIcon className="w-5 h-5 text-white" />
        ) : (
          <ExpandMoreIcon className="w-5 h-5 text-white" />
        )}
      </button>
    </div>
    {isOpen && (
      <p className="text-sm md:text-base text-[#717a7b] mt-2">{answer}</p>
    )}
  </div>
);

const SecondFaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-[95%] mx-auto bg-[#070d0e] rounded-lg p-6 md:p-8 mt-6">
      <h2 className="text-white text-xl md:text-xl lg:text-xl mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        <FAQItem
          question="What is miniTV?"
          answer="miniTV is a free video streaming service offering exclusive content including web series, comedy shows, and more."
          isOpen={openIndex === 0}
          onToggle={() => handleToggle(0)}
        />
        <FAQItem
          question="How much does miniTV cost?"
          answer="miniTV is completely free for all users. No subscription or additional fees are required."
          isOpen={openIndex === 1}
          onToggle={() => handleToggle(1)}
        />
        <FAQItem
          question="Where can I watch miniTV?"
          answer="You can watch miniTV on the Amazon shopping app and on Fire TV devices."
          isOpen={openIndex === 2}
          onToggle={() => handleToggle(2)}
        />
        <FAQItem
          question="The features of Amazon miniTV?"
          answer="The platform has a host of exciting features meant to make your viewing experience exceptional."
          isOpen={openIndex === 3}
          onToggle={() => handleToggle(3)}
        />
      </div>
    </div>
  );
};

export default SecondFaqSection;

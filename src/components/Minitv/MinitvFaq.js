import React from "react";
import SecondFaqSection from "./SecondFaqSection";
const MinitvFaq = () => {
  return (
    <div className="bg-[#0f1516] text-white py-8 px-4 mt-6">
      <div className="max-w-[95%] mx-auto bg-[#070d0e] rounded-lg p-6 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="faq-item flex items-start space-x-4">
            <div className="w-1 bg-[#de146d] h-8 md:h-12"></div>
            <div>
              <h3 className="text-md font-bold mb-2">What is miniTV?</h3>
              <p className="text-sm text-[#717a7b]">
                miniTV is a free video streaming service offering exclusive
                content including web series, comedy shows, and more.
              </p>
            </div>
          </div>
          <div className="faq-item flex items-start space-x-4">
            <div className="w-1 bg-[#de146d] h-8 md:h-12"></div>
            <div>
              <h3 className="text-md font-bold mb-2">
                How much does miniTV cost?
              </h3>
              <p className="text-sm text-[#717a7b]">
                miniTV is completely free for all users. No subscription or
                additional fees are required.
              </p>
            </div>
          </div>
          <div className="faq-item flex items-start space-x-4">
            <div className="w-1 bg-[#de146d] h-8 md:h-12"></div>
            <div>
              <h3 className="text-md font-bold mb-2">
                Where can I watch miniTV?
              </h3>
              <p className="text-sm text-[#717a7b]">
                You can watch miniTV on the Amazon shopping app and on Fire TV
                devices.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="faq-item flex items-start space-x-4">
            <div className="w-1 bg-[#de146d] h-8 md:h-12"></div>
            <div>
              <h3 className="text-md font-bold mb-2">
                The features of Amazon miniTV?
              </h3>
              <p className="text-sm text-[#717a7b]">
                The platform has a host of exciting features meant to make your
                viewing experience exceptional.
              </p>
            </div>
          </div>
          <div className="faq-item flex items-start space-x-4">
            <div className="w-2 bg-[#de146d] h-8 md:h-12"></div>
            <div>
              <h3 className="text-md font-bold mb-2">
                How to access Amazon miniTV?
              </h3>
              <p className="text-sm text-[#717a7b]">
                miniTV content is a free, ad-supported video streaming service
                available in India only. miniTV content is accessible on iOS 14
                and above, Android OS version 6 and above
              </p>
            </div>
          </div>
        </div>
      </div>
      <SecondFaqSection/>
    </div>
  );
};

export default MinitvFaq;

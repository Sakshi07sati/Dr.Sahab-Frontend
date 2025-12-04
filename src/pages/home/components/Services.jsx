import React from "react";
import bgimg from "../../../assets/bgimg.png";

import img01 from "../../../assets/service/img01.png";
import img02 from "../../../assets/service/img02.png";
import img03 from "../../../assets/service/img03.png";
import img04 from "../../../assets/service/img04.png";
import img05 from "../../../assets/service/img05.png";
import img06 from "../../../assets/service/img06.png";
import img07 from "../../../assets/service/img07.png";
import img08 from "../../../assets/service/img08.png";
import img09 from "../../../assets/service/img09.png";
import img10 from "../../../assets/service/img10.png";
import img11 from "../../../assets/service/img11.png";
import img12 from "../../../assets/service/img12.png";
import img13 from "../../../assets/service/img13.png";
import img14 from "../../../assets/service/img14.png";
import img15 from "../../../assets/service/img15.png";
import img16 from "../../../assets/service/img16.png";
import img17 from "../../../assets/service/img17.png";
import { CartoonButton } from "../../../components/ui/cartoon-button";

const Services = () => {
  const servicesList = [
    { img: img01, title: "Dental Checkup & X-Rays" },
    { img: img02, title: "Orthodontics (Braces)" },
    { img: img03, title: "Dental Implants" },
    { img: img04, title: "Crowns and Bridges" },
    { img: img05, title: "Root Canal Treatment (RCT)" },
    { img: img06, title: "Teeth Whitening & Bleaching" },
    { img: img07, title: "Teeth Cleaning & Polishing" },
    // { img: img08, title: "Smile Designing" },
    { img: img09, title: "Kids Dentistry" },
    { img: img10, title: "Wisdom Teeth Extraction" },
    { img: img11, title: "Tooth Colored Fillings" },
    { img: img12, title: "Aligners and Gum Surgery" },
    { img: img13, title: "Full Mouth Rehabilitation" },
    { img: img14, title: "Facial Aesthetic" },
    { img: img15, title: "Cosmetic & Laser Dental Treatment" },
    { img: img16, title: "Dental Veneers and Laminates" },
    { img: img17, title: "Digital Dentistry" },
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
            What We Offer
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide painless treatment, advanced technology, and the best
            patient care experience for all your dental needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-2 hover:border-blue-200 transition-all duration-300 cursor-pointer"
            >
              {/* Icon Container */}
              <div className="w-28 h-28 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-20 h-20 object-contain"
                />
              </div>
              
              {/* Title */}
              <h3 className="text-gray-800 font-semibold text-base leading-snug group-hover:text-blue-600 transition-colors min-h-[48px] flex items-center">
                {service.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for?
          </p>
          {/* <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-all shadow-lg hover:shadow-xl">
            Contact Us for More Services
          </button> */}
          <CartoonButton
            label="Contact Us for More Services"
            className="bg-primary text-white font-semibold px-8 py-3 rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
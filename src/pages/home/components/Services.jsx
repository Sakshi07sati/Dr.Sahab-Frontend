import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

// Import your images
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
  { img: img01, title: "Dental Checkup & X-Rays", popular: true, id: "dental-checkup-x-rays" },
  { img: img02, title: "Orthodontics (Braces)", popular: false, id: "orthodontics-braces" },
  { img: img03, title: "Dental Implants", popular: true, id: "dental-implants" },
  { img: img04, title: "Crowns and Bridges", popular: false, id: "crowns-and-bridges" },
  { img: img05, title: "Root Canal Treatment (RCT)", popular: true, id: "root-canal-treatment-rct" },
  { img: img06, title: "Teeth Whitening & Bleaching", popular: true, id: "teeth-whitening-bleaching" },
  { img: img07, title: "Teeth Cleaning & Polishing", popular: false, id: "teeth-cleaning-polishing" },
  { img: img09, title: "Kids Dentistry", popular: false, id: "kids-dentistry" },
  { img: img10, title: "Wisdom Teeth Extraction", popular: false, id: "wisdom-teeth-extraction" },
  { img: img11, title: "Tooth Colored Fillings", popular: false, id: "tooth-colored-fillings" },
  { img: img12, title: "Aligners and Gum Surgery", popular: true, id: "aligners-gum-surgery" },
  { img: img13, title: "Full Mouth Rehabilitation", popular: false, id: "full-mouth-rehabilitation" },
  { img: img14, title: "Facial Aesthetic", popular: false, id: "facial-aesthetic" },
  { img: img15, title: "Cosmetic & Laser Dental Treatment", popular: true, id: "cosmetic-laser-dental-treatment" },
  { img: img16, title: "Dental Veneers and Laminates", popular: false, id: "dental-veneers-laminates" },
  { img: img17, title: "Digital Dentistry", popular: false, id: "digital-dentistry" },
];


  return (
    <div className="py-20 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-4 shadow-sm">
            <Sparkles className="w-4 h-4" />
            <span>What We Offer</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-primary relative">
              Services
              {/* <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-400 rounded-full"></span> */}
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide painless treatment, advanced technology, and the best
            patient care experience for all your dental needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {servicesList.map((service, index) => (
            <Link to={`/services/${service.id}`} key={service.id} className="block">
            <div
              key={index}
              className="group relative bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-3 hover:border-blue-300 transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Popular Badge */}
              {/* {service.popular && (
                <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  Popular
                </div>
              )} */}

              {/* Animated Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon Container with Enhanced Styling */}
              <div className="relative w-28 h-28 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-blue-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-20 h-20 object-contain relative z-10 drop-shadow-lg"
                />
                
                {/* Decorative Corner Element */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Title with Enhanced Styling */}
              <h3 className="relative text-gray-800 font-bold text-base leading-snug group-hover:text-blue-600 transition-colors min-h-[48px] flex items-center mb-3">
                {service.title}
              </h3>

              {/* Hover Arrow Indicator */}
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="flex items-center gap-2 text-blue-600 text-sm font-semibold">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Bottom Border Animation */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
            </div>
          </Link>
          ))} 
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-block bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <p className="text-gray-600 mb-6 text-lg">
              Can't find what you're looking for?
            </p>
            <CartoonButton
              label="Contact Us for More Services"
              to="/appointment"
              className="bg-primary text-white font-semibold px-8 py-3 rounded-xl hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Services;
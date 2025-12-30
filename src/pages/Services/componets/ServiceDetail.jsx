import React from "react";
import { useParams,Link } from "react-router-dom"; // ⚠️ Only if using React Router

import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import img01 from "../../../assets/service/img01.png";
import img02 from "../../../assets/service/img02.png";
import img03 from "../../../assets/service/img03.png";
import img04 from "../../../assets/service/img04.png";
import img05 from "../../../assets/service/img05.png";
import img06 from "../../../assets/service/img06.png";
import Footer from "../../../components/common/Footer";
import Navbar from "../../../components/common/Navbar";
import { servicesData } from "../../../data/servicesData";
import { CartoonButton } from "../../../components/ui/cartoon-button";
import {useState, useEffect } from "react";

const ServiceDetail = () => {
  const { id } = useParams(); // GET dynamic service ID: cosmetic, implants, whitening etc.

    const [currentService, setCurrentService] = useState(servicesData[id]);

    useEffect(()=>{
      setCurrentService(servicesData[id]);
      window.scrollTo({top:100,behavior:"auto"});
    },[id]);

  // const currentService = servicesData[id];

  if (!currentService) {
    return (
      <h1 className="text-center text-3xl font-bold py-10">
        Service Not Found
      </h1>
    );
  }

    const otherServices = Object.entries(servicesData)
    .filter(([key]) => key !== id) // exclude current service
    .map(([key, service]) => ({
      id: key,
      name: service.title,
      href: `/services/${key}`
    }));


  const contactInfo = {
    phone: "+1 234 567 890",
    email: "info@dentalcare.com",
    address: "123 Dental Street, City, State 12345",
  };

  const features = [
    "Dental Implants",
    "Periodontal Care",
    "Teeth Whitening",
    "Cosmetic Dentistry",
    "Oral Surgery",
    "Pediatric Dentistry",
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, url: "#", name: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, url: "#", name: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, url: "#", name: "Instagram" },
    { icon: <Linkedin className="w-5 h-5" />, url: "#", name: "LinkedIn" },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* LEFT SIDE CONTENT */}
            <div className="lg:w-[70%]">
              {/* DYNAMIC IMAGE */}
              <div className="rounded-2xl overflow-hidden mb-8">
                <img
                  src={currentService.image}
                  alt={currentService.title}
                  className="w-full h-[400px] object-cover"
                />
              </div>

              {/* DYNAMIC TITLE */}
              <h1 className="text-4xl md:text-4xl font-bold text-gray-900 mb-6">
                {currentService.title}
              </h1>

              {/* DYNAMIC DESCRIPTION */}
              <div className="space-y-6 mb-8">
                {currentService.description.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 text-base">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="bg-white rounded-2xl py-5 px-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  What We Offer
                </h3>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* <button className="bg-primary hover:bg-blue-800 text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-lg flex items-center gap-2 group">
              Book an Appointment
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button> */}
              <CartoonButton label="Book an Appointment"  to="/appointment" className="w-full py-4 mt-5 text-lg font-bold bg-primary text-white rounded-xl" />
            </div>

            {/* RIGHT SIDE (unchanged) */}
            <div className="lg:w-[30%]">
              <div className="sticky top-28 space-y-6">
                {/* OTHER SERVICES */}
                <div className="bg-[#eaf1fe] rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-3xl text-center font-bold text-gray-900 mb-6">
                    Other Services
                  </h3>
                  <div className="space-y-3">
                    {otherServices.map((service) => (
                      <Link
                        key={service.id}
                        to={service.href}
                        className="w-full bg-primary text-white py-3 px-4 rounded-xl flex items-center justify-between"
                      >
                        <span>{service.name}</span>
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    ))}
                  </div>
                </div>


                <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-lg">
                  {/* Background Image */}
                  <img
                    src="https://demo.awaikenthemes.com/denture/wp-content/uploads/2025/09/service-purpose-img-2.jpg"
                    alt="Doctor"
                    className="w-full h-64 object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center px-4">
                    <h2 className="text-3xl font-bold text-white mb-4">
                      Get In Touch
                    </h2>

                    <div className="flex gap-2">
                      <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full mb-3">
                        <Phone className="w-7 h-7 text-green-600" />
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white">
                          Contact Us
                        </h4>
                        <p className="text-gray-200 text-sm">+1 234 567 890</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Follow Us
                  </h3>
                  <div className="grid grid-cols-4 gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        className="w-12 h-12 bg-primary hover:from-teal-500 hover:to-teal-600 rounded-full flex items-center justify-center text-white transition-all shadow-md hover:shadow-lg hover:scale-110"
                        aria-label={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Contact & Social sections remain SAME */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServiceDetail;

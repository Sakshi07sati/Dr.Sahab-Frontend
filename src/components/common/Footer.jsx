import React from "react";
import { Instagram, Facebook, Youtube, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import logo from '../../assets/drsaab logo.png';


const Footer = () => {

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Appointment", path: "/appointment" },

  ];
   const supportLinks= [
    { name: "Help", path: "/help" },
    { name: "Terms & Conditions", path: "/terms" },
    { name: "Privacy Policy", path: "/privacypolicy" },
    { name: "Contact Us", path: "/contact" },

  ];
  return (
    <footer className="p-5">
      <div className="relative rounded-2xl mx-auto bg-gradient-to-b from-[#1D2236] to-[#2B4CA4] py-5">

        {/* Grid Overlay */}
        {/* <div
          className="w-full h-full absolute inset-0 opacity-50 z-10 rounded-2xl
          bg-[linear-gradient(#ffffff0c_1px,transparent_2px),linear-gradient(90deg,#ffffff0c_1px,transparent_2px)]
          bg-[size:30px_30px]"
        ></div> */}

        {/* Content Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-10 px-6">

          {/* Brand Section */}
          <div className="space-y-2 lg:col-span-4">
           
               <img src={logo} alt="Logo"  className="h-22 w-32 mb-2"/>
           
            <p className="text-gray-300 text-base leading-relaxed max-w-sm">
              Comprehensive dental services, confident smiles through personalized care.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { icon: <Instagram size={20} />, link: "https://www.instagram.com/_doctor.saab_/?utm_source=qr&igsh=MTQ5MmZuNzZlcnlsYg%3D%3D#" },
                { icon: <Facebook size={20} />, link: "#" },
                { icon: <Twitter size={20} />, link: "#" },
                { icon: <Youtube size={20} />, link: "#" },
              ].map((item, i) => (
                <Link
                  key={i}
                  to={item.link}
                  className="w-10 h-10 rounded-full border border-white/30 hover:border-white hover:bg-white/10 flex items-center justify-center text-white transition-all"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold text-white mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white text-base flex items-center gap-2 transition-colors"
                  >
                    <span className="text-blue-300">•</span> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold text-white mb-5">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map(
                (link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-white text-base flex items-center gap-2 transition-colors"
                    >
                      <span className="text-blue-300">•</span> {link.name}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold text-white mb-5">Contact Us</h3>
            <ul className="space-y-3 text-gray-300 text-base">
              <li>📍 Indore, Madhya Pradesh</li>
              <li>📞 +91 98765 43210</li>
              <li>✉️ dentureclinic@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto mt-10 border-t border-white/10">
          <p className="text-center text-gray-300 text-sm py-6">
            Copyright © 2025 Denture. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

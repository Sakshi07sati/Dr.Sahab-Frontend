import React from "react";
import { CartoonButton } from "../../../components/ui/cartoon-button";
import bgimg from "../../../assets/bgimg.png";
import AppointmentForm from "./AppointmentForm";
import hero01 from "../../../assets/hero01.png";
import hero02 from "../../../assets/hero02.png";
import hero03 from "../../../assets/hero03.png";
import hero04 from "../../../assets/hero04.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="h-full px-2 md:pb-[15rem]">
      <div className="relative max-w-7xl rounded-2xl mx-auto bg-gradient-to-t from-[#2B4CA4] to-[#1D2236] px-4 pt-20 pb-20 md:pb-72">
        {/* GRID OVERLAY */}
        <div
          className="w-full h-full absolute inset-0 opacity-50 z-10 rounded-2xl
      bg-[linear-gradient(#ffffff0e_2px,transparent_2px),linear-gradient(90deg,#ffffff0e_2px,transparent_2px)]
      bg-[size:40px_40px]"
        ></div>

        {/* TEXT & CONTENT – NOW ON TOP */}
        <div className="relative z-20 max-w-6xl mx-auto text-center">
          {/* Satisfied Patients Badge */}
          <div className="inline-flex items-center gap-2 bg-[#ffffff28] backdrop-blur-sm px-6 py-2 rounded-full mb-6">
            <div className="flex -space-x-2">
              <div className="w-5 md:w-8 h-5 md:h-8 rounded-full bg-gray-400 border-2 border-white"></div>
              <div className="w-5 md:w-8 h-5 md:h-8 rounded-full bg-gray-400 border-2 border-white"></div>
              <div className="w-5 md:w-8 h-5 md:h-8 rounded-full bg-gray-400 border-2 border-white"></div>
            </div>
            <span className="text-white text-sm md:text-base font-semibold">
              15k Satisfied Patients
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-7xl font-bold tracking-wide text-white mb-6">
            Transforming smiles
            <br />
            with expert care
          </h1>

          {/* Subheading */}
          <p className="text-base md:text-lg text-white max-w-xl font-medium mx-auto mb-8">
            Experience personalized dental treatment designed to restore,
            protect, and enhance your smile with comfort and confidence
          </p>

          {/* CTA Button */}
          {/* <button className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 rounded-full inline-flex items-center gap-2 transition-all">
        Start Your Smile Journey
        <span>→</span>
      </button> */}
          <CartoonButton
            label="Start Your Smile Journey"
            to="/contact"
            className="bg-blue-600 text-sm md:text-lg rounded-2xl font-semibold text-white py-3 px-10"
          />
        </div>

        {/* <div>
          <AppointmentForm />
        </div> */}

        <div
          className="hidden md:block 
      absolute left-1/2 bottom-0 
      -translate-x-1/2 translate-y-1/2 
      w-[80%] h-[29rem]
       rounded-3xl 
      z-30 shadow-lg
    "
        >
          <AppointmentForm />
        </div>
        <motion.img
          src={hero01}
          alt=""
          className="absolute top-10 md:top-40 left-10 w-12 h-12 md:w-20 md:h-20 rounded-3xl z-40"
          initial={{ rotate: 45 }}   // <-- static rotate
          animate={{
            y: [0, -15, 0],          // <-- floating only
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.img
          src={hero02}
          alt=""
          className="absolute bottom-0 md:top-80 right-10 w-14 h-14 md:w-20 md:h-20 rounded-3xl z-40"
          initial={{ rotate: 0 }}   // <-- static rotate
          animate={{
            y: [0, -15, 0],          // <-- floating only
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* <motion.img
  src={hero04}
  alt=""
  className="absolute top-80 right-40 w-20 h-20 rounded-3xl z-50"
  initial={{ rotate: 0 }}   // <-- static rotate
  animate={{
    y: [0, -15, 0],          // <-- floating only
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/> */}




      </div>
    </div>
  );
};

export default Hero;




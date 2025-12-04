import React from "react";
import { CartoonButton } from "../../../components/ui/cartoon-button";
import bgimg from "../../../assets/bgimg.png";
import AppointmentForm from "./AppointmentForm";

const Hero = () => {
  return (
    <div className="h-full pb-[15rem]">
      <div className="relative max-w-7xl rounded-2xl mx-auto bg-gradient-to-t from-[#2B4CA4] to-[#1D2236] pt-20 pb-72">
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
              <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div>
            </div>
            <span className="text-white font-semibold">
              15k Satisfied Patients
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-wide text-white mb-6">
            Transforming smiles
            <br />
            with expert care
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-lg text-white max-w-xl font-medium mx-auto mb-8">
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
            className="bg-blue-600 text-lg rounded-2xl font-semibold text-white py-3 px-10"
          />
        </div>

        <div
          className="
      absolute left-1/2 bottom-0 
      -translate-x-1/2 translate-y-1/2 
      w-[80%] h-[29rem]
       rounded-3xl 
      z-30 shadow-lg
    "
        >
          <AppointmentForm />
        </div>
      </div>
    </div>
  );
};

export default Hero;

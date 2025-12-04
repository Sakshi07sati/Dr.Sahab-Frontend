import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Droplet, Star, Users } from 'lucide-react';

const DentalServicesAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    {
      icon: Calendar,
      title: 'Book An Appointment',
      description: 'The goal of our clinic is to provide friendly, caring dentistry and the highest level of general, cosmetic, ents.',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80'
    },
    {
      icon: Droplet,
      title: 'What Conditions Can Manual Therapy Treat?',
      description: 'Manual therapy is effective for treating various musculoskeletal conditions including back pain, joint stiffness, sports injuries, and chronic pain management.',
      image: 'https://madebydesignesia.com/themes/dentia/images/misc/p3.webp'
    },
    {
      icon: Users,
      title: 'Expert Care',
      description: 'Our team of experienced dental professionals provides comprehensive care using the latest technology and techniques to ensure optimal oral health.',
      image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=80'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [services.length]);

  const handleToggle = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left - Image */}
          <div className="relative h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <img
                  src={services[activeIndex].image}
                  alt={services[activeIndex].title}
                  className="w-full h-full object-cover rounded-3xl"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right - Content */}
          <div className="space-y-8 py-10">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary">
                <span><Star className="w-4 h-4" /></span>
                <span className="text-sm font-semibold tracking-wider uppercase">How It Work</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                <span className="text-primary">What We Do</span> for Your Teeth
              </h2>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                We are committed to sustainability. Our clinic practices eco-friendly initiatives like digital records to reduce paper waste and energy-efficient equipment.
              </p>
            </div>

            {/* Accordion Items */}
            <div className="space-y-4">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isActive = activeIndex === index;
                
                return (
                  <motion.div
                    key={index}
                    initial={false}
                    className={`border-2 rounded-2xl transition-all duration-300 ${
                      isActive 
                        ? 'border-primary bg-blue-50 shadow-lg' 
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    <button
                      onClick={() => handleToggle(index)}
                      className="w-full p-4 flex items-center justify-between text-left"
                    >
                      <div className="flex items-center gap-4">
                        <motion.div
                          animate={{
                            backgroundColor: isActive ? '#273E66' : '#f3f4f6',
                            scale: isActive ? 1.05 : 1
                          }}
                          transition={{ duration: 0.3 }}
                          className="w-12 h-12 rounded-xl flex items-center justify-center"
                        >
                          <Icon 
                            className={`w-6 h-6 ${isActive ? 'text-white' : 'text-gray-700'}`}
                            strokeWidth={2}
                          />
                        </motion.div>
                        
                        <h3 className={`text-lg font-bold ${
                          isActive ? 'text-gray-900' : 'text-gray-800'
                        }`}>
                          {service.title}
                        </h3>
                      </div>
                      
                      <motion.div
                        animate={{ rotate: isActive ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <svg
                          className={`w-6 h-6 ${isActive ? 'text-primary' : 'text-gray-400'}`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 ">
                            <motion.p
                              initial={{ y: -10, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: 0.1, duration: 0.3 }}
                              className="text-gray-600 leading-relaxed"
                            >
                              {service.description}
                            </motion.p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DentalServicesAccordion;
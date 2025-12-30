import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { CartoonButton } from '../../../components/ui/cartoon-button';

const DentistTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      rating: 5,
      text: "Dr. Smith and his team are absolutely wonderful! They made my dental implant procedure completely painless and stress-free.",
      treatment: "Dental Implants"
    },
    {
      id: 2,
      name: "Michael Chen",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      rating: 5,
      text: "Best dental experience I've ever had! The staff is friendly, professional, and the clinic is spotlessly clean.",
      treatment: "Regular Checkup"
    },
    {
      id: 3,
      name: "Emily Davis",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      rating: 5,
      text: "I was terrified of getting braces, but they made the whole process so comfortable. My smile has never looked better!",
      treatment: "Orthodontics"
    },
    {
      id: 4,
      name: "James Wilson",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      rating: 5,
      text: "Professional, caring, and efficient. They transformed my smile with veneers and I couldn't be happier with the results.",
      treatment: "Cosmetic Dentistry"
    },
    {
      id: 5,
      name: "Lisa Anderson",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
      rating: 5,
      text: "The teeth whitening service here is amazing! Quick, painless, and the results are incredible. Highly recommend!",
      treatment: "Teeth Whitening"
    },
    {
      id: 6,
      name: "Robert Taylor",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
      rating: 5,
      text: "After years of dental anxiety, I finally found a dentist I trust. They're patient, gentle, and truly care about their patients.",
      treatment: "Root Canal"
    },
    {
      id: 7,
      name: "Amanda Martinez",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop",
      rating: 5,
      text: "Excellent service from start to finish. The emergency dental care I received was prompt and professional.",
      treatment: "Emergency Care"
    },
    {
      id: 8,
      name: "David Brown",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop",
      rating: 5,
      text: "My kids actually look forward to their dental appointments now! The pediatric team is fantastic with children.",
      treatment: "Pediatric Dentistry"
    }
  ];

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  const TestimonialCard = ({ testimonial }) => (
    <div className="flex-shrink-0 w-72 md:w-96 bg-white rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 mx-4">
      <div className="flex items-start justify-between mb-2 md:mb-4">
        <Quote className="w-10 h-10 text-blue-500 opacity-50" />
        <div className="flex gap-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      </div>
      
      <p className="text-gray-700 text-sm md:text-base mb-2 md:mb-6 leading-relaxed">
        "{testimonial.text}"
      </p>
      
      <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-blue-500"
        />
        <div>
          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
          <p className="text-sm text-blue-600">{testimonial.treatment}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-blue-600">Patients Say</span>
          </h2>
          <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from our happy patients about their experience with our dental care services.
          </p>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto overflow-hidden px-6 py-5">
        {/* First Row - Scrolling Left */}
        <div className="mb-8">
          <motion.div
            className="flex"
            animate={{
              x: [0, -1020],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {duplicatedTestimonials.slice(0, 8).map((testimonial, index) => (
              <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />
            ))}
          </motion.div>
        </div>

        {/* Second Row - Scrolling Right */}
        <div>
          <motion.div
            className="flex"
            animate={{
              x: [-1020, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {duplicatedTestimonials.slice(8).map((testimonial, index) => (
              <TestimonialCard key={`row2-${index}`} testimonial={testimonial} />
            ))}
          </motion.div>
        </div>

        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-12 md:w-32 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
        <div className="absolute top-0 right-0 w-12 md:w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16">
        {/* <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
          Book Your Appointment Today
        </button> */}
        <CartoonButton label="Book Your Appointment Today" to="/appointment" className='py-3 px-6 rounded-lg bg-primary font-medium text-white text-lg' />
      </div>
    </div>
  );
};

export default DentistTestimonials;
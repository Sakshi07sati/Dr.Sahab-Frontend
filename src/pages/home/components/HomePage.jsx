import React from 'react';
import { Calendar, Shield, Award, Clock, Star, ArrowRight, Phone, Mail } from 'lucide-react';
import { CartoonButton } from '../../../components/ui/cartoon-button';

export default function HomePage() {
  const services = [
    {
      title: 'General Dentistry',
      description: 'Routine checkups, cleanings, and preventive care for healthy teeth.',
      icon: Shield
    },
    {
      title: 'Cosmetic Dentistry',
      description: 'Whitening, veneers, and smile makeovers to enhance your appearance.',
      icon: Star
    },
    {
      title: 'Emergency Care',
      description: '24/7 emergency dental services for urgent dental problems.',
      icon: Clock
    },
    {
      title: 'Orthodontics',
      description: 'Braces and aligners to straighten teeth and correct bite issues.',
      icon: Award
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      text: 'The best dental experience I\'ve ever had! Professional, caring, and painless.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      text: 'Dr. Smith and the team made me feel comfortable throughout my treatment.',
      rating: 5
    },
    {
      name: 'Emily Davis',
      text: 'Highly recommend! They transformed my smile and boosted my confidence.',
      rating: 5
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="w-full bg-[#F7FBFF] py-20 px-6 md:px-20">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
    
    {/* Left Section */}
    <div className="space-y-6">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
        Bright Smiles,  
        <span className="text-blue-600"> Better Lives</span>
      </h1>

      <p className="text-gray-600 text-lg">
        Experience world-class dental care with advanced technology, expert dentists, and a stress-free environment.
      </p>

      <div className="flex gap-4 mt-4">
        <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700">
          Book Appointment
        </button>
        <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg shadow hover:bg-gray-100">
          View Services
        </button>
      </div>
      <CartoonButton 
  label="Click me!" 
  className="bg-red-500 rounded-md py-2 px-6 text-xl font-bold border border-black text-white" 
  onClick={() => alert('Button clicked!')}
/>

    </div>

    {/* Right Image */}
    <div className="flex justify-center">
      <img
        src="https://img.freepik.com/free-photo/portrait-dentist-holding-dental-tools_23-2149382135.jpg"
        alt="Dentist"
        className="rounded-xl shadow-lg w-full max-w-md"
      />
    </div>

  </div>
</div>


      {/* Stats Section */}
    <div className="py-16 px-6 md:px-20 bg-white">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Clinic?</h2>
    <p className="text-gray-600 max-w-2xl mx-auto mb-12">
      We provide painless treatment, advanced technology, and the best patient care experience.
    </p>

    <div className="grid md:grid-cols-3 gap-10 mt-10">
      <div className="p-6 bg-[#F7FBFF] rounded-xl shadow">
        <h3 className="text-xl font-semibold text-blue-600">Modern Equipment</h3>
        <p className="text-gray-600 mt-2">Latest tools & digital scanning for accurate treatments.</p>
      </div>

      <div className="p-6 bg-[#F7FBFF] rounded-xl shadow">
        <h3 className="text-xl font-semibold text-blue-600">Experienced Dentists</h3>
        <p className="text-gray-600 mt-2">Our specialists have 10+ years of experience.</p>
      </div>

      <div className="p-6 bg-[#F7FBFF] rounded-xl shadow">
        <h3 className="text-xl font-semibold text-blue-600">Comfort Focused</h3>
        <p className="text-gray-600 mt-2">Zero pain, zero fear — totally relaxed treatment.</p>
      </div>
    </div>
  </div>
</div>


      {/* Services Section */}
      <div className="py-16 px-6 md:px-20 bg-[#F9FAFB]">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
      Our Popular Treatments
    </h2>

    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-white rounded-xl shadow p-5">
        <img src="https://img.freepik.com/free-photo/close-up-beautiful-smile_144627-27449.jpg" className="rounded-lg mb-4" />
        <h3 className="font-semibold text-xl text-gray-900">Teeth Whitening</h3>
        <p className="text-gray-600 mt-2">Get brighter teeth with our advanced laser whitening.</p>
      </div>

      <div className="bg-white rounded-xl shadow p-5">
        <img src="https://img.freepik.com/free-photo/close-up-beautiful-smile_144627-27449.jpg" className="rounded-lg mb-4" />
        <h3 className="font-semibold text-xl text-gray-900">Root Canal</h3>
        <p className="text-gray-600 mt-2">Painless root canal treatment using modern techniques.</p>
      </div>

      <div className="bg-white rounded-xl shadow p-5">
        <img src="https://img.freepik.com/free-photo/close-up-beautiful-smile_144627-27449.jpg" className="rounded-lg mb-4" />
        <h3 className="font-semibold text-xl text-gray-900">Dental Implants</h3>
        <p className="text-gray-600 mt-2">Restore missing teeth with natural-looking implants.</p>
      </div>
    </div>
  </div>
</div>


      {/* Why Choose Us Section */}
    

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Patients Say</h2>
            <p className="text-xl text-gray-600">Trusted by thousands of satisfied patients</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <p className="font-bold text-gray-900">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready for Your Best Smile?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join thousands of happy patients and experience exceptional dental care
          </p>
          <button className="bg-white text-indigo-600 px-10 py-4 rounded-lg hover:bg-indigo-50 transition-all font-bold text-lg shadow-xl">
            Book Your Appointment Today
          </button>
        </div>
      </section>
    </div>
  );
}
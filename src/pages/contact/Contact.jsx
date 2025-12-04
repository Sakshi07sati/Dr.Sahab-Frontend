import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare } from 'lucide-react';
import Footer from '../../components/common/Footer';
import Navbar from '../../components/common/Navbar';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      info: '123 Dental Street, Medical Plaza',
      subInfo: 'New York, NY 10001'
    },
    {
      icon: Phone,
      title: 'Call Us',
      info: '(+0) 789-345-601',
      subInfo: 'Mon-Sat: 9AM to 9PM'
    },
    {
      icon: Mail,
      title: 'Email Us',
      info: 'Domain@gmail.com',
      subInfo: 'We reply within 24 hours'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      info: 'Mon to Sat: 9AM - 9PM',
      subInfo: 'Sunday: Closed'
    }
  ];

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary/10 to-primary/5 py-20">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span className="text-sm font-semibold tracking-wider uppercase">Get In Touch</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Have questions about our dental services? We're here to help! Reach out to us and our friendly team will get back to you as soon as possible.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="container mx-auto px-6 max-w-7xl -mt-12 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-primary" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-700 font-medium">{item.info}</p>
                <p className="text-gray-500 text-sm mt-1">{item.subInfo}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Main Contact Section */}
      <div className="container mx-auto px-6 max-w-7xl pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Map & Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Map */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6173703139517!2d-73.98784668459395!3d40.74844097932881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Dental Clinic Location"
              ></iframe>
            </div>

            {/* Why Choose Us Card */}
            <div className="bg-primary rounded-3xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Why Choose Our Clinic?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>Expert team with 20+ years of experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>State-of-the-art dental technology</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>Comfortable and relaxing environment</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>Flexible appointment scheduling</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>Affordable and transparent pricing</span>
                </li>
              </ul>
            </div>

            {/* Emergency Contact */}
            {/* <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-6">
              <h3 className="text-xl font-bold text-red-800 mb-2 flex items-center gap-2">
                <span className="text-2xl">🚨</span>
                Dental Emergency?
              </h3>
              <p className="text-red-700 mb-3">
                For urgent dental care, call us immediately:
              </p>
              <a href="tel:+1234567890" className="text-2xl font-bold text-red-600 hover:text-red-700">
                (+0) 789-345-601
              </a>
            </div> */}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-xl"
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Send Us a Message</h2>
              <p className="text-gray-600">Fill out the form below and we'll get back to you shortly</p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Subject</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your inquiry..."
                  rows="5"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-primary text-white py-4 rounded-xl font-semibold text-lg hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Send size={20} />
                Send Message
              </button>
            </div>
          </motion.div>

        

        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ContactPage;
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare } from "lucide-react";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { createContact } from "../../global_redux/features/contact/contactThunk";
import { toast } from "react-hot-toast";

const ContactPage = () => {
  const dispatch = useDispatch();
  const { loading, successMessage, error } = useSelector((state) => state.contact);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
    }
    if (error) {
      toast.error(error);
    }
  }, [successMessage, error]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createContact(formData)).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      info: "123 Dental Street, Medical Plaza",
      subInfo: "New York, NY 10001",
    },
    {
      icon: Phone,
      title: "Call Us",
      info: "(+0) 789-345-601",
      subInfo: "Mon-Sat: 9AM to 9PM",
    },
    {
      icon: Mail,
      title: "Email Us",
      info: "domain@gmail.com",
      subInfo: "We reply within 24 hours",
    },
    {
      icon: Clock,
      title: "Working Hours",
      info: "Mon to Sat: 9AM - 9PM",
      subInfo: "Sunday: Closed",
    },
  ];

  return (
    <>
      <Navbar />
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
                <span className="text-sm font-semibold tracking-wider uppercase">
                  Get In Touch
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Contact <span className="text-primary">Us</span>
              </h1>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Have questions about our dental services? We're here to help!
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
            {/* Left: Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?..."
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Clinic Location"
                ></iframe>
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-xl"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  Send Us a Message
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you shortly
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary outline-none"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary outline-none"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Phone Number (optional)
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary outline-none"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    rows="5"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary outline-none resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary text-white py-4 rounded-xl font-semibold text-lg hover:bg-primary/90 transition flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <div className="animate-spin h-6 w-6 border-2 border-white border-t-transparent rounded-full"></div>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;

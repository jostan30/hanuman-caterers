"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation, Car, Train } from "lucide-react";

export default function FindUs() {
  const transportOptions = [
    { icon: Car, label: "Free Parking Available", detail: "On-site parking for 10+ vehicles" },
    { icon: Train, label: "Andheri Station", detail: "15 minutes walk from station" },
    { icon: Navigation, label: "Easy Navigation", detail: "Well-connected by all major roads" }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(251,146,60,0.03)_0%,transparent_50%),radial-gradient(circle_at_30%_70%,rgba(239,68,68,0.03)_0%,transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-2 mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <MapPin className="w-4 h-4 text-orange-600" />
            <span className="text-orange-700 font-medium text-sm">Location</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-orange-600 bg-clip-text text-transparent">
              Visit Our Kitchen
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Come experience our authentic flavors or get directions to our centrally located kitchen
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Enhanced Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Address Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl shadow-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Address</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Shop No. 1, Tripta Sadan Bldg, <br />
                    Shanta Wadi, J.P. Road, Mahar, <br />
                    Andheri West, Mumbai, Maharashtra 400058
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl shadow-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Contact Us</h3>
                  <div className="space-y-2">
                    <p className="text-gray-600">Call us for inquiries & bookings</p>
                    <a 
                      href="tel:+919876543210" 
                      className="inline-block text-lg font-semibold text-orange-600 hover:text-orange-700 transition-colors"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl shadow-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Business Hours</h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Saturday</span>
                      <span className="font-medium">9:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-medium">10:00 AM - 9:00 PM</span>
                    </div>
                  </div>
                  <div className="mt-3 inline-flex items-center space-x-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span>Currently Open</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Transport Options */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {transportOptions.map((option, index) => {
                const Icon = option.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center hover:bg-gray-100 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    <Icon className="w-5 h-5 text-orange-600 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-900">{option.label}</p>
                    <p className="text-xs text-gray-500 mt-1">{option.detail}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Enhanced CTA Button */}
            <motion.a
              href="https://maps.app.goo.gl/wPxfRiZ2sjGi9q3S6"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.8 }}
              />
              <MapPin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              <span className="relative z-10">Open in Google Maps</span>
            </motion.a>
          </motion.div>

          {/* Right: Enhanced Map */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-white rounded-3xl p-4 shadow-2xl">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.6030301087256!2d72.84403128712357!3d19.123070956463238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9d6c9d50ac9%3A0xd0c5a5660ac84092!2sShree%20Hanuman%20Caterers!5e0!3m2!1sen!2sin!4v1756636888502!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: "0" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                />
                
                {/* Map overlay info */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-gray-800">Hanuman Caterers</span>
                  </div>
                </div>
              </div>
              
              {/* Map decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-orange-400 to-red-400 rounded-full opacity-10" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-red-400 to-orange-400 rounded-full opacity-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
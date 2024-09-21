/* eslint-disable no-unused-vars */
// hah om sai ram om bhaskaraaya namaha om namaha sivayaa

import React from 'react';
import { FaEnvelope, FaPhone, FaWhatsapp, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'; // Importing Icons

const ContactSection = () => {
  return (
    <section className="bg-tertiary py-16">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-azure text-[28px] font-bold font-montserrat mb-8">
          Contact Us
        </h2>

        <div className="flex justify-between items-center mb-8">
          {/* Contact Icons */}
          <div className="w-[40%] text-left space-y-4">
            {/* Email */}
            <div className="flex items-center">
              <FaEnvelope className="text-azure mr-4" />
              <span className="text-black font-semibold">pravinkumarharathi@gmail.com</span>
            </div>
            {/* Phone */}
            <div className="flex items-center">
              <FaPhone className="text-azure mr-4" />
              <span className="text-black font-semibold">+91 9704195861</span>
            </div>
            {/* Social Media Icons */}
            <div className="flex space-x-6 mt-4">
              <FaWhatsapp className="text-azure hover:text-saffron transition duration-300" />
              <FaInstagram className="text-azure hover:text-saffron transition duration-300" />
              <FaLinkedin className="text-azure hover:text-saffron transition duration-300" />
              <FaYoutube className="text-azure hover:text-saffron transition duration-300" />
            </div>
          </div>

          {/* Dummy Text */}
          <div className="w-[50%] text-left">
            <p className="text-black text-[16px] font-montserrat">
             Pravin Kumar Palavalasa <br></br>
             Indian Institute of Technology Kharagpur<br></br>
             Kharagpur, West Bengal</p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-black font-montserrat text-[16px]">
            © 2024 Made with <span className="text-red-600 text-[18px]">♥</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

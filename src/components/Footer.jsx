import React from 'react';
import { FaPhone, FaFacebook, FaInstagram, FaTelegram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.div
      className="bg-gradient-to-r from-[#f19509] to-[#e86f00] pt-12 pb-8 text-white pl-20"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 10,
        delay: 1,
      }}
    >
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Company details section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 25,
              delay: 1.2,
            }}
          >
            <h1 className="text-3xl font-bold uppercase text-white">Coders Coffee</h1>
            <p className="text-sm max-w-[300px] text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <div>
              <p className="flex items-center gap-2 text-white">
                <FaPhone /> +1 (123) 456-7890
              </p>
              <p className="flex items-center gap-2 mt-2 text-white">
                Noida, Uttar Pradesh
              </p>
            </div>
          </motion.div>

          {/* Footer Links section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 25,
              delay: 1.4,
            }}
          >
            <h1 className="text-3xl font-bold text-white">Quick Links</h1>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <ul className="space-y-2 text-[#f1dabf]">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2 text-[#f1dabf]">
                  <li>Terms & Conditions</li>
                  <li>Careers</li>
                  <li>FAQ</li>
                  <li>Blog</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Social Links section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 25,
              delay: 1.6,
            }}
          >
            <h1 className="text-3xl font-bold text-white">Follow Us</h1>
            <div className="flex items-center gap-3">
              <FaFacebook className="text-3xl hover:scale-105 duration-300" />
              <FaInstagram className="text-3xl hover:scale-105 duration-300" />
              <FaTelegram className="text-3xl hover:scale-105 duration-300" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Copyright section */}
      <motion.p
        className="text-[#f1dabf] text-center mt-8 pt-8 border-t-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.8,
        }}
      >
        Copyright &copy; 2025 Coders Coffee. All rights reserved.
      </motion.p>
    </motion.div>
  );
};

export default Footer;

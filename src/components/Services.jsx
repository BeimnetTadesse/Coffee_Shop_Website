import React from "react";
import { motion } from "framer-motion";
import Coffee1 from "../assets/coffee1.png";
import Coffee3 from "../assets/coffee3.png";

const servicesData = [
  {
    id: 1,
    image: Coffee1,
    title: "Black Coffee",
    subtitle: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    image: Coffee3,
    title: "Hot Coffee",
    subtitle: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    image: Coffee1,
    title: "Cold Coffee",
    subtitle: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 10,
      ease: "easeInOut",
    },
  },
};

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.6,
      staggerChildren: 0.4,
    },
  },
};

function Services() {
  return (
    <div className="container my-16 space-y-4 ml-32">
      {/* header section */}
      <div className="text-center max-w-lg mx-auto space-y-2">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.2,
          }}
          className="text-3xl font-bold text-[#1a1f25]"
        >
          Fresh and <span className="text-[#f19509]">Tasty coffees</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.4,
          }}
          className="text-2rem opacity-50 right-10"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi, sed tristique sapien nec, vehicula nunc consectetur
          adipiscing eli adipiscing elit.
        </motion.p>
      </div>

      {/* card section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ amount: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {servicesData.map((service) => (
          <motion.div
            key={service.id}
            variants={cardVariants}
            className="text-center p-4 space-y-6"
          >
            <img
              src={service.image}
              alt={service.title}
              className="img-shadow2 max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer"
            />
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-[#f19509]">
                {service.title}
              </h1>
              <p className="text-[#272c35] max-w-[230px] mx-auto break-words">
                {service.subtitle}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Services;

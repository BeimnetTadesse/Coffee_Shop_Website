import React from "react";
import bannerImg from "../assets/coffee-cover.jpg";
import AppStoreImg from "../assets/app_store.png";
import PlayStoreImg from "../assets/play_store.png";
import { motion } from "framer-motion";

const BannerStyle = {
  backgroundImage: `url(${bannerImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100%",
  width: "100%",
  display: "flex", // Added flex display
  flexDirection: "row-reverse", // Added row-reverse
  alignItems: "center", // Added align-items
};

const AppBanner = () => {
  return (
    <div className="container my-14 ml-20">
      <div style={BannerStyle} className="sm:min-h-[400px] rounded-xl">
        <div className="space-y-6 max-w-xl pr-30">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            className="text-2xl sm:text-4xl font-semibold"
          >
            Download the app
          </motion.h1>
          <motion.p 
           initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.3,
            }}
          className="sm:px-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Officiis
          </motion.p>
          {/* Images link */}
          <div className="flex justify-start items-center gap-4 mt-6">
            <a
              href="#"
              className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
            >
              <motion.img 
               initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.4,
            }}
              src={AppStoreImg} alt="App Store" />
            </a>
            <a
              href="#"
              className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
            >
              <motion.img 
               initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.5,
            }}
              src={PlayStoreImg} alt="Play Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBanner;

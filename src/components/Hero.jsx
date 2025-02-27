import React from "react";
import BgImage from "../assets/bg-slate.png";
import CoffeMain from "../assets/black.png";
import NavBar from "./NavBar";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

function Hero() {
  const [sideBar, setSideBar] = React.useState(false);

  // Function to handle image click and reload
  const handleImageClick = () => {
    window.location.reload(); // Reload the page when the image is clicked
  };

  return (
    <main className=" bg-white" style={bgImage}>
      <section className="relative min-h-[750px] w-full ">
        <div className=" min-h-screen flex justify-center items-center">
          {/* NavBar Section */}
          <NavBar sideBar={sideBar} setSideBar={setSideBar} />
          {/* Hero Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px] ml-14px">
            {/* textContent section */}
            <div className="text-[#f1dabf] mt-[100px] md:mt-0 p-4 space-y-28">
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1,
                }}
                className="text-7xl font-bold leading-tight ml-14"
              >
                Blvck Tumbler
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.2,
                }}
                className="relative pl-10"
              >
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl">Black Lifestyle Lovers </h1>
                  <h1 className="text-2rem opacity-55 leading-loose">
                    Lorem ipsum dolor sit amet, consectetur adipiscing erusa
                    elit.
                    <br />
                    Nulla facilisi, sed tristique sapien nec, vehicula nunc sed
                    tristique sapien nec, sed tristique sapien nec, vehicula .{" "}
                  </h1>
                </div>
                <div className="absolute pl-10 -top-6 left-0 w-[250px] h-[190px] bg-gray-700/25">
                  {" "}
                </div>
              </motion.div>
            </div>
            {/* Hero image section */}
            <div className="relative ">
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.4,
                }}
                src={CoffeMain}
                className="relative z-40 h-[400px] md:h-[700px] img-shadow"
                onClick={handleImageClick} // Add click handler here
              />
              {/* Orange circle ring  */}
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className=" h-[180px] w-[180px] absolute top-24 -right-16 border-orange-500 border-[20px] rounded-full z-10"
              ></motion.div>
              {/*Big text section  */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className="absolute -top-14 left-[235px] z-[1]"
              >
                <h1 className="text-[140px] scale-150 font-bold text-[#1a1f25]/40 leading-none">
                  Blvck Tumbler
                </h1>
              </motion.div>
            </div>
            {/* Third div section */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 1.2,
              }}
              className="text-[#f1dabf] mt-[100px] md:mt-0 p-4 space-y-28"
            >
              <h1 className="opacity-0 text-7xl font-bold leading-tight ml-14 ">
                Blvck Tumbler
              </h1>
              <div className="relative pl-10">
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl">Blvck Tumbler </h1>
                  <h1 className="text-2rem opacity-55 leading-loose">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <br />
                    Nulla facilisi, sed tristique sapien nec, vehicula nunc.{" "}
                  </h1>
                </div>
                <div className="absolute -top-6 right-10 w-[250px] h-[190px] bg-black/25"></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* sideBar menu */}
        {sideBar && (
          <motion.div 
          initial= {{ x: "100%"}}
          whileInView={{x:0}}
          className="absolute top-0 right-0 w-[140px] h-full bg-gradient-to-b from-[#f19509]/80 to-[#e86f00]/80 backdrop-blur-sm z-10 flex justify-center">
            <div className="flex flex-col justify-center items-center gap-6 text-white">
              {/* Top Line */}
              <div className="w-[1px] h-[70px] bg-white"></div>

              {/* Social Icons */}
              <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                <FaFacebookF className="text-2xl" />
              </div>

              <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                <FaTwitter className="text-2xl" />
              </div>

              <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                <FaInstagram className="text-2xl" />
              </div>

              {/* Bottom Line */}
              <div className="w-[1px] h-[70px] bg-white"></div>
            </div>
          </motion.div>
        )}
      </section>
    </main>
  );
}

export default Hero;

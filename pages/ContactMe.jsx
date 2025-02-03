import React, { useRef, useState, useEffect } from "react";
import Lottie from "lottie-react";
import rightSide from "../src/assets/partten1.json";
import MailComponent from "../src/contactMeComponents/MailComponent";
import PhoneComponent from "../src/contactMeComponents/PhoneComponent";
import CelanderComponent from "../src/contactMeComponents/CelanderComponent";
import LocationComponent from "../src/contactMeComponents/LocationComponent";
import FormComponet from "../src/contactMeComponents/FormComponent";
import MapComponent from "../src/contactMeComponents/MapComponent";
import { motion } from "framer-motion";
import { animationVariants } from "../src/animationVariants";
import myimg from "../src/assets/myphoto.png"

export const ContactMe = () => {
  const [isInfoVisible, setIsInfoVisible] = useState(false);
  const animationRef = useRef(null);
  const stopAtTime = 36;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (animationRef.current) {
        animationRef.current.setSpeed(1);
        animationRef.current.goToAndStop(stopAtTime, true);
      }
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const isDesktop = window.matchMedia("(min-width: 768px)").matches;
      if (isDesktop) {
        setIsInfoVisible(true); 
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleInfoSection = () => {
    setIsInfoVisible(!isInfoVisible);
  };

  return (
    <div className="h-full w-full md:mt-4 grid grid-cols-1 md:grid-cols-4 md:gap-4 bg-white justify-between px-4  py-16 space-y-4 md:space-y-0">
      {/* Left Section (Profile and Contact Info) */}
      <section className="col-span-1 bg-gray-50 border-2 overflow-hidden border-gray-300 rounded-lg shadow-lg flex flex-col items-center relative">
        {/* First Part - Photo, Name, and Profession */}
        <div className="w-full flex flex-row items-center  md:flex-col md:justify-center md:items-center ">
          <motion.div
            initial="clipHidden"
            whileInView="clipVisible"
            exit="clipExit"
            viewport={{ once: false, amount: 0.4 }}
            variants={animationVariants}
            className="relative flex items-center justify-center w-40 h-40 sm:w-64 sm:h-64"
          >
            <Lottie
              animationData={rightSide}
              autoplay={true}
              loop={true}
              lottieRef={animationRef}
              className="absolute w-full h-full"
            />
            <img
              src={myimg}
              alt="Profile"
              className="z-20 rounded-full border-4  border-white w-36 h-36 sm:w-60 sm:h-60 object-cover rotate-6 pt-2"
            />
          </motion.div>
          <div className="flex flex-col items-center justify-center text-center sm:items-start sm:text-left">
            <h1 className="text-2xl text-gray-800 font-semibold px-4 sm:text-3xl">
              Tushar
            </h1>
            <p className="mt-2 text-sm text-gray-700 px-4">Web Developer</p>
          </div>
        </div>

        {/* Toggle Button (Hidden on Medium Screens and Larger) */}
        <div className="absolute top-4 right-4 md:hidden">
          <button
            onClick={toggleInfoSection}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md"
          >
            {isInfoVisible ? "Hide Info" : "Show Info"}
          </button>
        </div>

        <hr className="w-[90%] border-gray-400 mt-6" />

        {/* Second Part - Contact Info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.4 }}
          variants={animationVariants}
          className={`w-full space-y-6 mt-6 px-4 py-2  ${
            isInfoVisible || window.innerWidth >= 768 ? "block" : "hidden"
          }`}
        >
          {/* Mail */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-800 rounded-full flex justify-center items-center text-white shadow-md">
              <MailComponent />
            </div>
            <div className="text-sm">
              <h3 className="font-medium">Mail</h3>
              <p className="text-gray-600">tusharkumar888219@gmail.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-800 rounded-full flex justify-center items-center text-white shadow-md">
              <PhoneComponent />
            </div>
            <div className="text-sm">
              <h3 className="font-medium">Phone</h3>
              <p className="text-gray-600">+(91)-8882-192-2226</p>
            </div>
          </div>

          {/* Birthday */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-800 rounded-full flex justify-center items-center text-white shadow-md">
              <CelanderComponent />
            </div>
            <div className="text-sm">
              <h3 className="font-medium">Birthday</h3>
              <p className="text-gray-600">18 April, 2001</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-800 rounded-full flex justify-center items-center text-white shadow-md">
              <LocationComponent />
            </div>
            <div className="text-sm">
              <h3 className="font-medium">Location</h3>
              <p className="text-gray-600">Sunder Nagri, Delhi, India</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Right Section */}
      <section className="col-span-3 bg-white border-2 border-gray-300 rounded-xl p-6 shadow-lg">
        <div className="text-3xl font-semibold text-gray-800">
          <p>Contact Me</p>
          <div className="w-16 h-[6px] bg-red-600 rounded-lg mb-6"></div>
        </div>

        {/* Map */}
        <div className="w-full md:h-[380px] h-64 border-2 border-gray-300 rounded-xl relative mb-6">
          <MapComponent />
        </div>

        {/* Form */}
        <div className="space-y-6">
          <FormComponet />
        </div>
      </section>
    </div>
  );
};

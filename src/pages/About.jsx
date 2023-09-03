import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth }}
        className="flex flex-col w-full justify-center min-h-screen items-center "
      >
        <Hero />
      </motion.div>
      <Footer />
    </>
  );
};

export default About;

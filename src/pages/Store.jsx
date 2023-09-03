import React from "react";
import SideBar from "../components/SideBar";
import GameList from "../components/GameList";
import Footer from "../components/Footer";
import { useGames } from "../constants/context/Context";
import { motion } from "framer-motion";

const Store = () => {
  return (
    <>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth }}
        className="flex mt-2 gap-3 mb-7 min-h-screen"
      >
        <SideBar />
        <GameList />
      </motion.div>
      <Footer />
    </>
  );
};

export default Store;

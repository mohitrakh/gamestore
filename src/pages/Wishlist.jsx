import React from "react";
import { useGames } from "../constants/context/Context";
import GameCard from "../components/GameCard";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
motion;
const Wishlist = () => {
  const { wishlist } = useGames();
  let wishlistGames = [...new Set(wishlist)];

  if (wishlistGames.length === 0) {
    return (
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: "100%" }}
        className="min-h-screen flex justify-center"
      >
        <div className="flex flex-col items-center mt-8">
          <img src="assets/heartBroken.svg" alt="" />
          <h1 className="text-white text-5xl font-bold">No Game in Wishlist</h1>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col gap-6">
      <div className="mx-4 flex flex-col gap-4">
        <h1 className="text-[#E1E1E1] font-bold text-5xl">Wishlist</h1>

        <div className="mt-1 grid grid-cols-1 lg:grid-cols-4 gap-4 md:grid-cols-2">
          {wishlistGames.map((game) => {
            return <GameCard game={game} key={game.id} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Wishlist;

import React, { useEffect, useState } from "react";
import games from "../constants/game";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { useGames } from "../constants/context/Context";
import { motion } from "framer-motion";
const GameCard = ({ game }) => {
  const { setWishlist, wishlist } = useGames();
  const location = useLocation();
  const [selected, setSelected] = useState(false);
  const wishlistadd = () => {
    setSelected(true);
    localStorage.setItem("selected", "true");
    if (localStorage.getItem(selected) === "true") {
      alert("gameid.");
    }
    if (wishlist.includes(game)) {
      setSelected(true);
    } else {
      setWishlist([...wishlist, game]);
      setSelected(true);
    }
  };

  const wishlistremove = () => {
    setSelected(false);
    let newlist = wishlist.filter((item) => item.id !== game.id);
    setWishlist(newlist);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="gameCard text-[#E1E1E1] rounded-lg flex flex-col gap-2 bg-[#1E1E1E]"
    >
      <div className="object-contain">
        {game?.pictures.banner ? (
          <img className="gameImg w-full" src={game.pictures.banner} alt="" />
        ) : (
          <h1 className="text-white">nope nope</h1>
        )}
      </div>
      <div className="px-2 flex flex-col gap-12 py-3">
        <div className="flex justify-between font-bold">
          <h1 className="text-[18px]">{game.name}</h1>
          <p
            className={`${
              game.rating > 4 ? "bg-green-600" : "bg-yellow-500"
            } px-1 text-[18px] rounded-lg`}
          >
            {game.rating}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-bold text-xl">₹{game.price}</p>
          <div className="flex gap-2 items-center">
            {!selected ? (
              <BsHeart onClick={wishlistadd} className={`heartIcon text-2xl`} />
            ) : (
              <BsHeartFill
                onClick={wishlistremove}
                className={`heartIcon text-2xl`}
              />
            )}

            <Link
              to={`/store/${game.id}`}
              className="cartBtn w-28 rounded-lg font-bold py-1 flex justify-center"
            >
              Add to cart
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GameCard;

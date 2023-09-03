import { AiOutlineClose } from "react-icons/ai";
import React, { useState } from "react";
import { useGames } from "../constants/context/Context";
import { BsCart } from "react-icons/bs";
import games from "../constants/game";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const Cart = () => {
  const { newCart, cart, removeItem } = useGames();
  console.log(cart);
  let totalPrice = cart?.reduce(
    (accumulator, cart) => accumulator + parseFloat(cart.price),
    0
  );

  if (cart.length === 0) {
    return (
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth }}
        className="min-h-[100vh]"
      >
        <div className=" max-w-3xl mx-auto mb-[30rem] px-4 mt-6 flex flex-col items-center justify-center gap-3">
          <img className="w-36" src="assets/emptyCart.svg" alt="" />
          <h1 className="text-5xl font-bold text-[#e1e1e1]">
            No Items in Cart!!
          </h1>
        </div>
        <Footer />
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className=" max-w-3xl mx-auto px-4 mt-6 flex flex-col gap-3">
        <div>
          <h1 className="text-5xl text-[#e1e1e1] font-bold flex">
            Cart <BsCart />
          </h1>
        </div>
        <div className="flex flex-col gap-3">
          {cart?.map((cart) => {
            return (
              <div
                key={cart.id - 1}
                className="bg-[#1e1e1e] flex items-center  rounded-md px-2 py-2 justify-between"
              >
                <div className="flex items-center w-44 gap-2">
                  <img src={games[cart.id - 1].pictures.banner} alt="" />
                  <h1 className="text-[#e1e1e1] font-bold">
                    {games[cart.id - 1].name}
                  </h1>
                </div>
                <div className="flex gap-3">
                  <p className="text-[#e1e1e1] font-bold">
                    ₹{games[cart.id - 1].price}
                  </p>
                  <button
                    onClick={() => removeItem(cart.id)}
                    className="bg-red-500 w-8 h-8 flex justify-center items-center rounded-lg"
                  >
                    <AiOutlineClose className="text-2xl text-white" />{" "}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <hr />
        <div className="flex justify-between text-[#e1e1e1] font-bold">
          <h1>Total:</h1>
          <h1> ₹{totalPrice}</h1>
        </div>
        <button className="w-full h-12 text-2xl font-bold cartBtn">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Cart;

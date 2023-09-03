import React from "react";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="lg:max-w-4xl flex flex-col gap-9 text-white mx-4">
      <div className="flex flex-col gap-7 px-3">
        <h1 className="text-5xl font-bold text-white">
          Welcome to our Game Store! 🎮
        </h1>
        <p className="text-[#808080]">
          Step into a world of limitless gaming possibilities and immerse
          yourself in thrilling adventures. Whether you're a casual player or a
          die-hard gamer, we've got you covered with a vast collection of games
          for all platforms. Join us on this gaming journey at unbeatable
          prices, only at our Game Store. Your gaming dreams are just a click
          away!
        </p>
        <div className="flex items-center gap-5">
          <Link to={"/store"} className=" text-center storeBtn w-36  py-3 ">
            OPEN STORE
          </Link>
          <a className="cursor-pointer" href="">
            <BsGithub className="text-5xl" />
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl font-bold">Tech-stack used:</h1>
        <div className="flex justify-around">
          <img className="w-32" src="assets/reactLogo.svg" alt="" />
          <img className="w-32" src="assets/routerLogo.svg" alt="" />
          <img className="w-32" src="assets/tailwindLogo.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

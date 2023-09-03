import React from "react";
import { useParams } from "react-router-dom";
import games from "../constants/game";
import ImageSlider from "../components/ImageSlider";
import Footer from "../components/Footer";
import { BsDiscord, BsFacebook, BsHeart, BsInstagram } from "react-icons/bs";
import { useGames } from "../constants/context/Context";
import { motion } from "framer-motion";

const SingleGame = () => {
  const { id } = useParams();
  const { addToCart, cart } = useGames();
  let game = games[id - 1];
  console.log(cart.includes(game.id - 1));
  return (
    <>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth }}
        className="min-h-screen flex flex-col gap-6"
      >
        <div
          className="imgcontain"
          style={{
            background: `linear-gradient(0deg, #000 0%, rgba(0,0,0,0.7) 99%),
          url(${game?.pictures?.banner})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="mx-6 mt-2 grid ">
            <div>
              <h1 className="text-white text-4xl font-bold">{game?.name}</h1>
              <p className="text-[16px] text-[#8E8C8A]">by {game?.publisher}</p>
              <p className="text-[16px] text-[#8E8C8A]">
                Release Date: {game.releaseDate}
              </p>
            </div>
            <div className="imageSlider Container grid gap-5">
              <div className="singleHero my-0 overflow-hidden md:min-w-[60%]">
                <ImageSlider pictures={game?.pictures} />
              </div>
              <div className="singleHero2 flex flex-col gap-2  rounded-3xl">
                <div className="flex flex-col gap-1 p-4 bg-[#1e1e1e] rounded-lg">
                  <h1 className="text-[#E2E2E2] text-3xl font-bold">About</h1>
                  <hr />
                  <div className="flex mt-2 flex-col gap-1">
                    {game.description.map((des, index) => (
                      <p className="text-[#8E8E8E] text-[16px]" key={index}>
                        {des}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex w-full items-center  rounded-lg gap-3 ">
                  <div className="flex py-2 justify-between bg-[#1e1e1e] rounded-lg w-full px-4 ">
                    <h1 className="text-xl text-[#E2E2E2] font-bold">
                      ₹{game.price}
                    </h1>
                    <button
                      onClick={() => addToCart(game.id, game.price)}
                      className="text-xl text-[#E2E2E2]"
                    >
                      {cart.includes(game.id) ? "Added" : "Add"}
                    </button>
                  </div>
                  <button className="w-14 py-2 rounded-lg justify-center bg-[#1e1e1e] text-white  flex items-center">
                    <BsHeart className="text-3xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-4 mt-5 flex flex-col gap-5">
          <div className="bg-[#1e1e1e] py-4 rounded-lg px-4">
            <h1 className="font-bold text-3xl text-[#E2E2E2]">Requirements</h1>
            <hr />
            <div className="flex gap-4 mt-4">
              <div>
                <h1 className="text-[#E2E2E2] text-xl italic">Minimum</h1>
                <div className="">
                  <span className="text-[#E2E2E2] font-bold">OS:</span>
                  <span className="text-[#8E8E8E] text-[16px]">
                    {" "}
                    Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit,
                    Windows 7 64 Bit Service Pack 1
                  </span>
                </div>
                <div className="">
                  <span className="text-[#E2E2E2] font-bold ">Processor:</span>
                  <span className="text-[#8E8E8E] text-[16px]">
                    {" "}
                    Intel Core 2 Quad CPU Q6600 @ 2.40GHz (4 CPUs) / AMD Phenom
                    9850 Quad-Core Processor (4 CPUs) @ 2.5GHz
                  </span>
                </div>
                <div className="">
                  <span className="text-[#E2E2E2] font-bold ">Memory:</span>
                  <span className="text-[#8E8E8E] text-[16px]"> 4 GB RAM</span>
                </div>
                <div className="">
                  <span className="text-[#E2E2E2] font-bold ">
                    Graphic Card:
                  </span>
                  <span className="text-[#8E8E8E] text-[16px]">
                    NVIDIA 9800 GT 1GB / AMD HD 4870 1GB (DX 10, 10.1, 11)
                  </span>
                </div>
                <div className="">
                  <span className="text-[#E2E2E2] font-bold ">DirectX:</span>
                  <span className="text-[#8E8E8E] text-[16px]">
                    {" "}
                    72 GB available space
                  </span>
                </div>
                <div className="">
                  <span className="text-[#E2E2E2] font-bold ">Storage:</span>
                  <span className="text-[#8E8E8E] text-[16px]">
                    {" "}
                    100% DirectX 10 compatible
                  </span>
                </div>
              </div>
              <div>
                <h1 className="text-[#E2E2E2] italic text-xl">Recommended</h1>
                <div className="">
                  <span className="text-[#E2E2E2] font-bold">OS:</span>
                  <span className="text-[#8E8E8E] text-[16px]">
                    {" "}
                    Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit,
                    Windows 7 64 Bit Service Pack 1
                  </span>
                </div>
                <div className="">
                  <span className="text-[#E2E2E2] font-bold ">Processor:</span>
                  <span className="text-[#8E8E8E] text-[16px]">
                    {" "}
                    Intel Core 2 Quad CPU Q6600 @ 2.40GHz (4 CPUs) / AMD Phenom
                    9850 Quad-Core Processor (4 CPUs) @ 2.5GHz
                  </span>
                </div>
                <div className="">
                  <span className="text-[#E2E2E2] font-bold ">Memory:</span>
                  <span className="text-[#8E8E8E] text-[16px]"> 4 GB RAM</span>
                </div>
                <div className="">
                  <span className="text-[#E2E2E2] font-bold ">
                    Graphic Card:
                  </span>
                  <span className="text-[#8E8E8E] text-[16px]">
                    NVIDIA 9800 GT 1GB / AMD HD 4870 1GB (DX 10, 10.1, 11)
                  </span>
                </div>
                <div className="">
                  <span className="text-[#E2E2E2] font-bold ">DirectX:</span>
                  <span className="text-[#8E8E8E] text-[16px]">
                    {" "}
                    72 GB available space
                  </span>
                </div>
                <div className="">
                  <span className="text-[#E2E2E2] font-bold ">Storage:</span>
                  <span className="text-[#8E8E8E] text-[16px]">
                    {" "}
                    100% DirectX 10 compatible
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#1e1e1e] py-2 flex gap-2 rounded-lg px-4 font-bold text-xl text-[#E2E2E2]">
            Tags:{" "}
            {game.genre.map((genre, i) => {
              return (
                <span key={i} className="text-[#E2E2E2] font-normal text-xl">
                  {genre}
                </span>
              );
            })}
          </div>
        </div>
        <div className="mt-auto w-full bg-[#1e1e1e]">
          <div className="justify-between flex py-4 px-5">
            <div className="w-40 flex items-center">
              <img src="../public/assets/logo.png" alt="" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-white">Company</h1>
              <a className="text-[#6B6B71]" href="#">
                About
              </a>
              <a className="text-[#6B6B71]" href="#">
                Privacy Policy
              </a>
              <a className="text-[#6B6B71]" href="#">
                Cookies Policy
              </a>
              <a className="text-[#6B6B71]" href="#">
                Legal
              </a>
              <a className="text-[#6B6B71]" href="#">
                Careers
              </a>
            </div>
            <div className="flex flex-col">
              <h1 className="text-white">Product</h1>
              <a className="text-[#6B6B71]" href="#">
                Refund Policy
              </a>
              <a className="text-[#6B6B71]" href="#">
                Report a bog
              </a>
              <a className="text-[#6B6B71]" href="#">
                Support
              </a>
            </div>
            <div className="flex flex-col gap-6">
              <a className="text-[#6B6B71]" href="#">
                <BsFacebook />
              </a>
              <a className="text-[#6B6B71]" href="#">
                <BsInstagram />
              </a>
              <a className="text-[#6B6B71]" href="#">
                <BsDiscord />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SingleGame;

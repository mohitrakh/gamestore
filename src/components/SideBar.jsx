import React from "react";
import GameCard from "./GameCard";
import { useGames } from "../constants/context/Context";

const SideBar = () => {
  const { genre, setGenre, categories } = useGames();
  function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  return (
    <div className="flex mt-5  sidebar max-w-fit gap-4 min-h-screen ml-4 flex-col items-start text-[#E1E1E1]">
      <div>
        <h1 className="text-3xl underline font-bold">Categories</h1>
      </div>
      <div className="flex w-full items-start font-bold gap-2 text-[18px] flex-col">
        {categories.map((item, index) => {
          if (item === "coop") {
            return (
              <button
                key={index}
                onClick={() => setGenre(item)}
                className={`sidebarBtn w-full text-left px-2 rounded-lg`}
              >
                Co-Op
              </button>
            );
          }
          return (
            <button
              key={index}
              onClick={() => setGenre(item)}
              className={`${
                item === genre ? "bg-[#935cb5] text-white hover:text-white" : ""
              } sidebarBtn w-full text-left rounded-lg`}
            >
              {capitalizeFirstLetter(item)}
            </button>
          );
        })}
      </div>
      {/* <div className="flex items-start font- font-bold gap-2 text-[18px] flex-col">
        <button
          onClick={() => setGenre("all")}
          className="sidebarBtn w-full text-left"
        >
          All
        </button>
        <button
          onClick={() => setGenre("openWorld")}
          className="sidebarBtn w-full text-left"
        >
          Open world
        </button>
        <button
          onClick={() => setGenre("action")}
          className="sidebarBtn w-full text-left"
        >
          Action
        </button>
        <button
          onClick={() => setGenre("multiplayer")}
          className="sidebarBtn w-full text-left"
        >
          Multiplayer
        </button>
        <button
          onClick={() => setGenre("racing")}
          className="sidebarBtn w-full text-left"
        >
          Racing
        </button>
        <button
          onClick={() => setGenre("adventure")}
          className="sidebarBtn w-full text-left"
        >
          Adventure
        </button>
        <button
          onClick={() => setGenre("singleplayer")}
          className="sidebarBtn w-full text-left"
        >
          Singleplayer
        </button>
        <button
          onClick={() => setGenre("competitive")}
          className="sidebarBtn w-full text-left"
        >
          Competitive
        </button>
        <button
          onClick={() => setGenre("mystery")}
          className="sidebarBtn w-full text-left"
        >
          Mystery
        </button>
        <button
          onClick={() => setGenre("battleRoyal")}
          className="sidebarBtn w-full text-left"
        >
          Battle Royale
        </button>
        <button
          onClick={() => setGenre("rpg")}
          className="sidebarBtn w-full text-left"
        >
          RPG
        </button>
        <button
          onClick={() => setGenre("fps")}
          className="sidebarBtn w-full text-left"
        >
          FPS
        </button>
        <button
          onClick={() => setGenre("coop")}
          className="sidebarBtn w-full text-left"
        >
          Co-Op
        </button>
        <button
          onClick={() => setGenre("pvp")}
          className="sidebarBtn w-full text-left"
        >
          PvP
        </button>
        <button
          onClick={() => setGenre("horror")}
          className="sidebarBtn w-full text-left"
        >
          Horror
        </button>
        <button
          onClick={() => setGenre("sports")}
          className="sidebarBtn w-full text-left"
        >
          Sports
        </button>
        <button
          onClick={() => setGenre("sciFi")}
          className="sidebarBtn w-full text-left"
        >
          Sci-fi
        </button>
      </div> */}
    </div>
  );
};

export default SideBar;

import React, { useEffect, useState } from "react";
import GameCard from "./GameCard";
import games from "../constants/game";
import { useGames } from "../constants/context/Context";

const GameList = () => {
  const [sortType, setSortType] = useState("relevence");
  const [filtered, setFiltered] = useState([...games]);
  const { genre, setGenre } = useGames();

  useEffect(() => {
    if (genre != "all") {
      let dummy = games.filter((game) => game.genre.includes(genre) === true);
      setFiltered(dummy);
    } else {
      setFiltered([...games]);
    }
  }, [genre]);

  const handleChange = (selected) => {
    setSortType(selected);
    if (selected === "lowest") {
      let newgame = filtered.sort((a, b) => a.price - b.price);
      setFiltered(newgame);
    } else if (selected === "highest") {
      let newgame = filtered.sort((a, b) => b.price - a.price);
      setFiltered(newgame);
    } else if (selected === "rating") {
      let newgame = filtered.sort((a, b) => b.rating - a.rating);
      setFiltered(newgame);
    } else {
      setFiltered(games);
    }
  };

  return (
    <div className=" game flex flex-col gap-7 mx-3">
      <h1 className="text-[#E1E1E1] font-bold text-7xl">All Games</h1>
      <div className="flex gap-3 items-center ">
        <span className="text-xl text-[#E1E1E1]">Sort By:</span>
        <select
          className=" sort w-72 py-2 rounded-lg px-3 font-bold bg-[#161616] text-[#E1E1E1]"
          name="sort"
          id="sort"
          onChange={(e) => handleChange(e.target.value)}
        >
          <option className="hover:text-[#935cb5]" value="highest">
            Relevence
          </option>
          <option className="hover:text-[#935cb5]" value="highest">
            Price(Highest First)
          </option>
          <option className="hover:text-[#935cb5]" value="lowest">
            Price(Lowest First)
          </option>
          <option className="hover:text-[#935cb5]" value="rating">
            Rating
          </option>
        </select>
      </div>
      <div className="mt-1 grid grid-cols-1 lg:grid-cols-4 gap-4 md:grid-cols-2">
        {filtered.map((game) => {
          return <GameCard game={game} key={game.id} />;
        })}
      </div>
    </div>
  );
};

export default GameList;

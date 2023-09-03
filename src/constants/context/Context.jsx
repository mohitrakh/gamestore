import React, { createContext, useContext, useState } from "react";
import games from "../game";

const GameContext = createContext();

const ContextProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [selected, setSelected] = useState(false);
  const [genre, setGenre] = useState("all");
  const [cart, setCart] = useState([]);
  const [filtered, setFiltered] = useState([...games]);

  function removeDuplicates(array, key) {
    const seen = new Set();
    return array.filter((item) => {
      const value = item[key];
      if (seen.has(value)) {
        return false;
      }
      seen.add(value);
      return true;
    });
  }
  const addToCart = (id, price) => {
    // console.log(id, price);
    let newid = Number(id);
    let dummarr = [...cart, { id: newid, price: price }];
    setCart(removeDuplicates(dummarr, "id"));
  };

  let newCart = removeDuplicates(cart, "id");

  let newarr = [...games];
  const mergedArray = newarr
    .map((obj) => obj.genre) // Extract the 'data' array from each object
    .reduce((merged, current) => merged.concat(current), []); // Merge all 'data' arrays

  const categories = ["all", ...new Set(mergedArray)];

  const wishlistadd = (game) => {
    setSelected(true);

    console.log("click", game);
    // setSelected(true);
    // if (wishlist.includes(game)) {
    //   setSelected(true);
    // } else {
    //   setWishlist([...wishlist, game]);
    //   setSelected(true);
    // }
  };

  const removeItem = (id) => {
    let dummyArr1 = cart.filter((item) => item.id !== id);
    setCart(dummyArr1);
    console.log(id);
  };

  const wishlistremove = (game) => {
    setSelected(false);
    console.log("remove", game);

    // setSelected(false);
    // console.log("removed");
    // let newlist = wishlist.filter((item) => item.id !== game.id);
    // setWishlist(newlist);
  };

  return (
    <GameContext.Provider
      value={{
        genre,
        setGenre,
        filtered,
        setFiltered,
        categories,
        wishlist,
        setWishlist,
        wishlistadd,
        wishlistremove,
        selected,
        addToCart,
        newCart,
        cart,
        removeItem,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGames = () => {
  return useContext(GameContext);
};

export default ContextProvider;

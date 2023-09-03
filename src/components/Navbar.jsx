import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex mx-4 justify-between items-center py-1 bg-transparent">
      <Link to={"/"} className="w-44">
        <img src="/assets/logo.png" alt="" />
      </Link>
      <div className="flex gap-4 text-white font-bold text-xl">
        <Link
          className="navBtn text-[#adadb5] cursor-pointer hover:scale-105 hover:text-[#935cb5]"
          to={"/"}
        >
          About
        </Link>
        <Link
          className="navBtn text-[#adadb5] cursor-pointer hover:scale-105 hover:text-[#935cb5]"
          to={"/store"}
        >
          Store
        </Link>
        <Link
          className="navBtn text-[#adadb5] cursor-pointer hover:scale-105 hover:text-[#935cb5]"
          to={"/wishlist"}
        >
          Wishlist
        </Link>
        <Link
          className="navBtn text-[#adadb5] cursor-pointer hover:scale-105 hover:text-[#935cb5]"
          to={"/cart"}
        >
          Cart
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { BsDiscord, BsFacebook, BsInstagram, BsReddit } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="mt-auto w-full bg-[#1e1e1e]">
      <div className="justify-between flex py-4 px-5">
        <div className="w-40 flex items-center">
          <img src="assets/logo.png" alt="" />
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
        <div className="flex flex-col text-xl gap-6">
          <a className="text-white" href="#">
            <BsReddit />
          </a>
          <a className="text-white" href="#">
            <BsInstagram />
          </a>
          <a className="text-white" href="#">
            <BsDiscord />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

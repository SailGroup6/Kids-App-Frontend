import { useState } from "react";
import { NavLink } from "react-router-dom";
import NavButton from "./NavButton";

export default function HamburgerNav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="flex items-center justify-between ">
      <nav>
        <section className="flex MOBILE-MENU lg:hidden">
          <div
            className="space-y-2 HAMBURGER-ICON"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block w-8 h-1 bg-white animate-pulse"></span>
            <span className="block w-8 h-1 bg-white animate-pulse"></span>
            <span className="block w-8 h-1 bg-white animate-pulse"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="w-8 h-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px] ">
              <li className="my-8 uppercase border-b border-gray-400">
                <ul className="text-transparent bg-clip-text bg-gradient-to-r from-[#1DA684] to-[#BEDC7CFC] ">
                  Home
                </ul>
              </li>
              <li className="my-8 uppercase border-b border-gray-400">
                <ul className="text-transparent bg-clip-text bg-gradient-to-r from-[#1DA684] to-[#BEDC7CFC] ">
                  About us
                </ul>
              </li>
              <li className="my-8 uppercase border-b border-gray-400">
                <ul className="text-transparent bg-clip-text bg-gradient-to-r from-[#1DA684] to-[#BEDC7CFC]">
                  Contact us
                </ul>
              </li>
             <div className= " flex flex-col gap-4">
             <NavButton text= {"Login"}>
           </NavButton>
             <NavButton
             text = {"Register"}/>
             </div>
            </ul>
          </div>
        </section>

        <li className="hidden space-x-8 DESKTOP-MENU lg:flex">
          <ul className="cursor-pointer ">Home</ul>
          <ul className="cursor-pointer "> <NavLink to= "/aboutus">About us</NavLink> </ul>
          <ul className="cursor-pointer "><NavLink to="/contactus" >Contact us </NavLink></ul>
          <button className=" border-[0.5px] border-white text-[#9B5DE6] hover:text-white hover:bg-[#9B5DE6] bg-white rounded-lg py-1 px-3 flex items-center">
          <NavLink to="/login">Login</NavLink>
          </button>
          <button className=" border-[0.5px] border-white rounded-lg py-1 px-3 hover:bg-white hover:text-[#9B5DE6] flex items-center">
            <NavLink to="/registration">Register</NavLink>
          </button>
        </li>
      </nav>
    </div>
  );
}

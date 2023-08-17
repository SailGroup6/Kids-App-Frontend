import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function HamburgerNav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="flex items-center justify-between ">
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-1 w-8 animate-pulse bg-white"></span>
            <span className="block h-1 w-8 animate-pulse bg-white"></span>
            <span className="block h-1 w-8 animate-pulse bg-white"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
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
              <li className="border-b border-gray-400 my-8 uppercase">
                <ul className="text-transparent bg-clip-text bg-gradient-to-r from-[#1DA684] to-[#BEDC7CFC] ">
                  Home
                </ul>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <ul className="text-transparent bg-clip-text bg-gradient-to-r from-[#1DA684] to-[#BEDC7CFC] ">
                  About us
                </ul>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <ul className="text-transparent bg-clip-text bg-gradient-to-r from-[#1DA684] to-[#BEDC7CFC]">
                  Contact us
                </ul>
              </li>
              <div className=" border-[0.5px] border-gray-400 rounded-lg py-1 px-3 flex items-center">
                <button
                  type="submit"
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#1DA684] to-[#BEDC7CFC]"
                >
                  Sign In
                </button>
              </div>
              <div >
              <button
              type="submit"
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#1DA684] to-[#BEDC7CFC]"
            >
              Register
            </button>
              </div>
            </ul>
          </div>
        </section>

        <li className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <ul className=" cursor-pointer">Home</ul>
          <ul className=" cursor-pointer">About us</ul>
          <ul className=" cursor-pointer">Contact us</ul>
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

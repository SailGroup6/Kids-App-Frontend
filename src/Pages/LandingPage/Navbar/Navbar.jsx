
import logo from "../../../Assets/Images/bumbleebee-img.svg";
import HamburgerNavBar from "./HamburgerNav";

const Navbar = () => {
  return (
    <div
      className=" flex justify-between items-center shadow-lg p-4 w-[80%] h-[60px] bg-[#9B5DE6] rounded-lg mx-auto text-white text-lg font-[caveat-regular]"
    >
      <div className=" flex justify-center items-center gap-3 cursor-pointer">
        <img src={logo} alt="logo" className=" object-contain w-[40px]" />
        <p>kidsHive</p>
      </div>
      <HamburgerNavBar />
    </div>
  );
};

export default Navbar;


import logo from "../../../Assets/Images/logo.png"
import HamburgerNavBar from "./HamburgerNav"

const Navbar = () => {
  return (
    <div className=" flex justify-between items-center p-4 w-[80%] bg-[#9B5DE6] rounded-lg mx-auto text-white text-2xl font-thin">
        <div className=" flex justify-center items-center gap-3 cursor-pointer">
        <img src={logo} alt="logo" className=" object-contain w-[40px]" />
        <p>kIdShIvE</p>
        </div>
        <HamburgerNavBar/>
    </div>
  )
}

export default Navbar
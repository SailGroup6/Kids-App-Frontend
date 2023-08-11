
import logo from "../Assets/logo.png"

const Navbar = () => {
  return (
    <div className=" flex h-[80px] w-[80%] bg-[#9A97EE] rounded-lg mx-auto">
        <div className=" flex justify-center items-center">
        <img src={logo} alt="logo" className=" object-contain w-[30px]" />
        <p>BumbleBee</p>
        </div>
        <li className=" flex">
            <ul>Home</ul>
            <ul>About us</ul>
            <ul>Contact us</ul>
        </li>
        <button type="submit">Register</button>
    </div>
  )
}

export default Navbar
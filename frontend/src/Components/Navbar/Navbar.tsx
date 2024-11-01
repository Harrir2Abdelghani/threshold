import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [animate, setAnimate] = useState<boolean>(false);
  const [redirectPath, setRedirectPath] = useState<string | null>(null);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    setAnimate(true);
  }, []);
  const handleNavigation = (path: string) => {
    if (path === "/signin" || path === "/signup") {
      setRedirectPath(path);
    } else {
      window.location.href = path; 
    }
  };
  return (
    <div className=" cursor-pointer nav bg-gray-200 shadow-sm  fixed top-0 z-50 w-full shadow-roseGold border-b-1 border-roseGold  text-xl font-bold">
      <div className="flex justify-between items-center p-4">
        <div
          className={`w-24 h-12 -ml-8 object-left-top transform transition-transform duration-700 ${
            animate ? "translate-x-0" : "-translate-x-16"
          }`}
        >
          <Link to='/'>
          <img src={logo}  className="h-full w-full object-cover " />
          </Link>
        </div>
        <div className="block sm:hidden text-black text-sm -ml-8   font-dancing ">
        💫 Find Your Edge, Embrace Your Style 💫
        </div>
        <div className="sm:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes className="text-deepPlum w-6 h-6" />
            ) : (
              <FaBars className="text-deepPlum w-6 h-6" />
            )}
          </button>
        </div>
        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          }  sm:flex  flex-col sm:flex-row gap-6 sm:gap-12  underline-none font-mono bg-gray-100 text-roseGold font-bold items-center absolute sm:static top-16 left-0 sm:left-auto w-full sm:w-auto  sm:bg-transparent p-4 sm:p-0 border-t-2 sm:border-0 border-roseGold sm:border-none shadow-lg sm:shadow-none`}
        >
          <li onClick={() => handleNavigation("/")}>
            Home
          </li>
          <li onClick={() => handleNavigation("#")}>
            Men
          </li>
          <li onClick={() => handleNavigation("#")}>
            Women
          </li>
          <li onClick={() => handleNavigation("/contact")}>
            Contact Us
          </li>
          <div className="flex gap-10 mt-4 sm:hidden">
          <Link to="/signin">
            <button
              className="bg-deepPlum  text-white px-4 py-2 rounded-full hover:bg-roseGold transition duration-300 shadow-md"
              onClick={() => handleNavigation("/signin")}
            >
              Sign In
            </button>
            </Link>
            <Link to="/signup">
            <button
              className="bg-blushPink  text-white px-4 py-2 rounded-full hover:bg-roseGold transition duration-300 shadow-md"
              onClick={() => handleNavigation("/signup")}
            >
              Sign Up
            </button>
            </Link>
          </div>
        </ul>
        <div
          className={`hidden font-sans sm:flex gap-4 transform transition-transform duration-700 ${
            animate ? "translate-x-0" : "translate-x-16"
          }`}
        >
          <Link to="/signin">
            <button className="bg-roseGold hover:bg-blushPink text-white py-2 px-5 rounded-full shadow-lg transition duration-300">
              Sign In
            </button>
            </Link>
        </div>
      </div>
    </div>
  );
}
export default Navbar;

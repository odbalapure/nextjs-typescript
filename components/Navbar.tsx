import { AppContextObject, useGlobalContext } from "../context";
import Link from "next/link";

const Navbar = () => {
  // Consuming the context
  const { setIsMenuOpen, isMenuOpen } = useGlobalContext() as AppContextObject;

  // Toggle menu option
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      id="nav"
      className="relative flex flex-row justify-between bg-gray-900 text-white p-3 items-center w-screen sticky top-0 z-50"
    >
      <div className="text-2xl">
        <Link href={"/"}>PostIt</Link>
      </div>
      <div className="flex flex-row justify-evenly space-x-6 md:flex hidden">
        <div className="hover:text-gray-500 hover:cursor-pointer">Home</div>
        <div className="hover:text-gray-500 hover:cursor-pointer">About</div>
        <div className="hover:text-gray-500 hover:cursor-pointer">Contact</div>
        <div className="hover:text-gray-500 hover:cursor-pointer">Signup</div>
      </div>
      <div className="font-semibold hidden md:block">Welcome User!</div>
      <div
        className="md:hidden hamburger flex flex-col justify-evenly hover:cursor-pointer"
        id="menu-toggle"
        onClick={toggleMenu}
      >
        <div className="hamburger-line-1"></div>
        <div className="hamburger-line-2"></div>
        <div className="hamburger-line-3"></div>
      </div>
      <div
        id="mobile-menu"
        className={`${
          !isMenuOpen ? "hidden" : ""
        } md:hidden absolute flex flex-col items-center left-6 right-6 drop-shadow-md mt-48 mx-10 sm:mx-24 space-y-6 py-6 bg-white`}
      >
        <a href="#" className="hover:text-gray-500 text-black drop-shadow-2xl">
          Home
        </a>
        <a href="#" className="hover:text-gray-500 text-black drop-shadow-2xl">
          About
        </a>
        <a href="#" className="hover:text-gray-500 text-black drop-shadow-2xl">
          Contact
        </a>
        <a
          href="/signup"
          className="hover:text-gray-500 text-black drop-shadow-2xl"
        >
          Signup
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

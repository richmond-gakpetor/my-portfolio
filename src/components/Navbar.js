import { useState } from "react"; // Import useState from React
import logo from "../assets/logo.svg";
import resume from "../assets/resume.pdf";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="fixed z-50 bg-dark-500 w-full top-0 left-0 px-8 py-4 lg:px-20 xl:px-36">
      <div className="flex justify-between items-center text-white">
        <img src={logo} className="w-10 rounded-full" alt="logo" />

        {/* Mobile Menu Button */}
        <button
          className="md:hidden block text-white hover:text-teal-500"
          onClick={toggleMobileMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        <ul className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
          <li className="p-4">
            <a href="#home" className="text-white hover:underline">
              About
            </a>
          </li>
          <li className="p-4">
            <a href="#skills" className="text-white hover:underline">
              Skills
            </a>
          </li>
          <li className="p-4">
            <a href="#projects" className="text-white hover:underline">
              Projects
            </a>
          </li>
          <li className="p-4">
            <a href="#certs" className="text-white hover:underline">
              Certifications
            </a>
          </li>
        </ul>

        {/* Desktop Menu */}
        <ul className="hidden md:flex">
          <li className="p-4">
            <a href="#home" className="text-white hover:underline">
              About
            </a>
          </li>
          <li className="p-4">
            <a href="#skills" className="text-white hover:underline">
              Skills
            </a>
          </li>
          <li className="p-4">
            <a href="#projects" className="text-white hover:underline">
              Projects
            </a>
          </li>
          <li className="p-4">
            <a href="#certs" className="text-white hover:underline">
              Certifications
            </a>
          </li>
        </ul>

        <a
          href={resume}
          rel="noreferrer"
          target="_blank"
          className="bg-teal-500  rounded-full px-4 py-1 border border-teal-800 border border-4"
        >
          Resume
        </a>
      </div>
    </div>
  );
}

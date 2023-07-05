"use client";
import Link from "next/link";
import { VscThreeBars } from "react-icons/vsc";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { use, useEffect, useState } from "react";
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState(false);
  useEffect(() => {
    window.onscroll = function () {
      if (document.documentElement.scrollTop >= 50) {
        setNavbarBg(true);
      } else {
        setNavbarBg(false);
      }
    };
  }, []);
  return (
    <nav
      className={
        "px-4 md:px-12 lg:px-24 fixed left-0 right-0 top-0 flex justify-between items-center h-16 md:h-20 lg:h-24 z-50 transition-all duration-300 ease-in-out " +
        (navbarBg ? "bg-back" : "bg-transparent")
      }
    >
      <Link className="font-bungee" href="/">
        <span className="text-white text-4xl md:text-4xl xl:text-6xl">M</span>
        <span className="text-primary text-4xl md:text-4xl xl:text-6xl">D</span>
      </Link>
      <div className="hidden lg:flex flex-row items-center text-white">
        <Link
          className="p-2 text-4xl opacity-60 hover:opacity-100 duration-300"
          href="https://www.linkedin.com/in/misho-dzuliashvili-32b169249/"
          target="_blank"
        >
          <BsLinkedin />
        </Link>
        <Link
          className="p-2 text-4xl opacity-60 hover:opacity-100 duration-300"
          href="https://github.com/mishodzuliashvili"
          target="_blank"
        >
          <BsGithub />
        </Link>
        <Link
          href="#contact"
          className="ml-4 rounded-xl bg-primary text-white py-3 px-5 text-lg font-bungee transition-color hover:bg-primary-hover hover:text-secondary duration-300 ease-in-out flex flex-row items-center"
        >
          <FaEnvelope className="mr-2" />
          <span>TALK TO ME</span>
        </Link>
        <Link
          href="/projects"
          className="ml-4 rounded-xl bg-transparent text-white py-2 px-4 text-lg font-bungee transition-color hover:text-secondary duration-300 ease-in-out border-4 border-primary hover:border-primary-hover"
        >
          RESUME
        </Link>
      </div>
      <button
        className="lg:hidden p-2 text-4xl"
        onClick={() => setNavbarOpen(true)}
      >
        <VscThreeBars className="text-white" />
      </button>
      <div
        className={
          "w-56 transform lg:hidden h-screen absolute right-0 top-0 bg-back shadow-2xl transition-all duration-500 ease-in-out flex flex-col items-center gap-3 text-white " +
          (navbarOpen ? "translate-x-0" : "translate-x-56")
        }
      >
        <button
          onClick={() => setNavbarOpen(false)}
          className="m-4 rounded-xl flex flex-row items-center bg-transparent text-primary py-2 px-4 text-lg font-bungee transition-color hover:text-primary-hover duration-300 ease-in-out border-4 border-primary hover:border-primary-hover justify-center"
        >
          CLOSE
        </button>
        <Link
          className="p-2 text-4xl opacity-60 hover:opacity-100 duration-300"
          href="https://www.linkedin.com/in/misho-dzuliashvili-32b169249/"
          target="_blank"
        >
          <BsLinkedin />
        </Link>
        <Link
          className="p-2 text-4xl opacity-60 hover:opacity-100 duration-300"
          href="https://github.com/mishodzuliashvili"
          target="_blank"
        >
          <BsGithub />
        </Link>
        <Link
          href="#"
          className="ml-4 rounded-xl bg-primary text-white py-3 px-5 text-lg font-bungee transition-color hover:bg-primary-hover hover:text-secondary duration-300 ease-in-out flex flex-row items-center"
        >
          <FaEnvelope className="mr-2" />
          <span>TALK TO ME</span>
        </Link>
        <Link
          href="/projects"
          className="ml-4 rounded-xl bg-transparent text-white py-2 px-4 text-lg font-bungee transition-color hover:text-secondary duration-300 ease-in-out border-4 border-primary hover:border-primary-hover"
        >
          RESUME
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

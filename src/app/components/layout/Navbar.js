"use client";
import Image from "next/image";
import { useState } from "react";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../../assets/logo.png";
import Link from "next/link";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [show, Setshow] = useState(false);
  return (
    <div className="h-[60px] bg-[#191A19] w-full flex justify-between  z-10">
      <div className="p-4">
        <Image
          src={Logo}
          height={100}
          width={100}
          alt="Navbar logo"
          className="h-[50px] w-[60px] md:h-[70px] md:w-[90px]"
        />
      </div>
      <div className=" h-[60px] w-[90%] sm:w-[50%] md:w-[80%] lg:w-[70%] text-white bg-[#191A19] shadow-lg shadow-black rounded-full rounded-tr-none rounded-br-none  flex items-center justify-between px-8 py-4">
        <div className=" hidden md:flex bg-inherit gap-5 ">
          <Link href="/" className="cursor-pointer bg-inherit">
            Home
          </Link>
          <Link href="About" className="cursor-pointer bg-inherit">
            About Us
          </Link>
          <Link href="Cabinet" className="cursor-pointer bg-inherit">
            Cabinet
          </Link>
          <Link href="Courses" className="cursor-pointer bg-inherit">
            Courses
          </Link>
          <Link href="/events" className="cursor-pointer bg-inherit">
            Events
          </Link>
          <Link href="Gallery" className="cursor-pointer bg-inherit">
            Gallery
          </Link>
        </div>
        {/*  */}

        <button className=" bg-[#FF7420] px-3 rounded-xl h-[40px]">
          Contact Us
        </button>
        <GiHamburgerMenu
          className="md:hidden text-[30px] text-white"
          onClick={() => Setshow(!show)}
        />
      </div>

      {
        <div
          // className="absolute z-10 top-[-6px] right-0 h-full w-[80%] md:w-[60%] bg-white text-black flex justify-center "
          className={`fixed z-[100] top-0  left-0 md:hidden w-[300px] h-screen bg-white  overflow-hidden transition-transform transform ${
            show ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <IoClose
            className=" text-[30px] text-black absolute right-4 top-4"
            onClick={() => Setshow(!show)}
          />
          <div className="p-4">
            <Link href="/" className="block py-2 text-black">
              Home
            </Link>
            <Link href="About" className="block py-2 text-black">
              About Us
            </Link>
            <Link href="Cabinet" className="block py-2 text-black">
              Cabinet
            </Link>
            <Link href="Courses" className="block py-2 text-black">
              Courses
            </Link>
            <Link href="/events" className="block py-2 text-black">
              Events
            </Link>
            <Link href="Gallery" className="block py-2 text-black">
              Gallery
            </Link>
          </div>
        </div>
      }
    </div>
  );
};

export default Navbar;

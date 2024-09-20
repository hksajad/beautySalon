"use client";
import Link from "next/link";
import React from "react";
import  { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [isOpen, setIsopen] = useState(false);
  return (
    <div className="navbarPage pt-6">
      <div className="navbar flex justify-between items-center max-[768px]:px-5">
        {/* menu */}
        <ul className={
            isOpen
              ? "menu bg-gradient-to-br from-[#0b1518] from-50% to-[#c19a5d] flex gap-[27px] items-center flex-1 justify-start mr-5"
              : "menu flex gap-[40px] items-center flex-1 justify-start mr-5 max-[768px]:hidden"
          }>
          <li className="font-bold text-[20px] text-[#fff]">
            <Link href="/">صفحه اصلی</Link>
          </li>
          <li className="font-bold text-[20px] text-[#fff]">
            <Link href="/OurStory">درباره ما</Link>
          </li>
          <li className="font-bold text-[20px] text-[#fff]">
            <Link href="/">خدمات</Link>
          </li>
          <li className="font-bold text-[20px] text-[#fff]">
            <Link href="/">تماس با ما</Link>
          </li>
        </ul>
        {/* togle menu */}
        <div className="toggle_menu text-[#fff] hidden text-[30px] max-[768px]:flex">
          <div className="bt cursor-pointer" onClick={() => setIsopen(!isOpen)}>{isOpen ? <FaTimes /> : <FaBarsStaggered />}</div>
        </div>
        {/* logo */}
        <div className="logo_nav ">
          <h1 className="font-serif text-[25px] text-bold tracking-[2px] text-[#fff]">
            The perfect cut
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

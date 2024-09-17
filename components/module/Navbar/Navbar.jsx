"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { VscThreeBars } from "react-icons/vsc";
import { FaRegTimesCircle } from "react-icons/fa";
const Navbar = () => {
  const [isOpen, setIsopen] = useState(false);
  return (
    <div className="navbarPage pt-5 flex justify-between  items-center flex-row-reverse max-[768px]:mx-4">
      {/* logo */}
      <div className="logo_nav">
        <Image src="/Img/logo.png" width={50} height={50} />
      </div>
      {/* menu */}
      <ul
        className={
          isOpen
            ? "menu flex gap-[43px] items-center flex-1 justify-start mr-5"
            : "menu flex gap-[27px] items-center  mr-5 max-[768px]:hidden"
        }
      >
        <li className=" text-[20px]">
          <Link href="/" className="link">صفحه اصلی</Link>
        </li>
        <li className=" text-[20px]">
          <Link href="/OurStory" className="link">داستان ما</Link>
        </li>
        <li className=" text-[20px]">
          <Link href="/OurServices" className="link">خدمات</Link>
        </li>
        <li className=" text-[20px]">
          <Link href="/" className="link">رزرو نوبت</Link>
        </li>
      </ul>
      {/* toggle menu */}
      <div className="toggle_menu hidden mr-4 text-[#ECD8BD] text-[30px] max-[768px]:flex max-[768px]:flex-1">
        <div
          className="bt_menu cursor-pointer"
          onClick={() => setIsopen(!isOpen)}
        >
          {isOpen ? <FaRegTimesCircle /> : <VscThreeBars />}
        </div>
      </div>
      {/* login */}
      <div className="login_nav">
        <Link
          href="/"
          className="text-[#ECD8BD] border-2 rounded-[8px] px-4 py-2 link_login-nav"
        >
          تماس با ما
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

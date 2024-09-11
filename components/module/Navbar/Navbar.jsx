import Image from "next/image";
import Link from "next/link";
import React from "react";
import { VscThreeBars } from "react-icons/vsc";
const Navbar = () => {
  return (
    <div className="navbarPage pt-5 flex justify-between  items-center flex-row-reverse max-[768px]:mx-4">
      {/* logo */}
      <div className="logo_nav">
        <Image src="/Img/logo.png" width={50} height={50} />
      </div>
      {/* menu */}
      <ul className="menu flex items-center gap-10">
        <li className=" text-[20px]">
          <Link href="/">صفحه اصلی</Link>
        </li>
        <li className=" text-[20px]">
          <Link href="/">درباره ما</Link>
        </li>
        <li className=" text-[20px]">
          <Link href="/">خدمات</Link>
        </li>
        <li className=" text-[20px]">
          <Link href="/">رزرو نوبت</Link>
        </li>
      </ul>
      {/* toggle menu */}
      <div className="toggle_menu hidden mr-4 text-[#ECD8BD] text-[30px] max-[768px]:flex max-[768px]:flex-1">
        <VscThreeBars className="cursor-pointer"/>
      </div>
      {/* login */}
      <div className="login_nav">
        <Link
          href="/"
          className="text-[#ECD8BD] border-2 rounded-[8px] px-4 py-2"
        >
          تماس با ما
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

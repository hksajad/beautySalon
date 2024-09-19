import Link from "next/link";
import React from "react";
import { FaBarsStaggered } from "react-icons/fa6";
const Navbar = () => {
  return (
    <div className="navbarPage pt-6">
      <div className="navbar flex justify-between items-center max-[768px]:px-5">
        {/* menu */}
        <ul className="menu flex items-center gap-11 ">
          <li className="font-bold text-[20px]">
            <Link href="/">صفحه اصلی</Link>
          </li>
          <li className="font-bold text-[20px]">
            <Link href="/">داستان ما</Link>
          </li>
          <li className="font-bold text-[20px]">
            <Link href="/">خدمات</Link>
          </li>
          <li className="font-bold text-[20px]">
            <Link href="/">تماس با ما</Link>
          </li>
        </ul>
        {/* togle menu */}
        <div className="toggle_menu text-[#fff] hidden text-[30px] max-[768px]:flex">
          <FaBarsStaggered />
        </div>
        {/* logo */}
        <div className="logo_nav ">
          <h1 className="font-serif text-[25px] text-bold tracking-[2px]">
            The perfect cut
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

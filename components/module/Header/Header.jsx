import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import Link from "next/link";
const Header = () => {
  return (
    <div className="Header">
      <div className="main_header">
        <div className="container">
          <Navbar />
          <div className="content-header bg-[#0b1518c6] rounded-lg max-w-[880px] mt-[180px] m-auto max-[768px]:mt-[150px]">
            <div className="caption_header pt-3 pb-3 flex flex-col justify-center items-center max-[768px]:px-5">
              <h1 className="text-[50px] text-bold max-[768px]:text-[35px] max-[768px]:text-center text-[#fff]">به سالن زیبایی نازگلین خوش آمدید</h1>
              <p className="pt-5 text-[23px] tracking-[2px] max-[768px]:text-[25px] max-[768px]:text-center text-[#fff]">همیشه برای کمی زیبایی در زندگی خود جا باز کنید</p>
              <div className="link_header flex items-center gap-8 mt-12">
                <Link href='/' className="bg-[#C19A5D] text-[#fff] px-4 py-3 rounded-lg">رزرو نوبت</Link>
                <span className="text-bold text-[#C19A5D] text-[20px]">* ایران ، کرمان </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

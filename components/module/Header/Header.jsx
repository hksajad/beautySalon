import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
const Header = () => {
  return (
    <div className="Header">
      <div className="main_header">
        <div className="container">
          <Navbar />
          <div className="content-header bg-[#0b1518a4] max-w-[880px] mt-[150px] m-auto">
            <div className="caption_header pt-3 pb-3 flex flex-col justify-center items-center">
              <h1 className="text-[50px] text-bold max-[768px]:text-[35px] max-[768px]:text-center">به سالن زیبایی نازگلین خوش آمدید</h1>
              <p className="pt-5 text-[23px] tracking-[2px] max-[768px]:text-[25px] max-[768px]:text-center">همیشه برای کمی زیبایی در زندگی خود جا باز کنید</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

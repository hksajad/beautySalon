import React from "react";
import "./Time.css";
import Link from "next/link";
const Time = () => {
  return (
    <div className="Time max-[768px]:pt-20 max-[768px]:pb-20">
      <div className="container">
        <div className="content_time flex justify-between items-center max-w-[850px] h-[600px] m-auto max-[768px]:h-[350px]  max-[768px]:flex-col">
          <div className="title_time">
            <h1 className="text-[#fff] text-center font-bold text-[40px] max-[768px]:text-[30px]">
              ساعات کاری سالن زیبایی <br /> نازگلین
            </h1>
          </div>
          <div className="content_time flex flex-col text-[#fff] font-bold text-center leading-[45px] text-[20px]">
            <span>شنبه تا چهارشنبه : 8 الی 21</span>
            <span>پنجشنبه : 10 الی 18</span>
            <span>جمعه : 16 الی 20</span>
          </div>
          <div className="link_rezerv flex justify-center">
            <Link
              href="/"
              className="bg-[#c19a5d] rounded-lg text-[#fff] px-4 py-3"
            >
              نوبت خود را رزرو کنید
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Time;

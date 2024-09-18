import React from "react";
import "./Hour.css";
import Link from "next/link";

const Hour = () => {
  return (
    <div className="Hour bg-[#F4EDE6] w-full">
      <div className="content_Hour flex justify-evenly items-center pt-12 pb-12  max-[768px]:flex-col-reverse">
        {/* hours time */}
        <div className="hours_time flex flex-col leading-[50px] text-center max-[768px]:pt-12">
          <span className="text-[#252525] text-bold text-[22px]">
            شنبه تا چهارشنبه : 8 الی 20
          </span>
          <span className="text-[#252525] text-bold text-[22px]">
            پنجشنبه : 10 الی 17
          </span>
          <span className="text-[#252525] text-bold text-[22px]">
            جمعه : 16 الی 20
          </span>
        </div>
        {/* border */}
        <div className="borders bg-[#252525] w-[3px] h-[150px] max-[768px]:w-[300px] max-[768px]:h-[3px]"></div>
        {/* welcom */}
        <div className="welcome flex flex-col leading-[50px] text-center max-[768px]:pb-12">
          <h1 className="text-[#252525] text-bold text-[22px]">خوش آمدید</h1>
          <span className="text-[#252525] text-bold text-[22px]">ساعات کار </span>
          <Link href='/' className="bg-[#252525] text-[#fff] px-4  rounded-lg">رزرو نوبت</Link>
        </div>
      </div>
    </div>
  );
};

export default Hour;

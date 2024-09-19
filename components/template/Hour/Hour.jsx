import React from "react";
import "./Hour.css";
import Link from "next/link";
import Image from "next/image";

const Hour = () => {
  return (
    <div className="Hour bg-[#252525] w-full">
      <div className="container">
        <div className="box_Hour max-w-[1440px] m-auto">
          <div className="content_Hour flex justify-center items-center flex-wrap gap-[250px] pt-32 pb-32 max-[992px]:gap-[160px] max-[768px]:gap-[30px]">
            <div className="items_hour flex flex-col justify-center items-center">
              <Image src="/Img/Icon.png" width={48} height={48} />
              <h1 className="text-center pt-5 font-bold text-[17px] text-[#fff]">لوازم آرایشی طبیعی</h1>
            </div>
            <div className="items_hour flex flex-col justify-center items-center">
              <Image src="/Img/Icon (1).png" width={48} height={48} />
              <h1 className="text-center pt-5 font-bold text-[17px] text-[#fff]">برندهای درجه یک</h1>
            </div>
            <div className="items_hour flex flex-col justify-center items-center">
              <Image src="/Img/Icon (2).png" width={48} height={48} />
              <h1 className="text-center pt-5 font-bold text-[17px] text-[#fff]">مراقبت حرفه ای </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hour;

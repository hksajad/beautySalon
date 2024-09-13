import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import Image from "next/image";
const FollowUs = () => {
  return (
    <div className="FollowUs mt-32">
      <div className="FollowUs_content flex justify-around items-center max-[768px]:flex-col">
        {/* follow */}
        <div className="items_follow text-center flex flex-col items-center">
          <h1 className="text-[25px] font-bold">ما را دنبال کنید </h1>
          <p className="mt-5 w-[283px]">
            تبلیغات را از دست ندهید، ما را برای آخرین اخبار دنبال کنید{" "}
          </p>
          <Link href="/" className="mt-3">
            <FaInstagram className="text-[#ECD8BD] text-[25px]" />
          </Link>
        </div>
        {/* border follow */}
        <div className="border_follow w-[30px] h-[300px] bg-[#ECD8BD] rounded-[8px]">
            <p></p>
        </div>
        {/* logo follow */}
        <div className="logo_follow">
            <Image src="/Img/curve quote.png" width={238} height={298}/>
        </div>
      </div>
    </div>
  );
};

export default FollowUs;

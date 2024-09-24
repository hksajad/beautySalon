import React from "react";
import "./services.css";
import Navbar from "@/components/module/Navbar/Navbar";
import SparklesText from "@/components/magicui/sparkles-text";
import Link from "next/link";
import Image from "next/image";

const Services = () => {
  return (
    <div className="ServicesPage">
      <div className="Services max-[992px]:bg-center">
        <div className="main_Services">
          <div className="container">
            <Navbar />
            <div className="title_Services w-full h-[600px] flex flex-col justify-center items-center">
              <h1>
                <SparklesText
                  text="خدمات ما"
                  className="text-[#fff] font-bold text-[70px]"
                />
              </h1>
              <div className="link_Services flex gap-3 pt-5">
                <span className="text-[#fff]">خدمات ما</span>/
                <Link href="/" className="text-[#c19a5d]">
                  صفحه اصلی
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* title service content */}
      <div className="container">
        <div className="titleservisec text-[30px] font-bold mt-20 max-[768px]:text-center">
          <h1>خدمات زیبایی <span className="text-[#c19a5d]">نازگلین </span></h1>
        </div>
        <div className="ContentServices mt-20 mb-20">
          <div className="itemsServices flex justify-between items-center flex-wrap">
            <div className="boxes_services">
              <div className="img__services">
                <Image src='/Img/eyebrow-treatment-.jpg' width={100} height={100} className="w-[350px] h-[400px] rounded-lg"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

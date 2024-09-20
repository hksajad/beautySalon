import React from "react";
import "./services.css";
import Navbar from "@/components/module/Navbar/Navbar";
import SparklesText from "@/components/magicui/sparkles-text";
import Link from "next/link";
import Image from "next/image";
import Hair from "@/components/layout/Hair/Hair";
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
        <Hair/>
      </div>
    </div>
  );
};

export default Services;

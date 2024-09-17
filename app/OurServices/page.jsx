import React from "react";
import "./OurServices.css";
import Navbar from "@/components/module/Navbar/Navbar";
import Image from "next/image";
import Hair from "@/components/layout/Hair_services/Hair";
const OurServices = () => {
  return (
    <div className="ourservices overflow-x-hidden">
      <div className="ourservices_main">
        <div className="container">
          <Navbar />
          {/* start hero services */}
          <div className="hero_services flex justify-around items-center mt-11 pb-11 max-[768px]:flex-col">
            {/* img_story */}
            <div className="img_services">
              <Image
                src="/Img/services_main.png"
                width={439}
                height={439}
                className="rounded-[100%] max-[768px]:w-[250px] max-[768px]:h-[250px]"
              />
            </div>
            {/* caption_story */}
            <div className="caption_services flex flex-col max-[768px]:mt-[2rem]">
              <h1 className="text-[#252422] text-[40px] font-bold">خدمات ما</h1>
              <p className="text-[#252422] text-justify text-[20px] mt-3 leading-8 w-[471px]  max-[768px]:px-[12px] max-[992px]:w-[360px]">
                ما زیبایی فردی را با فناوری های پیشرفته و خدمات شخصی افزایش می
                دهیم. تیم حرفه ای ما آماده ارائه بهترین خدماتی است که تا به حال
                داشته اید.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* start content services hair */}
      <div className="services_hair mt-32">
        <div className="container">
          <Hair/>
        </div>
      </div>
    </div>
  );
};

export default OurServices;

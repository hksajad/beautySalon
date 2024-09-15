import Navbar from "@/components/module/Navbar/Navbar";
import "./OurStory.css";
import React from "react";
import Image from "next/image";

const ourstory = () => {
  return (
    <div className="ourstory">
      <div className="container">
        <Navbar />
        <div className="hero_ourStory flex justify-around items-center mt-11 max-[768px]:flex-col">
          {/* img_story */}
          <div className="img_story">
            <Image src="/Img/ourstory_img.png" width={439} height={439} />
          </div>
          {/* caption_story */}
          <div className="caption_story flex flex-col max-[768px]:mt-[-2rem] max-[768px]:px-11">
            <h1 className="text-[#252422] text-[30px] font-bold">داستان ما</h1>
            <p className="text-[#252422] text-justify text-[17px] mt-3 leading-8 w-[471px]  max-[768px]:px-[12px] max-[992px]:w-[360px]">
              ایده اصلی ما ایجاد بهترین سالن زیبایی در کرمان بود. آیا در بهترین
              سالن های کرمان سازش هایی وجود دارد؟ پاسخ ما همیشه منفی است، ما به
              بهترین کیفیت اهمیت می دهیم، بهترین متخصصان را استخدام می کنیم و
              بهترین خدمات را به مشتریان ارائه می دهیم. این رویکرد به ما این
              امکان را داد که رشد کنیم و تیم فوق‌العاده‌ای بسازیم که به هر کاری
              که انجام می‌دهیم مشتاق است.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ourstory;

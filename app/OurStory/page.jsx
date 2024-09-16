import Navbar from "@/components/module/Navbar/Navbar";
import "./OurStory.css";
import React from "react";
import Image from "next/image";
import Footer from "@/components/module/Footer/Footer";

const ourstory = () => {
  const items_story=[
    {id:1,img:'/Img/clock.png',title:'شنبه - پنچشنبه : 8 الی 20'},
    {id:1,img:'/Img/location.png',title:'ایران ، کرمان'},
    {id:1,img:'/Img/mobile.png',title:'09162730644'}
  ]
  return (
    <div className="ourstory">
      <div className="ourStory_main">
        <div className="container">
          <Navbar />
          {/* start hero story */}
          <div className="hero_ourStory flex justify-around items-center mt-11 max-[768px]:flex-col">
            {/* img_story */}
            <div className="img_story">
              <Image
                src="/Img/ourstory_img.png"
                width={439}
                height={439}
                className="w-[400px] h-[300px]"
              />
            </div>
            {/* caption_story */}
            <div className="caption_story flex flex-col max-[768px]:mt-[-2rem] max-[768px]:px-11">
              <h1 className="text-[#252422] text-[30px] font-bold">
                داستان ما
              </h1>
              <p className="text-[#252422] text-justify text-[17px] mt-3 leading-8 w-[471px]  max-[768px]:px-[12px] max-[992px]:w-[360px]">
                ایده اصلی ما ایجاد بهترین سالن زیبایی در کرمان بود. آیا در
                بهترین سالن های کرمان سازش هایی وجود دارد؟ پاسخ ما همیشه منفی
                است، ما به بهترین کیفیت اهمیت می دهیم، بهترین متخصصان را استخدام
                می کنیم و بهترین خدمات را به مشتریان ارائه می دهیم. این رویکرد
                به ما این امکان را داد که رشد کنیم و تیم فوق‌العاده‌ای بسازیم که
                به هر کاری که انجام می‌دهیم مشتاق است.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        {/* start info story */}
        <div className="info_story mt-32 mb-32">
          <div className="content_info-story flex justify-center items-center flex-wrap min-[768px]:gap-10">
            {
              items_story.map((index) => (
                <div className="box_story text-center m-5">
                  <div className="img_storys-info" key={index.id}><Image src={index.img} width={140} height={140}/></div>
                  <div className="title_story mt-2 text-[#ECD8BD]" key={index.id}>{index.title}</div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      {/* footer */}
      <Footer/>
    </div>
  );
};

export default ourstory;

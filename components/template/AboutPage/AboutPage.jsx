import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <div className="AbouPage bg-[#ecd8bdb6] w-full  mt-32 rounded-[8px]">
      <div className="contentAboutPage flex justify-around items-center pt-5 pb-5 max-[992px]:flex-col">
        {/* img about */}
        <div className="imgAbout">
          <Image src="/Img/about_img.png" width={432} height={449} className="max-[768px]:w-[300px]"/>
        </div>
        {/* caption About*/}
        <div className="captionAbout flex flex-col w-[459px] max-[992px]:mt-7 max-[768px]:w-[100%]">
          <h1 className="text-[#252422] font-bold text-[25px]  max-[768px]:px-[12px]">درباره ما</h1>
          <p className="text-[#252422] text-justify text-[17px] mt-3 leading-8  max-[768px]:px-[12px]">
            ایده اصلی ما ایجاد بهترین سالن زیبایی در کرمان بود. آیا در بهترین
            سالن های کرمان سازش هایی وجود دارد؟ پاسخ ما همیشه منفی است، ما به
            بهترین کیفیت اهمیت می دهیم، بهترین متخصصان را استخدام می کنیم و
            بهترین خدمات را به مشتریان ارائه می دهیم. این رویکرد به ما این امکان
            را داد که رشد کنیم و تیم فوق‌العاده‌ای بسازیم که به هر کاری که انجام
            می‌دهیم مشتاق است.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

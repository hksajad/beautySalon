import Navbar from "@/components/module/Navbar/Navbar";
import React from "react";
import "./Ourstory.css";
import SparklesText from "@/components/magicui/sparkles-text";
import Link from "next/link";
import Image from "next/image";
import Crusel from "@/components/template/Crusel/Crusel";
import ShimmerButton from "@/components/magicui/shimmer-button";
import Footer from "@/components/module/Footer/Footer";
const Ourstory = () => {
  return (
    <div className="OurstoryPage overflow-x-hidden">
      <div className="Ourstory">
        <div className="main_Ourstory">
          <div className="container">
            <Navbar />
            <div className="title_ourAbout w-full h-[600px] flex flex-col justify-center items-center">
              <h1>
                <SparklesText
                  text="درباره ما"
                  className="text-[#fff] font-bold text-[70px]"
                />
              </h1>
              <div className="link_ourstory flex gap-3 pt-5">
                <span className="text-[#fff]">درباره ما</span>/
                <Link href="/" className="text-[#c19a5d]">
                  صفحه اصلی
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="title_content-about flex flex-col justify-center items-center pt-20 pb-20">
          <h1 className="text-[#252525] tracking-[1.5px] font-bold text-[25px] max-[768px]:text-center max-[768px]:px-7">
            ما می توانیم آنچه شما تصور می کنید ایجاد کنیم{" "}
          </h1>
          <p className="text-[#252525] font-bold text-[17px] pt-5 text-center max-[768px]:px-5">
            برای داشتن روحیه عالی، ناخن های خود را درست کنید. لذت های ساده می
            توانند هفته شما را بسازند، نه فقط روز را
          </p>
          <Image
            src="/Img/Img+button.png"
            width={865}
            height={372}
            className="mt-10 rounded-[8px]"
          />
        </div>
      </div>
      <Crusel />
      <div className="instagram w-full bg-[#fff] pt-20 pb-20">
        <div className="container">
          <div className="content_instagram flex flex-col justify-center items-center ">
            <div className="link_instagram flex justify-around gap-40 items-center mt-12 mb-12 max-[768px]:flex-col">
              <div className="img_insta">
                <Image
                  src="/Img/Screenshot (73).png"
                  width={350}
                  height={750}
                  className="img-insta"
                />
              </div>
              <div className="title_insta flex flex-col items-center">
                <h1 className="text-[25px] font-bold max-[768px]:text-center">
                  در اینستاگرام نازگلین با ما همراه باشید
                </h1>
                <Link href="/" className="mt-10 z-10">
                  <ShimmerButton className="shadow-2xl">
                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                      دنبال کردن
                    </span>
                  </ShimmerButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Ourstory;

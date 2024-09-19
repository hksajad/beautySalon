import React from "react";
import "./About.css";
import Image from "next/image";
import Link from "next/link";
const About = () => {
  return (
    <div className="AboutPage">
      <div className="content_about flex max-[768px]:flex-col max-[768px]:pt-10 max-[768px]:pb-10 max-[768px]:items-center">
        {/* img about */}
        <div className="img_about">
          <Image src="/Img/img_About.png" width={600} height={700} className="max-[992px]:w-[350px] max-[768px]:hidden"/>
        </div>
        {/* caption about */}
        <div className="caption_about w-[466px] flex flex-col m-auto max-[992px]:max-w-[360px] max-[768px]:px-3 max-[768px]:max-w-[320px]">
          <h1 className="text-[#C19A5D] text-[30px] font-bold ">درباره ما</h1>
          <span className="text-[25px] pt-8 font-bold">
            ما داستان های شگفت انگیزی با مو تعریف می کنیم
          </span>
          <p className="pt-5 text-justify leading-[35px]">
            آیا رویای موهای براق و سالمی دارید که به نظر عالی می آیند و در هر
            مناسبتی آماده به تکان دادن هستند؟ ما رویاهای شما را محقق خواهیم کرد.
          </p>
          <Link href='/' className="mt-8 text-[#fff] bg-[#c19a5d] px-4 py-3 w-[90px] rounded-lg">داستان ما</Link>
        </div>
      </div>
    </div>
  );
};

export default About;

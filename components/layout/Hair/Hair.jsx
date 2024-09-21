import Image from "next/image";
import React from "react";
import "./Hair.css";
const Hair = () => {
  return (
    <div className="Hair mt-20 mb-20">
      <div className="content_hair max-w-[1000px] m-auto flex justify-between items-center max-[768px]:flex-col">
        <div className="icon_Hair flex flex-col m-5 max-[768px]:flex-row max-[768px]:flex-wrap max-[768px]:gap-12 max-[768px]:justify-center">
          <div className="img_Hair border-b-2 border-[#252525] mb-5">
            <Image src="/Img/Group 37.png" width={72} height={72} />
            <h1 className="pt-3 text-center">اصلاح / ابرو</h1>
          </div>
          <div className="img_Hair mb-5">
            <Image src="/Img/Group 73.png" width={72} height={72} />
            <h1 className="pt-3 text-center">اصلاح / ابرو</h1>
          </div>
          <div className="img_Hair mb-5">
            <Image src="/Img/Group 37.png" width={72} height={72} />
            <h1 className="pt-3 text-center">اصلاح / ابرو</h1>
          </div>
          <div className="img_Hair mb-5">
            <Image src="/Img/Group.png" width={72} height={72} />
            <h1 className="pt-3 text-center">اصلاح / ابرو</h1>
          </div>
          <div className="img_Hair mb-5">
            <Image src="/Img/Group 87.png" width={72} height={72} />
            <h1 className="pt-3 text-center">اصلاح / ابرو</h1>
          </div>
          <div className="img_Hair mb-5">
            <Image src="/Img/Group 87.png" width={72} height={72} />
            <h1 className="pt-3 text-center">اصلاح / ابرو</h1>
          </div>
        </div>
        <div className="caption_Hair max-[992px]:max-w-[500px] max-[768px]:max-w-full">
          <div className="title_caption-hair mb-7 w-full bg-[#0b1518c7] rounded-[7px] p-5">
            <h1 className="text-[#fff] text-[22px] font-bold">اصلاح / ابرو</h1>
          </div>
          <div className="captionHair flex flex-col p-5 leading-[35px]">
            <h1 className="text-[25px] font-bold pb-5">خدمات بند و وکس در نازگلین </h1>
            <span >* هزینه وکس : 100,000تومان</span>
            <span >* هزینه اصلاح : 100,000تومان</span>
            <span >* هزینه ابرو : 100,000تومان</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hair;

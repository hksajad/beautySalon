import Image from "next/image";
import React from "react";

const Hair = () => {
  return (
    <div className="Hair   mt-20 mb-20">
      <div className="content_hair max-w-[1000px] m-auto flex justify-between items-center">
        <div className="icon_Hair flex flex-col m-5">
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
        <div className="caption_Hair">
          <h1>سلام</h1>
        </div>
      </div>
    </div>
  );
};

export default Hair;

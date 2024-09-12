import React from "react";
import "./Services.css";
import Image from "next/image";
import Link from "next/link";
const Services = () => {
  return (
    <div className="services mt-32">
      <div className="title_services flex justify-center w-[100%]">
        <h6 className="text-[40px] text-[#ffffff0f] font-serif">SERVICES</h6>
      </div>
      <div className="content_service mt-12  m-auto ">
        <div className="itemServices flex justify-center gap-14 text-center flex-wrap max-[768px]:gap-4">
          <div className="boxServices">
            <div className="imgServices">
              <Image src="/Img/service1.png" width={74} height={74} />
            </div>
            <div className="titleServices">
              <h1 className="pt-5">مراقبت پوست</h1>
            </div>
          </div>
          <div className="boxServices">
            <div className="imgServices">
              <Image src="/Img/service2.png" width={74} height={74} />
            </div>
            <div className="titleServices">
              <h1 className="pt-5">آرایش</h1>
            </div>
          </div>
          <div className="boxServices">
            <div className="imgServices">
              <Image src="/Img/service3.png" width={74} height={74} />
            </div>
            <div className="titleServices">
              <h1 className="pt-5">پدیکور ، مانیکور </h1>
            </div>
          </div>
          <div className="boxServices">
            <div className="imgServices">
              <Image src="/Img/service4.png" width={74} height={74} />
            </div>
            <div className="titleServices">
              <h1 className="pt-5">مو</h1>
            </div>
          </div>
          <div className="boxServices">
            <div className="imgServices">
              <Image src="/Img/service5.png" width={74} height={74} />
            </div>
            <div className="titleServices">
              <h1 className="pt-5">پاک سازی</h1>
            </div>
          </div>
        </div>
        <div className="caption_services mt-20">
          <p className="w-[100%] m-auto text-center text-[25px] max-[768px]:px-5">
            برای داشتن روحیه عالی، ناخن های خود را درست کنید. لذت های ساده می
            توانند هفته شما را بسازند، نه فقط روز را
          </p>
        </div>
        <div className="login_services pt-10 flex justify-center">
            <Link href="/" className="border-2 rounded-[8px] px-4 py-2 text-[#ECD8BD]">مشاهده خدمات</Link>
        </div>
      </div>
    </div>
  );
};

export default Services;

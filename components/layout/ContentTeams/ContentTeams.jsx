import Image from "next/image";
import React from "react";

const ContentTeams = () => {
  return (
    <div className="ContentTeams mt-14  max-w-[1200px]  m-auto">
      <div className="content_teams flex justify-center items-center gap-24 flex-wrap max-[992px]:gap-[3rem]">
        <div className="box_teams w-[300px] flex flex-col items-center">
          <Image
            src="/Img/team1.png"
            width={416}
            height={416}
            className="rounded-lg"
          />
          <h5 className="pt-5 font-bold text-[18px]">فاطمه محمدی</h5>
          <h6 className="pt-3"> <span className="text-[#c19a5d]">تخصص : </span>اصلاح / ابرو</h6>
        </div>
        <div className="box_teams w-[300px] flex flex-col items-center">
          <Image
            src="/Img/team2.png"
            width={416}
            height={416}
            className="rounded-lg"
          />
          <h5 className="pt-5 font-bold text-[18px]">هانیه میر</h5>
          <h6 className="pt-3"> <span className="text-[#c19a5d]">تخصص : </span>میکاپ</h6>
        </div>
        <div className="box_teams w-[300px] flex flex-col items-center">
          <Image
            src="/Img/team3.png"
            width={416}
            height={416}
            className="rounded-lg"
          />
          <h5 className="pt-5 font-bold text-[18px]">کمند زارع</h5>
          <h6 className="pt-3"><span className="text-[#c19a5d]">تخصص : </span>شینیون</h6>
        </div>
        <div className="box_teams w-[300px] flex flex-col items-center">
          <Image
            src="/Img/team4.png"
            width={416}
            height={416}
            className="rounded-lg"
          />
          <h5 className="pt-5 font-bold text-[18px]">ریحانه جعفری</h5>
          <h6 className="pt-3"><span className="text-[#c19a5d]">تخصص : </span>اپیلاسیون</h6>
        </div>
        <div className="box_teams w-[300px] flex flex-col items-center">
          <Image
            src="/Img/team5.png"
            width={416}
            height={416}
            className="rounded-lg"
          />
          <h5 className="pt-5 font-bold text-[18px]">مبینا حسینی</h5>
          <h6 className="pt-3"><span className="text-[#c19a5d]">تخصص : </span>رنگ</h6>
        </div>
        <div className="box_teams w-[300px] flex flex-col items-center">
          <Image
            src="/Img/team6.png"
            width={416}
            height={416}
            className="rounded-lg"
          />
          <h5 className="pt-5 font-bold text-[18px]">زهرا صمدی</h5>
          <h6 className="pt-3"><span className="text-[#c19a5d]">تخصص : </span>ناخن</h6>
        </div>
      </div>
    </div>
  );
};

export default ContentTeams;

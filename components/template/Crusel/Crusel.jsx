import Image from "next/image";
import React from "react";
import "./Crusel.css";
const Crusel = () => {
  return (
    <div className="Crusel bg-[#252525] w-full pt-20 pb-20">
      <div className="container">
        <div className="crusel_item flex justify-center items-center gap-28 flex-wrap max-[992px]:gap-28 max-[768px]:gap-[35px]">
          <Image src="/Img/scrol1.png" width={112} height={112} />
          <Image src="/Img/scrol2.png" width={112} height={112} />
          <Image src="/Img/scrol3.png" width={112} height={112} />
          <Image src="/Img/scrol4.png" width={112} height={112} />
          <Image src="/Img/scrol5.png" width={112} height={112} />
        </div>
      </div>
    </div>
  );
};

export default Crusel;

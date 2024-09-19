import React from 'react'
import './Footer.css'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className='Footer bg-[#fff] pt-20 pb-20'>
        <div className="container">
            <div className="content_footer flex flex-col items-center justify-center">
                <Image src='/Img/IconFooter.png' width={100} height={100}/>
                <p className='text-[#252525] font-bold text-[25px] pt-5'>سالن زیبایی نازگلین </p>
                <div className="link_footer flex items-center gap-1 pt-10  justify-center ">
                    <h1 className='text-[#252525] font-bold text-[25px] max-[768px]:text-[17px]'>طراحی شده توسط</h1>
                    <Link href="https://developmart.ir/" className="mt-3"><Image src="/Img/develop.png" width={200} height={150}/></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
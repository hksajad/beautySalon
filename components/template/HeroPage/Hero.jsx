import React from 'react'
import "./Hero.css"
import Image from 'next/image'
import Link from 'next/link'
const Hero = () => {
  return (
    <div className='HeroPage flex justify-around items-center mt-20'>
        {/* img hero */}
        <div className="img_hero max-[992px]:mt-8">
            <Image src="/Img/img_hero.png" width={550} height={400} className='w-[1302px]'/>
        </div>
        {/* caption hero */}
        <div className="caption_hero w-[100%] flex flex-col">
            <h1 className='text-[55px] text-center font-bold mb-5'>به سالن زیبایی نازگلین <br />خوش آمدید</h1>
            <Link href="/" className='text-center  text-[#ECD8BD] w-[150px] m-auto border-2 rounded-[8px] px-4 py-2'>رزرو نوبت</Link>
        </div>
    </div>
  )
}

export default Hero
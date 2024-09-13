import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='footer mt-32'>
        <div className="footer w-full flex justify-around items-center bg-[#ECD8BD] rounded-[8px] ">
            <h1 className='text-[#252422] text-[25px] max-[768px]:p-[34px] max-[768px]:text-center'>طراحی شده توسط تیم <Link href="https://developmart.ir/" className='font-serif'>Develop Mart</Link></h1>
        </div>
    </div>
  )
}

export default Footer
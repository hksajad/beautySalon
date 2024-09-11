import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='navbarPage pt-5 flex justify-around items-center flex-row-reverse'>
        {/* logo */}
        <div className="logo_nav">
            <Image src="/Img/logo.png" width={50} height={50}/>
        </div>
        {/* menu */}
        <ul className="menu flex items-center gap-10">
            <li className=' text-[20px]'><Link href="/">صفحه اصلی</Link></li>
            <li className=' text-[20px]'><Link href="/">درباره ما</Link></li>
            <li className=' text-[20px]'><Link href="/">خدمات</Link></li>
            <li className=' text-[20px]'><Link href="/">رزرو نوبت</Link></li>
        </ul>
        {/* login */}
        <div className="login_nav">
            <Link href="/" className='text-[#ECD8BD] border-2 rounded-[8px] px-4 py-2'>تماس با ما</Link>
        </div>
    </div>
  )
}

export default Navbar
import Image from 'next/image'
import React from 'react'

const ContentTeams = () => {
  return (
    <div className='ContentTeams mt-14  max-w-[1200px] h-[200px] m-auto'>
        <div className="content_teams flex justify-center items-center gap-24 flex-wrap max-[992px]:gap-[3rem]">
            <div className="box_teams w-[300px] flex flex-col items-center">
                <Image src='/Img/team1.png' width={416} height={416}/>
            </div>
            <div className="box_teams w-[300px] flex flex-col items-center">
                <Image src='/Img/team2.png' width={416} height={416}/>
            </div>
            <div className="box_teams w-[300px] flex flex-col items-center">
                <Image src='/Img/team3.png' width={416} height={416}/>
            </div>
            <div className="box_teams w-[300px] flex flex-col items-center">
                <Image src='/Img/team4.png' width={416} height={416}/>
            </div>
            <div className="box_teams w-[300px] flex flex-col items-center">
                <Image src='/Img/team5.png' width={416} height={416}/>
            </div>
            <div className="box_teams w-[300px] flex flex-col items-center">
                <Image src='/Img/team6.png' width={416} height={416}/>
            </div>
        </div>
    </div>
  )
}

export default ContentTeams
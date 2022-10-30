import React, {useEffect} from 'react'
import Image from 'next/image'
import Aos from "aos";
import Link from 'next/link'
import ProjectOne from '../../public/assets/projects/realEstateProject.png'

function ProjectItem({title, backgroundImg, projectUrl}) {
    useEffect(() => {
        Aos.init({ duration: 200 });
      }, []);
  return (
    <div data-aos="zoom-in" data-aos-duration="2000" className='relative flex items-center justify-center h-auto shadow-xl p-4 rounded-lg group hover:bg-gradient-to-r from-[#aba6a6] to-[#a71b1b]'>
    <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt="/" />
    <div className='hidden group-hover:block absolute top-[25%] left-[30%%]'>
      <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
      <p className='pb-4 pt-2'>java script vanilla project</p>
      <Link href={projectUrl}>
        <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>click for more info</p>
      </Link>
    </div>
  </div>
  )
}

export default ProjectItem
import Image from 'next/image'
import React, {useState} from 'react'
import Link from "next/link"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ContactPageIcon from '@mui/icons-material/ContactPage';
function Main() {
    const [scroll, setScroll] = useState(false)
    const opacityImage = ()=>{
        if(window.scrollY >= 5){
            $(".image-container").scss("opacity", 1 - window.scrollY - 250)
            setScroll(true)
        }else{
            setScroll(false)
        }
window.addEventListener('scroll', opacityImage)
}
  return (
    <div className='main-container h-screen'>
        <div className='inner-container max-w-[1240px]'>
            <div>
                <h1 className='py-4 text-white'>
                    Hi, i'm <span className='text-[#000000]'>Malako Nagato</span>
                </h1>
                <h1 className='py-2 text-white'>
                    A Full-Stack Developer 
                </h1>
                <p className='py-4 max-w-[70%] m-auto font-bold'>
                    
                </p>
                <div className='icons-container max-w-[330px] py-4'>
                    <div className='icon-container rounded-full shadow-lg shadow-black bg-white p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <LinkedInIcon />
                    </div>
                    <div className='icon-container rounded-full shadow-lg shadow-black bg-white p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <GitHubIcon />
                    </div>
                    <Link href="mailto:Bennynagato17@gmail.com">
                    <div href className='icon-container rounded-full shadow-lg shadow-black bg-white p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <MailOutlineIcon />
                    </div>
                    </Link>
                    <div className='icon-container rounded-full shadow-lg shadow-black bg-white p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <ContactPageIcon />
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Main
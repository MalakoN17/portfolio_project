import React, { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import MeImage from "../../../public/assets/images/me-removebg-preview.png"
import "aos/dist/aos.css";
function About() {
  useEffect(() => {
    Aos.init({ duration: 200 });
  }, []);
  return (
    <div id='about' className='about-container md:h-screen'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2 text-center sm:text-left'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 font-bold text-3xl text-gray-600'>
          Hi, I'm a Full-Stack developer, a graduate of the "Career Tech" bootcamp.
        I like to learn new technologies and face challenges, tasks and more.
        Has the ability to work in a team, creative thinking and attention to detail.
        I am currently looking for a job as a junior Full-Stack developer.
          </p>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
        </div>
        <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000" className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={MeImage} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
}

export default About;

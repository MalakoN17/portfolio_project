import React, { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
function About() {
  useEffect(() => {
    Aos.init({ duration: 200 });
  }, []);
  return (
    <div className="about-container w-full md:h-screen p-2 flex items-center py-16">
      <div className="flex justify-evenly p-5">
        <div className="about-text col-span-2 p-5" data-aos="fade-right"  data-aos-offset="300"  data-aos-duration="1000">
          <h1 className='py-2 text-black uppercase text-5xl'>About</h1>
          <p className='py-2 font-bold  text-gray-600 text-3xl'>
            my self 
        </p>
        <p className='py-2'>
        Hi, I'm a Full-Stack developer, a graduate of the "Career Tech" bootcamp.<br/>
        I like to learn new technologies and face challenges, tasks and more.
        Has the ability to work in a team, creative thinking and attention to detail.<br/>
        I am currently looking for a job as a junior Full-Stack developer.
        </p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-offset="500"
          data-aos-duration="2000"
        >
          <Image
            src="/../public/assets/images/me-removebg-preview.png"
            width="500px"
            height="550px"
          />
        </div>
      </div>
    </div>
  );
}

export default About;

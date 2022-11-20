import React, { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import MeImage from "../../../public/assets/images/me-removebg-preview.png";
import Link from "next/link";
import Projects from "../../Projects/Projects";
import "aos/dist/aos.css";
function About() {
  useEffect(() => {
    Aos.init({ duration: 200 });
  }, []);
  return (
    <div id="about" className="about-container mt-48 sm:mt-0 md:h-screen">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2 text-center sm:text-left">
          <p className="uppercase text-2xl tracking-widest text-[#ffffff] font-bold">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 font-bold text-3xl text-white">
            Hi, I'm a Full-Stack developer and a graduate of "Career Tech"
            bootcamp. I like to learn new technologies, face challenges and
            tasks. I bring creative thinking and attention to details to work
            teams. I am currently looking for a job as a junior Full-Stack
            developer.
          </p>
          <Link
            href="/Projects"
            className="py-2 text-black underline cursor-pointer"
          >
            Check out some of my latest projects.
          </Link>
        </div>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="w-full h-auto m-auto shadow-xl shadow-black rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300"
        >
          <Image src={MeImage} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
}

export default About;

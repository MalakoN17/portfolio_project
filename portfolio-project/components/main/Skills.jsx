import React, {useEffect} from 'react'
import Image from 'next/image'
import Aos from "aos";
import Bootstrap from '../../public/assets/skils/bootstrap.png'
import Css from '../../public/assets/skils/css.png'
import Database from '../../public/assets/skils/d3.png'
import Express from '../../public/assets/skils/express.png'
import Firebase from '../../public/assets/skils/firebase.png'
import Html from '../../public/assets/skils/html.png'
import Tailwind from '../../public/assets/skils/tailwind.png'
import Sass from '../../public/assets/skils/sass.png'
import ReactLogo from '../../public/assets/skils/react.png'
import MaterialUi from '../../public/assets/skils/materialUi.png'
import NodeJs from '../../public/assets/skils/node.png'
import Python from '../../public/assets/skils/python-logo.png'
import Mongodb from '../../public/assets/skils/mongodb.png'
import Vscode from '../../public/assets/skils/vsc.png'
import Slack from '../../public/assets/skils/slack.png'
import Javascript from '../../public/assets/skils/javascriptLogo.png'
import Git from '../../public/assets/skils/Git-Icon.png'
import Github from '../../public/assets/skils/GitHub-logo.png'
function Skils() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
      }, []);
  return (
    <div id='skills' className='w-full p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='section-title'>
          Skills
        </p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='flex flex-col sm:flex-row gap-8'>
            <div data-aos="fade-up" className='bg-white rounded-lg p-2 w-full'>
                <h2>Frontend-Skills</h2>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Html} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex items-center justify-center'>
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Css} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex  items-center justify-center'>
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={ReactLogo} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Tailwind} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Javascript} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
            </div>
            <div data-aos="fade-up" className='bg-white rounded-lg p-2 w-full'>
                <h2>Backend-Skills</h2>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Firebase} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex items-center justify-center'>
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Python} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex items-center justify-center'>
                <h3>Python</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Express} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex items-center justify-center'>
                <h3>Express</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Mongodb} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex items-center justify-center'>
                <h3>Mongodb</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={NodeJs} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex items-center justify-center'>
                <h3>NodeJs</h3>
              </div>
            </div>
          </div>
            </div>
            <div data-aos="fade-up" className='bg-white rounded-lg p-2 w-full'>
                <h2>Desktop-Environment</h2>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Vscode} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex items-center justify-center'>
                <h3>Vscode</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Slack} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex items-center justify-center'>
                <h3>Slack</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Git} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex items-center justify-center'>
                <h3>Git</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Github} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex items-center justify-center'>
                <h3>Github</h3>
              </div>
            </div>
          </div>
            </div>








        </div>
      </div>
    </div>
  )
}

export default Skils
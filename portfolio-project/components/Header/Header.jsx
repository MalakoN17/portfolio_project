import React from 'react'
import Image from 'next/image'
import Navbar from '../Navbar/Navbar'

function Header() {
  return (
    <div className='header shadow-xl z-[100] p-4 '>
      <Image src="/../public/assets/images/protfolioLogo.png" width='120' height='60'/>
      <div className='flex '>
        <h5>Menu</h5>
    <Navbar />
    </div>
    </div>
  )
}

export default Header
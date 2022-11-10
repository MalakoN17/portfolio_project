import React, { useState } from "react";
import Image from "next/image";
import Navbar from "../Navbar/Navbar";
function Header() {

  return (
    <div className="header fixed shadow-xl z-[100] p-4 ">
      <Image
        src="/../public/assets/images/protfolioLogo.png"
        width="120"
        height="60"
      />
      <div className="flex items-center gap-2 p-2 rounded-md hover:bg-black hover:text-white">
        <h5 className="text-xl">Menu</h5>
        <Navbar />
      </div>
    </div>
  );
}

export default Header;

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "../Navbar/Navbar";
import Switch from '@mui/material/Switch'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FormControlLabel from '@mui/material/FormControlLabel';
function Header({ setDarkMode }) {
  const [darkModeLocal, setDarkModeLocal] = useState(false);

  return (
    <div className="header fixed shadow-xl z-[100] p-4 ">
      <Image
        src="/../public/assets/images/protfolioLogo.png"
        width="120"
        height="60"
      />
      <div className="flex items-center gap-2">
      <FormControlLabel control={<Switch defaultChecked color="default" />} label="Dark Mode" 
          onClick={() => {
            setDarkModeLocal(!darkModeLocal);
            setDarkMode(!darkModeLocal);
          }}
        >
          <DarkModeIcon />
        </FormControlLabel>
        <h5>Menu</h5>
        <Navbar />
      </div>
    </div>
  );
}

export default Header;

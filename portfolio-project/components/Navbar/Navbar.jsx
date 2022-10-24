import * as React from "react";
import Link from "next/link";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="navbar">
      <MenuIcon variant="outlined" onClick={handleClickOpen} />
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition} className="up-menu">
        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
          <ArrowDownwardIcon />
        </IconButton>
        
        <div className="menu-container mt-3 flex flex-col items-center gap-3">
          <Link href="/" className="hover:bg-gray-500">
            <h1 className="hover:bg-gray-500">Home</h1>
          </Link>
          <Link href="/">
            <h1>About</h1>
          </Link>
          <Link href="/">
            <h1>Skills</h1>
          </Link>
          <Link href="/">
            <h1>Project</h1>
          </Link>
        </div>
      </Dialog>
    </div>
  );
}

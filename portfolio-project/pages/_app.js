import "../styles/globals.css";
import {useState} from "react"
import Navbar from "../components/Navbar/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div className="app-container">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

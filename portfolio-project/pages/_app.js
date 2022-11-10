import "../styles/globals.css";
import Header from "../components/Header/Header";
import {useState} from "react"

function MyApp({ Component, pageProps }) {
  return (
    <div className="app-container">
      <Header/>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

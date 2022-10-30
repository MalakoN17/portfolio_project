import "../styles/globals.css";
import Header from "../components/Header/Header";
import {useState} from "react"

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode ? "dark" : ""}>
      <Header setDarkMode={setDarkMode}/>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

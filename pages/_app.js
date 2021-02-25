import "../styles/globals.scss";
import "tailwindcss/tailwind.css";

// core components
import Navbar from "../components/navbar/navbar.js";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
  
}

export default MyApp

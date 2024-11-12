import Navbar from "./components/Navbar";
import { RingLoader } from "react-spinners";
import Home from './components/Home'
import Social from "./components/Social"

import { useState, useEffect } from "react";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Project from "./components/Project";
import  About  from "./components/About";
import  Top from "./components/Top";


const override = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "5rem",
  borderColor: "red",
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="flex h-screen justify-center items-center bg-[#00040f]">
          <RingLoader
            color="#0891b2"
            loading={loading}
            cssOverride={override}
            size={90}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div>
          <Top />
          <Navbar />
          <Home />

          <About/>
          <Social />
          <Education/>
         
          <Skills/>
          <Project/>
          <Contact/>
          <Footer/>
        </div>
      )}
    </>
  );
};
export default App;

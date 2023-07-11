import React from "react";
import Path from "./routes/Path";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import "./App.css"
import Footer from "./components/Footer/Footer";
import Resume from "./components/Resume/Resume";
const App = () => {
  return (
    <>
    <div className=" h-[300vh]">

    <div className=" h-[122px]">
    <Navbar/>
    </div>
    {/* <section id="home" className="section-separator">
     <h1 className=" text-2xl text-white ">Home</h1>
    </section>
    <section id="experience" className="section-separator">
     <h1 className=" text-2xl text-white ">Experience</h1>
    </section>
    <section id="education" className="section-separator">
     <h1 className=" text-2xl text-white ">education</h1>
    </section>
    <section id="portfolio" className="section-separator">
    <h1 className=" text-2xl text-white ">portfolio</h1>
    </section>
    <section id="blog" className="section-separator">
    <h1 className=" text-2xl text-white ">blog</h1>
  </section> */}
  <section >
   <Resume/>
  </section>
    
    <section id="contact" className="section-separator">
        <Contact/>
      </section>
      <Footer/>
    </div>
      {/* <Path /> */}
    </>
  );
};

export default App;

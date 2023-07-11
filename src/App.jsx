import React from "react";
import Path from "./routes/Path";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Portfolio from "./components/Portfolio/Portfolio";
import Blog from "./components/Blog/Blog";
const App = () => {
  return (
    <>
      <div className=" h-[300vh] ">
        <div className=" h-[122px]">
          <Navbar />
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
  
    <section id="resume" className="section-separator">
     <h1 className=" text-2xl text-white ">Resume</h1>
    </section>
     */}
        <section id="portfolio" className="section-separator">
          <Portfolio />
        </section>
        <section id="blog" className="section-separator">
          <Blog />
        </section>
        <section id="contact" className="section-separator">
          <Contact />
        </section>
        <Footer />
      </div>
      {/* <Path /> */}
    </>
  );
};

export default App;

import React from "react";
import { motion } from "framer-motion";
import ProfileImage from "../assets/myself.jpg";
import GitHub from "../assets/github.jpg";
import Linkedin from "../assets/linkedin.jpg";

function Home() {
  return (
    <div id="home" className="flex items-center justify-center min-h-screen bg-[#F1F9F6]">
      <motion.div
        className="p-4 mt-20 mx-4 sm:mx-10 bg-white w-full min-h-100 shadow-lg"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="mx-4 sm:mx-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left bg-blue-950 p-6 sm:p-10">
            <p className="text-slate-500 text-xl sm:text-2xl">Hello, It's Me</p>
            <h1 className="text-3xl sm:text-4xl text-white font-bold">Moneesha Chameli</h1>
            <h2 className="text-xl sm:text-2xl text-slate-500">
              and I'm a <br />
              <span className="text-3xl sm:text-4xl">Front-End Developer</span>
            </h2>
            <a
              href="https://drive.google.com/file/d/12oMD_d1SKnViOIMXCgEh-sn7T1O7qhG5/view?usp=sharing"
              download="K.P.W.M.Chameli CV.pdf"
              className="mt-6 sm:mt-10 inline-block px-6 py-3 bg-slate-300 text-blue-950 font-semibold rounded-lg hover:bg-slate-500 transition-all"
            >
              Download Resume
            </a>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a href="https://github.com/MoneeC02" target="_blank" rel="noopener noreferrer">
                <img src={GitHub} alt="GitHub" className="w-8 sm:w-10 h-8 sm:h-10" />
              </a>
              <a href="https://www.linkedin.com/in/moneesha-chameli-95a7782a0/" target="_blank" rel="noopener noreferrer">
                <img src={Linkedin} alt="LinkedIn" className="w-8 sm:w-10 h-8 sm:h-10" />
              </a>
            </div>
          </div>
          <img
            src={ProfileImage}
            alt="Moneesha Chameli"
            className="w-72 sm:w-96 h-72 sm:h-96 object-cover rounded-lg mx-auto md:mx-0 mt-8 md:mt-0"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default Home;

import React from "react";
import MyImage from "../assets/me.jpg";
import { motion } from "framer-motion";

function About() {
  return (
    <div id="about" className="flex items-center justify-center min-h-screen bg-[#F1F9F6]">
      <motion.div
        className="mt-10 mx-4 sm:mx-10 bg-white w-full min-h-[100px] shadow-lg p-6 sm:p-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="mx-4 sm:mx-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <img
              src={MyImage}
              alt="Moneesha Chameli"
              className="w-72 sm:w-96 h-72 sm:h-96 object-cover rounded-lg"
            />
          </div>

          <div className="bg-blue-950 text-center md:text-left p-6 sm:p-10 rounded-lg">
            <h2 className="text-slate-300 text-3xl sm:text-4xl font-bold">ABOUT ME</h2>
            <p className="text-slate-300 text-lg mt-4">
              I am a motivated undergraduate student looking for an internship in front-end development,
              with a strong interest in creating intuitive and visually appealing user interfaces.
              <br />I wish to expand my knowledge of front-end development while also learning back-end development
              to build full-stack applications.
              <br />I am eager to collaborate with teams, apply problem-solving skills, and gain hands-on experience in a
              dynamic development environment.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;

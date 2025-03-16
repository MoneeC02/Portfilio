import React, { useRef } from "react";
import { motion } from "framer-motion";
import ecoImage from "../assets/eco.jpg";
import todoImage from "../assets/todo.jpg";
import charityImage from "../assets/charity.jpg";
import portfilioImage from "../assets/portfilio.jpg";
import crudImage from "../assets/curd.jpg";

const details = [
  {
    title: "Eco Project",
    image: ecoImage,
    link: "https://github.com/MoneeC02/FirstYear---MiniProject",
  },
  {
    title: "Portfolio Website",
    image: portfilioImage,
    link: "https://MoneeC02.github.io/Portfilio/",
  },
  {
    title: "To-Do Web Application",
    image: todoImage,
    link: "https://github.com/MoneeC02/ToDo-WebApplication",
  },
  {
    title: "Charity Gala Event Platform",
    image: charityImage,
    link: "https://github.com/MoneeC02/First-React-Project",
  },
  {
    title: "CRUD System",
    image: crudImage,
    link: "https://github.com/MoneeC02/CRUD",
  },
];

function Project() {
  const scrollRef = useRef(null);
  return (
    <div 
      id="projects" 
      className="flex flex-col items-center justify-center min-h-screen bg-[#F1F9F6] p-4 sm:p-8"
    >
      <motion.div
        className="mt-10 mx-4 sm:mx-10 bg-white w-full shadow-lg p-6 sm:p-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-blue-950 text-3xl sm:text-4xl font-bold text-center mb-10">
          Things I Have Done So Far
        </h2>

        <div 
          ref={scrollRef} 
          className="w-full overflow-x-auto"
          style={{ scrollBehavior: "smooth" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-10 pb-10">
            {details.length > 0 ? (
              details.map((project, index) => (
                <motion.div
                  key={index}
                  className="relative w-full h-96 overflow-hidden rounded-xl shadow-lg group p-4 bg-slate-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-1/2 object-cover transition-transform duration-500 group-hover:-translate-y-5"
                  />
                  
                  <div className="absolute bottom-0 left-0 w-full bg-blue-950 text-white text-center p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <h3 className="text-lg font-semibold mb-10">{project.title}</h3>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="underline text-sm">
                      View Project
                    </a>
                  </div>
                </motion.div>
              ))
            ) : (
              <p className="text-gray-500 text-center">No projects available.</p>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Project;

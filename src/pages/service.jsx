import React, { useState } from "react";
import { motion } from "framer-motion";
import WebImage from "../assets/web.jpg";
import UiUxImage from "../assets/UiUx.jpg";

function Service() {
  const services = [
    {
      title: "UI/UX Design",
      image: UiUxImage,
      description:
        "Explore the art of intuitive and engaging design with my UI/UX creations. I craft user-friendly interfaces that combine beauty with functionality, ensuring a seamless experience.",
    },
    {
      title: "Web Design",
      image: WebImage,
      description:
        "Step into the world of creative web design with my unique digital creations. I turn ideas into visually stunning and user-friendly websites that leave a lasting impression.",
    },
  ];

  return (
    <div id="services" className="flex items-center justify-center bg-[#F1F9F6] mt-10 mb-20">
      <motion.div
        className="mt-10 mx-10 bg-white w-full min-h-100 shadow-lg p-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-blue-950 text-4xl font-bold text-center mb-10">
          What I Do
        </div>

        <div className="grid md:grid-cols-2 gap-8 h-full items-stretch">
          {services.map((service, index) => {
            return <ServiceCard key={index} service={service} />;
          })}
        </div>
      </motion.div>
    </div>
  );
}

function ServiceCard({ service }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="relative w-full h-64 cursor-pointer perspective"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="w-full h-full rounded-lg shadow-md text-center flex flex-col justify-center items-center bg-white transition-transform duration-500"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="absolute w-full h-full flex flex-col justify-center items-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover rounded-lg"
          />
          <h3 className="absolute bottom-4 left-0 right-0 text-2xl font-bold text-white bg-black/50 p-2">
            {service.title}
          </h3>
        </div>

        <div
          className="absolute w-full h-full bg-white p-6 rounded-lg shadow-md text-center flex flex-col justify-center items-center"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <p className="text-blue-950 text-md">{service.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Service;

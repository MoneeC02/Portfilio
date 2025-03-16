import React from "react";
import NavBar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Service from "./pages/service";
import Skill from "./pages/skill";
import Project from "./pages/project";
import Contact from "./pages/contact";
import "./index.css";

function App() {
  return (
    <div className="bg-[#F1F9F6] min-h-screen w-full flex flex-col items-center">
      <NavBar />
      <main className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
       <Home />
       <About />
      <Service />
        <Skill />
       <Project />
       <Contact />
      </main>
    </div>
  );
}

export default App;

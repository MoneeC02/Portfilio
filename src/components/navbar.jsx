import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 bg-slate-300 shadow-md transition-all duration-300 ${
        sticky ? "py-3 shadow-lg" : "py-5"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-8">
        <h1 className="text-3xl font-bold text-blue-950">K.P.W.M.Chameli</h1>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-950"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Navigation Menu */}
        <ul
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-slate-300 md:flex space-y-4 md:space-y-0 md:space-x-6 text-lg font-bold text-blue-950 p-4 md:p-0 transition-all duration-300 ${
            menuOpen ? "flex flex-col items-start" : "hidden md:flex"
          }`}
        >
          {["home", "about", "services", "skills", "projects", "contact"].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className="hover:text-blue-500 capitalize block"
                onClick={() => setMenuOpen(false)}
              >
                {section.replace("-", " ")}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

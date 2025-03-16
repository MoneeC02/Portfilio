import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const skills = {
  "Web Development": [
    { name: "ReactJS", level: 50 },
    { name: "TailwindCSS", level: 65 },
    { name: "JavaScript", level: 50 },
    { name: "HTML", level: 80 },
    { name: "CSS", level: 80 },
  ],
  "Programming Languages": [
    { name: "Java", level: 75 },
    { name: "C", level: 50 },
    { name: "Python", level: 60 },
    { name: "PHP", level: 50 },
  ],
  Tools: [
    { name: "Figma", level: 80 },
    { name: "Git", level: 60 },
    { name: "Canva", level: 85 },
    { name: "Trello", level: 65 },
  ],
  Database: [
    { name: "MySQL", level: 85 },
    { name: "Firebase", level: 55 },
  ],
};

const SkillBar = ({ name, level, triggerAnimation }) => {
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (triggerAnimation) {
      setProgress(0); // Reset progress before starting the animation

      let currentProgress = 0;
      // Clear any existing intervals to avoid multiple intervals running at once
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      // Set up interval to increase progress
      intervalRef.current = setInterval(() => {
        currentProgress += 1;
        setProgress((prev) => (prev < level ? currentProgress : level));
        if (currentProgress >= level) {
          clearInterval(intervalRef.current); // Stop interval when target is reached
        }
      }, 10); // Adjust speed for smoother progress

      return () => {
        // Clean up the interval on unmount
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [triggerAnimation, level]);

  return (
    <div className="mb-4">
      <div className="text-sm font-semibold text-white mb-1">{name}</div>
      <div className="w-full bg-slate-500 rounded-full h-5 relative">
        <motion.div
          className="bg-white h-5 rounded-full flex items-center justify-center text-xs font-bold text-black"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1.5 }}
        >
          <span className="absolute right-2 text-black">{progress}%</span>
        </motion.div>
      </div>
    </div>
  );
};

const Skill = () => {
  const [triggerAnimation, setTriggerAnimation] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("skills");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75 && rect.bottom > 0) {
          setTriggerAnimation(true); // Trigger animation when section is in view
        } else {
          setTriggerAnimation(false); // Reset animation if not in view
        }
      }
    };

    // Use IntersectionObserver to check when the section enters the viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggerAnimation(true);
        } else {
          setTriggerAnimation(false);
        }
      },
      { threshold: 0.5 } // Trigger when at least 50% of the section is in view
    );

    const section = document.getElementById("skills");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section); // Cleanup observer
      }
    };
  }, []);

  return (
    <div
      id="skills"
      className="flex items-center justify-center bg-[#F1F9F6] mt-10 mb-20"
    >
      <motion.div
        className="mt-10 mx-10 bg-white w-full min-h-100 shadow-lg p-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center text-blue-950 mb-10">MY SKILLS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-10">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="bg-blue-950 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-white">{category}</h3>
              {skillList.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  triggerAnimation={triggerAnimation}
                />
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skill;

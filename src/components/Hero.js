import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../assets/profile.jpg";

function Hero() {

  // Mouse movement interaction
  const handleMouseMove = (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 30;
    const y = (window.innerHeight / 2 - e.clientY) / 30;

    const element = document.getElementById("hero-content");
    if (element) {
      element.style.transform = `translate(${x}px, ${y}px)`;
    }
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="h-screen flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800"
    >

      {/* Glow Effects */}
      <div className="absolute w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20 top-10 left-10 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20 bottom-10 right-10 animate-pulse"></div>

      {/* Content */}
      <div
        id="hero-content"
        className="text-center text-white px-4 transition-transform duration-200"
      >

        {/* Profile Image */}
        <motion.img
          src={profile}
          alt="Charles Ochieng"
          className="w-32 h-32 mx-auto rounded-full border-4 border-blue-500 shadow-lg"
          whileHover={{ scale: 1.1, rotate: 2 }}
          transition={{ type: "spring", stiffness: 200 }}
        />

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mt-4"
        >
          Hi, I'm Charles Ochieng’
        </motion.h1>

        {/* Roles */}
        <h2 className="mt-4 text-xl md:text-2xl font-semibold text-blue-400">
          <Typewriter
            words={[
              "Full-Stack Developer",
              "Problem-Solving Engineer",
              "API & Database Specialist",
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={2000}
          />
        </h2>

        {/* Description */}
        <p className="mt-5 max-w-xl mx-auto">
          I design and build scalable systems that solve real-world problems 
          using modern technologies and strong algorithmic thinking.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-5 text-2xl">
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
            <FaGithub className="hover:text-blue-400 transition" />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
            <FaLinkedin className="hover:text-blue-400 transition" />
          </a>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          {/* <a
            href="/cv.pdf"
            download
            className="bg-blue-600 px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Download CV
          </a> */}

          <a
            href="#projects"
            className="border border-white px-6 py-2 rounded hover:bg-white hover:text-black transition"
          >
            View Projects
          </a>
        </div>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="text-2xl font-bold text-blue-400">3+</h3>
            <p className="text-sm">Projects</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-blue-400">8+</h3>
            <p className="text-sm">Skills</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-blue-400">1+</h3>
            <p className="text-sm">Experience</p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-10 animate-bounce text-xl opacity-70">
          ↓
        </div>

      </div>
    </section>
  );
}

export default Hero;
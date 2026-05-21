import { Helmet } from "react-helmet";
import React, { Suspense, lazy } from "react";
import { Analytics } from "@vercel/analytics/react";

const Navbar = lazy(() => import("./components/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Education = lazy(() => import("./components/Education"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const Services = lazy(() => import("./components/Services"));

function App() {
  return (
    <>
    <Analytics />
    <div className="dark:bg-gray-900 dark:text-white">
      <Helmet>
        <title>Charles Ochieng | Full-Stack Developer</title>

        <meta
          name="description"
          content="Charles Ochieng Portfolio - Full-Stack Developer offering web development, software solutions, Wi-Fi installations, cyber services, and graphic design."
        />

        <meta
          name="keywords"
          content="Charles Ochieng, Full Stack Developer, React Developer, Web Developer Kenya, Benki Kuu Tech Solutions"
        />

        <meta name="author" content="Charles Ochieng" />

        {/* Open Graph */}
        <meta property="og:title" content="Charles Ochieng Portfolio" />
        <meta
          property="og:description"
          content="Professional portfolio and tech solutions website."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
        <Footer />
      </Suspense>
    </div>
    </>
  );
}

export default App;
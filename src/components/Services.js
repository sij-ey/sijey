import React from "react";
import {
  FaWifi,
  FaShieldAlt,
  FaLaptop,
  FaTools,
  FaCode,
  FaPlug,
  FaPaintBrush,
} from "react-icons/fa";

const services = [
  {
    icon: <FaWifi />,
    title: "Wi-Fi Installations",
    desc: "Fast, secure and reliable internet setup for homes and offices.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Cyber Services",
    desc: "Security solutions and cyber protection services.",
  },
  {
    icon: <FaLaptop />,
    title: "Laptop & Computer Sales",
    desc: "Affordable and high-quality computers and accessories.",
  },
  {
    icon: <FaTools />,
    title: "Laptop Repair",
    desc: "Hardware & software repair to get your devices running.",
  },
  {
    icon: <FaCode />,
    title: "Web & Software Services",
    desc: "Custom websites and systems tailored to your needs.",
  },
  {
    icon: <FaPlug />,
    title: "Electronics Sales",
    desc: "Wide range of electronics and accessories available.",
  },
  {
    icon: <FaPaintBrush />,
    title: "Graphic Design",
    desc: "Creative branding, posters, and visual designs.",
  },
];

function Services() {
  return (
    <section id="services" className="p-10 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center">
        Benki Kuu Tech Solutions
      </h2>
      <p className="text-center mt-2 text-gray-500">
        Professional tech services for individuals and businesses
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 bg-white dark:bg-gray-800 rounded shadow hover:scale-105 transition"
          >
            <div className="text-3xl text-blue-500 mb-3">
              {service.icon}
            </div>
            <h3 className="font-bold text-lg">{service.title}</h3>
            <p className="text-sm mt-2">{service.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <a href="https://wa.me/254743369783" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600">
        Chat on WhatsApp
        </a>
      </div>
    </section>
  );
}

export default Services;
import React from "react";
import { projects } from "../data";

function Projects() {
  return (
    <section id="projects" className="p-10">
      <h2 className="text-2xl font-bold text-center">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {projects.map((p, i) => (
          <div key={i} className="p-5 shadow rounded bg-white dark:bg-gray-800">
            <h3 className="font-bold">{p.title}</h3>
            <p>{p.description}</p>

            <div className="mt-3">
              <a href={p.github} className="mr-3 text-blue-500">GitHub</a>
              <a href={p.demo} className="text-green-500">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
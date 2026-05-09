import React from "react";

function Skills() {
  return (
    <section className="p-10">
      <h2 className="text-2xl font-bold text-center">Skills</h2>

      <div className="grid md:grid-cols-3 gap-6 mt-6 text-center">

        <div>
          <h3 className="font-bold">Programming</h3>
          <p>C, C++, Java, Python, JavaScript</p>
        </div>

        <div>
          <h3 className="font-bold">Web & Database</h3>
          <p>HTML, CSS, MySQL, Git, GitHub</p>
        </div>

        <div>
          <h3 className="font-bold">Other</h3>
          <p>Data Structures, OOP, Technical Writing, Graphic Design</p>
        </div>

      </div>
    </section>
  );
}

export default Skills;
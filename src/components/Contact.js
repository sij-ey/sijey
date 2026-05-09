import React from "react";

function Contact() {
  return (
    <section id="contact" className="p-10">
      <h2 className="text-2xl font-bold text-center">Contact Me</h2>

      <form
        action="https://formspree.io/f/xykoyqry"
        method="POST"
        className="max-w-md mx-auto mt-6 flex flex-col"
      >
        <input name="name" placeholder="Name" className="p-2 border mb-3" />
        <input name="email" type="email" placeholder="Email" className="p-2 border mb-3" />
        <textarea name="message" placeholder="Message" className="p-2 border mb-3"></textarea>

        <button className="bg-blue-600 text-white p-2">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;


import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="pt-12">
      <hr className="h-px max-w-screen-xl mx-auto bg-gray-200 border-0" />
      <div className="max-w-screen-xl m-auto px-4 py-8 lg:px-6 sm:py-16 lg:py-24">
        {/* Contact Section Heading */}
        <div className="max-w-2xl mx-auto text-center mb-16 lg:mb-20">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-primary-900 sm:text-4xl">
            Contact Me
          </h2>
          <p
            className="mt-4 font-normal
            text-base
            sm:text-lg
          text-gray-500"
          >
            Crafted with skill and care to help our clients grow their business!
          </p>
        </div>
        <div className="space-y-12 sm:space-y-16"></div>
      </div>
    </section>
  );
};

export default Contact;

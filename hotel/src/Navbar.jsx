import React from "react";


const Navbar = () => {
  const navitems = ["Home", "Services", "Gallery", "Book now", "About us"];

  return (
    <section className="absolute top-0 left-0 w-full z-50 bg-blue-900 bg-opacity-50 py-4 mb-0">
    <div className="container mx-auto flex items-center justify-between">
      <img src="./logo.jpg" alt="" className="h-12 rounded-full mx-10" />
      <ul className="flex space-x-6">
        {navitems.map((item, index) => (
          <li key={index}>
            <a
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="block mt-4 lg:inline-block lg:mt-0 mr-10 text-white hover:text-green-400 transition duration-300 hover:underline"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
  
  );
};

export default Navbar;
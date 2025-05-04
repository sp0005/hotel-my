import React from "react";

const Gallery = () => {
  const images = [
    { src: "/img1.jpg", alt: "Hotel entrance" },
    { src: "/img2.jpg", alt: "Hotel room" },
    { src: "/img3.jpg", alt: "Dining area" },
    { src: "/img4.jpg", alt: "Swimming pool" },
    { src: "/img5.jpg", alt: "Hotel exterior" },
    { src: "/img6.jpg", alt: "Event hall" },
    { src: "/img7.jpg", alt: "Hotel staff" },
    { src: "/img8.jpg", alt: "Garden view" },
    { src: "/img9.jpg", alt: "Food presentation" },
    { src: "/img10.jpg", alt: "Hotel pathway" },
    { src: "/img12.jpg", alt: "Night view" },
    { src: "/img13.jpg", alt: "Reception area" },
  ];

  return (
    <section className="my-8 w-full flex flex-col">
      <h2 className="text-3xl font-bold text-center py-6">Our Gallery</h2>
      <div className="flex-1 overflow-y-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;

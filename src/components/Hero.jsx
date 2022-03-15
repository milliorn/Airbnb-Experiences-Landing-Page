import React from "react";
import PhotoGrid from "../assets/photo-grid.png";

export default function Hero({ src, alt, h1, p }) {
  return (
    <section className="flex flex-col p-5 font-sans tracking-wide">
      <img src={PhotoGrid} alt={alt} className="self-center xl:max-w-7xl" />
      <h1 className="mx-auto mt-8 mb-2 text-4xl font-semibold md:ml-12">
        {h1}
      </h1>
      <p className="mx-auto mt-2 text-xl font-light md:ml-12">{p}</p>
    </section>
  );
}

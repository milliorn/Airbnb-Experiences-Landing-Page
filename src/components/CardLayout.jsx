import React from "react";
import katie from "../assets/katie-zaferes.png";
import bike from "../assets/mountain-bike.png";
import wedding from "../assets/wedding-photography.png";

const randomNum = (fixed) => (4.0 + Math.random() * 1.0).toFixed(fixed);

function Image({ href, alt, src }) {
  return (
    <a href={href}>
      <img alt={alt} className="block w-full" src={src} />
    </a>
  );
}

function Ratings({ country, rating, votes }) {
  return (
    <div className="flex items-center justify-between leading-tight md:p-4">
      <h1 className="lg:text-lg">
        <a className="text-black no-underline hover:underline" href="/">
          <span className="text-red-600 ">&#9733;</span>
          <span>{votes}</span>
          <span className="invisible md:visible text-neutral-400">
            ({rating}) &#183; {country}
          </span>
        </a>
      </h1>
    </div>
  );
}

function Title({ title }) {
  return (
    <div className="flex items-center justify-between leading-none md:p-4">
      <p className="no-underline hover:underline">{title}</p>
    </div>
  );
}

function Price({ price }) {
  return (
    <div className="flex items-center justify-between leading-none md:p-4">
      <p className="text-sm no-underline hover:underline">
        <span className="font-bold">From ${price}</span> / person
      </p>
    </div>
  );
}

function Card({ href, alt, src, title, price, country }) {
  return (
    <div className="w-full h-full px-1 my-1 md:w-1/2 md:my-4 md:px-4">
      <article className="overflow-hidden rounded-lg shadow-lg">
        <Image href={href} alt={alt} src={src} />
        <Ratings country={country} rating={randomNum()} votes={randomNum(1)} />
        <Title title={title} />
        <Price price={price}></Price>
      </article>
    </div>
  );
}

export default function CardLayout() {
  return (
    <div className="container px-1 mx-auto my-12 md:px-12">
      <div className="inline gap-1 mx-1 text-sm md:flex md:mx-4">
        <Card
          href={"/"}
          alt={"katie-zaferes"}
          src={katie}
          price={"136"}
          title="Life lessons with Katie Zaferes"
          country={"USA"}
        />
        <Card
          href={"/"}
          alt={"wedding-photography"}
          src={wedding}
          price={"125"}
          title="Learn wedding photography"
          country={"Canada"}
        />
        <Card
          href={"/"}
          alt={"mountain-bike"}
          src={bike}
          price={"50"}
          title="Group Mountain Biking"
          country={"Scotland"}
        />
      </div>
    </div>
  );
}

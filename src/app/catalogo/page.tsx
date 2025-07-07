"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../../../public/assets/sneackerelegant.png";
import img2 from "../../../public/assets/carousel2.png";
import img3 from "../../../public/assets/sneackernicke2.png";
import img4 from "../../../public/assets/pruebafondo.png";
import img5 from "../../../public/assets/carousel3.png";
import img6 from "../../../public/assets/carousel4.png";
import Link from "next/link";

const sneackers = [
  {
    images: [img1, img2, img3, img4, img5, img6],
  },
];

export default function CatalogoPage() {
  useEffect(() => {
    AOS.init({
      duration: 800, // duración de la animación (ms)
      once: true, // solo una vez
    });
  }, []);
  return (
    <section>
      <section className="flex flex-col text-white bg-gradient-to-b from-black to-transparent pt-[1vh] w-full h-screen gap-6 overflow-hidden ">
        <section className="flex flex-col items-center justify-center w-full h-screen relative">
          <h2
            className="text-[4em] font-bold text-center xl:text-[5em]"
            data-aos="fade-left"
          >
            El catalogo más completo de calzados
          </h2>
          <p
            className="text-[1.2em] text-center xl:text-[1.7em]"
            data-aos="fade-right"
          >
            Encuentra miles de calzados desde la comodidad de tu hogar
          </p>
        </section>
      </section>
      <section>
        <ul className="flex flex-wrap justify-center items-center gap-[4em] p-[2em]">
          {sneackers[0].images.map((sneacker, index) => (
            <li
              key={index}
              className="w-[60vh] h-[70vh] drop-shadow-2xl shadow-2xl items-center pb-[3em] transform transition-transform duration-300 hover:scale-105"
            >
              <figure
                className="flex justify-center items-center h-full"
                data-aos="fade-up"
              >
                <img src={sneacker.src}></img>
              </figure>
              <aside className="flex flex-col items-center justify-center p-3 bg-gray-800/50 hover:bg-gray-800/70 transition-colors duration-300">
                <button className="font-bold cursor-pointer text-white transform transition-transform duration-300 hover:scale-110  ">
                  <Link href="/informacion">Comprar</Link>
                </button>
              </aside>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}

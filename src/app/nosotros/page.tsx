"use client";
import React, { useEffect } from "react";
import Fondo1 from "../../../public/assets/sneackerelegant.png";
import Fondo2 from "../../../public/assets/sneackernike.jpg";
import Fondo3 from "../../../public/assets/sneackernicke2.png";
import AOS from "aos";
import "aos/dist/aos.css";

export default function NosotrosPage() {
  useEffect(() => {
    AOS.init({
      duration: 800, // duración de la animación (ms)
      once: true, // solo una vez
    });
  }, []);
  return (
    <section className="flex flex-col text-white bg-black pt-[1vh] w-full h-auto gap-6 overflow-hidden ">
      <section className="flex items-center justify-center w-full h-screen relative">
        <img
          src={Fondo1.src}
          alt="Fondo Elegante"
          className="w-[80vh] h-auto object-contain"
        />
        <aside
          className="flex flex-col items-center justify-center absolute top-0 left-0 w-full h-full bg-black/50 p-6"
          data-aos="fade-right"
        >
          <h1 className="text-[4em] font-bold z-10 md:text-[6em] lg:text-[5em] xl:text-[7em]">
            Nosotros
          </h1>
          <p className="text-[1.2em] z-10 text-center max-w-3xl md:text-[2em] lg:text-[1.5em] xl:text-[1.6em] 2xl:text-[2.2em] xl:max-w-4xl 2xl:max-w-5xl">
            Somos una empresa dedicada a la venta de calzados de alta calidad,
            ofreciendo una amplia variedad de modelos y estilos para satisfacer
            las necesidades de nuestros clientes. Trabajamos con marcas
            reconocidas y garantizamos la autenticidad de nuestros productos.
          </p>
        </aside>
      </section>
      <section className="flex items-center justify-center w-full h-screen relative">
        <img src={Fondo2.src} alt="Fondo Nike" className="bg-white"></img>
        <aside
          className="flex flex-col items-center justify-center absolute top-0 left-0 w-full h-full bg-black/50 p-6"
          data-aos="fade-left"
        >
          <h1 className="text-[4em] font-bold z-10 md:text-[6em] lg:text-[5em] xl:text-[7em]">
            Misión
          </h1>
          <p className="text-[1.2em] z-10 text-center max-w-2xl md:text-[2em] lg:text-[1.5em] xl:text-[1.6em]">
            Nuestra misión es diseñar, producir y ofrecer calzados de alta
            calidad que combinen comodidad, estilo e innovación, adaptados a las
            necesidades de nuestros clientes. Nos comprometemos a brindar una
            experiencia única, fomentando la confianza y satisfacción a través
            de un servicio personalizado y productos duraderos.
          </p>
        </aside>
      </section>
      <section className="flex items-center justify-center w-full h-screen relative">
        <img src={Fondo3.src} alt="Fondo Nike 2"></img>
        <aside
          className="flex flex-col items-center justify-center absolute top-0 left-0 w-full h-full bg-black/50 p-6"
          data-aos="fade-right"
        >
          <h1 className="text-[4em] font-bold z-10 md:text-[6em] lg:text-[5em] xl:text-[7em]">
            Visión
          </h1>
          <p className="text-[1.2em] z-10 text-center max-w-2xl md:text-[2em] lg:text-[1.5em] xl:text-[1.6em] ">
            Nuestra visión es ser la marca de calzados líder en el mercado
            nacional e internacional, reconocida por su diseño vanguardista,
            responsabilidad social y compromiso con la sostenibilidad,
            contribuyendo al bienestar y estilo de vida de las personas.
          </p>
        </aside>
      </section>
    </section>
  );
}

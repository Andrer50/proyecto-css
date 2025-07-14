"use client";
import React, { useEffect, useState } from "react";
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
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [formEnviado, setFormEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormEnviado(true);
    setFormEnviado(true);
    setNombre("");
    setApellidos("");
    setTelefono("");
    setEmail("");
  };
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
            className="text-[1.2em] text-gray-900 text-center xl:text-[1.7em]"
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
      <footer className="bg-black text-white py-10 px-6" data-aos="fade-up">
        <section className="max-w-3xl mx-auto">
          <h2 className="text-[3em] font-semibold mb-4 text-center">
            Contáctanos
          </h2>

          {!formEnviado ? (
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white"
            >
              <section className="flex flex-col">
                <label htmlFor="nombre" className="mb-1">
                  Nombre
                </label>
                <input
                  id="nombre"
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="p-2 rounded text-white border-[1px] border-gray-300 hover:border-gray-500"
                  required
                />
              </section>

              <section className="flex flex-col">
                <label htmlFor="apellidos" className="mb-1">
                  Apellidos
                </label>
                <input
                  id="apellidos"
                  type="text"
                  value={apellidos}
                  onChange={(e) => setApellidos(e.target.value)}
                  className="p-2 rounded text-white border-[1px] border-gray-300 hover:border-gray-500"
                  required
                />
              </section>

              <section className="flex flex-col">
                <label htmlFor="telefono" className="mb-1">
                  Teléfono
                </label>
                <input
                  id="telefono"
                  type="tel"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  className="p-2 rounded text-white border-[1px] border-gray-300 hover:border-gray-500"
                  required
                />
              </section>

              <section className="flex flex-col">
                <label htmlFor="email" className="mb-1">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-2 rounded text-white border-[1px] border-gray-300 hover:border-gray-500"
                  required
                />
              </section>
              <section className="md:col-span-2 flex justify-center mt-4">
                <button
                  type="submit"
                  className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition transform transition-transform duration-300 hover:scale-105 font-semibold"
                >
                  Enviar
                </button>
              </section>
            </form>
          ) : (
            <p className="text-center text-green-400 text-xl mt-6">
              ✅ Se envió correctamente a su correo electrónico
            </p>
          )}
        </section>
      </footer>
    </section>
  );
}

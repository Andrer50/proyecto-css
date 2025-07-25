"use client";
import React, { useEffect, useState } from "react";
import Fondo1 from "../../../public/assets/sneackerelegant.png";
import Fondo2 from "../../../public/assets/sneackernike.jpg";
import Fondo3 from "../../../public/assets/sneackernicke2.png";
import AOS from "aos";
import "aos/dist/aos.css";

export default function NosotrosPage() {
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

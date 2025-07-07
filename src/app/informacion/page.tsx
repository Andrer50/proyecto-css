"use client";
import React, { useEffect, useState } from "react";
import Fondo from "../../../public/assets/FondoInformacion.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function InformacionPage() {
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
    <section className="overflow-hidden relative min-h-screen">
      <section className="absolute inset-0 w-full h-full">
        <figure className="w-full h-full">
          <img
            src={Fondo.src}
            className="w-full h-full object-cover brightness-75"
            alt="Fondo"
          />
        </figure>
      </section>

      <section className="relative flex flex-col items-center justify-center w-full min-h-screen px-4 py-10">
        <aside className="text-center text-white mb-6 max-w-xl">
          <h4 className="text-3xl md:text-5xl 2xl:text-7xl font-bold mb-2">
            Solicita más información
          </h4>
          <p className="text-base md:text-lg">
            Completa los datos y nos pondremos en contacto contigo
          </p>
        </aside>

        <section
          className="bg-black/60 text-white py-6 px-4 md:px-8 rounded-xl shadow-lg w-full max-w-3xl"
          data-aos="fade-up"
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
            Contáctanos
          </h2>

          {!formEnviado ? (
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
            >
              <div className="flex flex-col">
                <label htmlFor="nombre" className="mb-1">
                  Nombre
                </label>
                <input
                  id="nombre"
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="p-2 rounded bg-transparent text-white border border-gray-300 placeholder-gray-400"
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="apellidos" className="mb-1">
                  Apellidos
                </label>
                <input
                  id="apellidos"
                  type="text"
                  value={apellidos}
                  onChange={(e) => setApellidos(e.target.value)}
                  className="p-2 rounded bg-transparent text-white border border-gray-300 placeholder-gray-400"
                  placeholder="Tus apellidos"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="telefono" className="mb-1">
                  Teléfono
                </label>
                <input
                  id="telefono"
                  type="tel"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  className="p-2 rounded bg-transparent text-white border border-gray-300 placeholder-gray-400"
                  placeholder="Tu teléfono"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="mb-1">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-2 rounded bg-transparent text-white border border-gray-300 placeholder-gray-400"
                  placeholder="Tu correo"
                  required
                />
              </div>

              <div className="md:col-span-2 flex justify-center mt-4">
                <button
                  type="submit"
                  className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition duration-300 hover:scale-105 font-semibold"
                >
                  Enviar
                </button>
              </div>
            </form>
          ) : (
            <p className="text-center text-green-400 text-lg mt-6">
              ✅ Se envió correctamente a su correo electrónico
            </p>
          )}
        </section>
      </section>
    </section>
  );
}

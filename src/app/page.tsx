"use client";
import { useEffect, useState } from "react";
import img1 from "../../public/assets/zapatillas/sneacker1.jpg";
import img2 from "../../public/assets/zapatillas/sneacker2.jpg";
import img3 from "../../public/assets/zapatillas/sneacker3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const sneackers = [
  {
    images: [img1, img2, img3],
  },
];

export default function Home() {
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
    <>
      <section className="overflow-hidden">
        <section className="relative h-[100vh] w-full overflow-hidden bg-gradient-to-b from-black to-transparent">
          {/* Contenedor principal de fondo */}
          <section className="absolute inset-0 w-full h-full">
            {/* TEXTO ENCIMA */}
            <section className="absolute inset-0 z-20 flex justify-center items-center">
              <h1 className=" text-center text-gray-800 text-5xl font-bold pt-[100%] lg:pt-[35%]">
                Bienvenido a FootStar
              </h1>
            </section>

            {/* CARRUSEL DE IMÁGENES */}
            <section className="carousel-container z-10">
              <img
                src="/assets/pruebafondo.png"
                className="carousel-img img-1 w-[100%] lg:w-[40%]  h-auto mx-auto my-auto"
              />
              <img
                src="/assets/carousel2.png"
                className="carousel-img img-2 w-[80%] lg:w-[35%] h-auto mx-auto my-auto"
              />
              <img
                src="/assets/carousel3.png"
                className="carousel-img img-3 w-[100%] lg:w-[40%] h-auto mx-auto my-auto"
              />
              <img
                src="/assets/carousel4.png"
                className="carousel-img img-4 w-[100%] lg:w-[40%] h-auto mx-auto my-auto"
              />
            </section>
          </section>
        </section>
        <section className="flex flex-col p-[3em]" data-aos="fade-right">
          <h2 className="text-center text-[4em] font-bold">
            Los mejores calzados de Lima
          </h2>
          <span className="text-center text-[1.2em]" data-aos="fade-left">
            Descubre nuestra colección exclusiva de calzados para todas las
            edades y estilos. Desde modelos clásicos hasta ediciones limitadas,
            trabajamos con marcas originales y diseños que conectan con el ritmo
            de la ciudad.
          </span>
        </section>
        <section className="py-10 px-6">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {sneackers[0].images.map((imgSrc, idx) => (
              <li key={idx}>
                <figure data-aos="fade-up">
                  <img
                    src={imgSrc.src}
                    alt={`Sneaker ${idx + 1}`}
                    className="w-full h-auto shadow-lg rounded"
                  />
                </figure>
              </li>
            ))}
          </ul>
        </section>
        <section className="flex flex-col p-[3em] ">
          <h2 className="text-center text-[4em] font-bold" data-aos="fade-left">
            Pide tu talla Ahora!
          </h2>
          <span className="text-center text-[1.1em]" data-aos="fade-right">
            Descubre nuestra colección exclusiva de calzados para todas las
            edades y estilos. Desde modelos clásicos hasta ediciones limitadas,
            trabajamos con marcas originales y diseños que conectan con el ritmo
            de la ciudad.
          </span>
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
    </>
  );
}

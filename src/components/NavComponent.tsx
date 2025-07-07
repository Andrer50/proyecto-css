"use client";
import React, { useEffect, useState } from "react";
import Logo from "../../public/assets/Logo.png";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // iconos

export default function NavComponent() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`z-50 w-full fixed top-0 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/70 shadow-md backdrop-blur-md"
          : "bg-transparent"
      } flex justify-between items-center h-auto px-6 md:px-20 py-6`}
    >
      {/* Logo */}
      <figure className="object-cover w-[4em]">
        <Link href="/">
          <img
            src={Logo.src}
            alt="Logo"
            className="transform transition-transform duration-300 hover:scale-115"
          />
        </Link>
      </figure>

      {/* Menú en escritorio */}
      <ul className="hidden md:flex text-white md:text-[1.2em] xl:text-[1.3em] gap-[2em]">
        {["Inicio", "Nosotros", "Catálogo", "Información"].map((text, i) => {
          // función para quitar tildes y pasar a minúsculas
          const slug = text
            .toLowerCase()
            .normalize("NFD") // descompone caracteres acentuados
            .replace(/[\u0300-\u036f]/g, ""); // elimina las marcas de acento

          return (
            <li key={i}>
              <Link href={`/${slug === "inicio" ? "" : slug}`}>
                <span className="inline-block transform transition-transform duration-300 hover:scale-110 hover:text-gray-300">
                  {text}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Botón hamburguesa en móviles */}
      <button
        className="md:hidden text-white z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={35} /> : <Menu size={40} />}
      </button>

      {/* Menú desplegable en móviles */}
      <section
        className={`absolute top-full left-0 w-full bg-gray-900/70 shadow-md backdrop-blur-md text-white text-[2em] flex flex-col items-center gap-4 py-6 md:hidden
    transition-all duration-300 ease-in-out
    ${
      isOpen ? "opacity-100 max-h-[500px]" : "opacity-0 max-h-0 overflow-hidden"
    }
  `}
      >
        {["Inicio", "Nosotros", "Catálogo", "Información"].map((text, i) => (
          <Link
            key={i}
            href={`/${
              text.toLowerCase() === "inicio" ? "" : text.toLowerCase()
            }`}
            onClick={() => setIsOpen(false)} // cerrar al hacer click
          >
            <span className="block">{text}</span>
          </Link>
        ))}
      </section>
    </nav>
  );
}

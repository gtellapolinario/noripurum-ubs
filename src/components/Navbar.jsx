// src/components/Navbar.jsx
import React, { useState, useCallback, useEffect, useMemo } from "react";
import {
  Beaker,
  Home,
  ChevronLeft,
  ChevronRight,
  FileText,
} from "lucide-react";

import { GiLoveInjection } from "react-icons/gi";

import PageUm from "@p/PageUm";
import PageDois from "@p/PageDois";
import PageTres from "@p/PageTres";

import Footer from "@c/Footer";
import CalculadoraNoripurum from "@c/aplications/CalculadoraNoripurum";

function Navbar() {
  const pages = useMemo(
    () => [
      <PageUm key="1" />,
      <PageDois key="2" />,
      <PageTres key="3" />,
    ],
    []
  );
  const [currentPage, setCurrentPage] = useState(0);
  const total = pages.length;

  const handleNext = useCallback(() => {
    setCurrentPage((i) => Math.min(i + 1, total - 1));
  }, [total]);

  const handlePrevious = useCallback(() => {
    setCurrentPage((i) => Math.max(i - 1, 0));
  }, []);

  const goHome = useCallback(() => setCurrentPage(0), []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrevious();
      if (e.key.toLowerCase() === "h" || e.key === "Home") goHome();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [handleNext, handlePrevious, goHome]);

  const navBtnCls = (disabled) =>
    [
      "inline-flex items-center justify-center h-9 w-9 rounded-md transition-colors",
      disabled
        ? "opacity-50 pointer-events-none"
        : "hover:bg-gray-100 active:bg-gray-200",
    ].join(" ");

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-red-100 via-sky-100 to-orange-100">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-10 h-16 bg-white px-4 shadow-xl border-b border-gray-200">
        <div className="mx-auto flex h-full w-full items-center justify-center gap-6">
          {/* Branding */}
          <div className=" flex items-center justify-around gap-3">
            <GiLoveInjection className="text-blue-600" size={32} aria-hidden="true" />
            <h1 className="hidden md:block m-0 text-base font-semibold text-gray-800">
              Sacarato de hidróxido férrico - Administração Endovenosa
            </h1>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4">
            {/* Grupo de navegação */}
            <div className="flex items-center rounded-lg bg-gray-100 p-1 shadow-lg">
              <button
                type="button"
                title="Ir para página inicial (H)"
                aria-label="Ir para página inicial"
                onClick={goHome}
                className={navBtnCls(false)}
              >
                <Home className="text-blue-600" size={22} />
              </button>

              <div className="mx-2 h-6 w-px bg-gray-300" />

              <button
                type="button"
                title="Página anterior (←)"
                aria-label="Página anterior"
                onClick={handlePrevious}
                className={navBtnCls(currentPage === 0)}
                disabled={currentPage === 0}
              >
                <ChevronLeft size={18} />
              </button>

              <span className="px-2 text-sm font-medium text-gray-600">
                {currentPage + 1}/{total}
              </span>

              <button
                type="button"
                title="Próxima página (→)"
                aria-label="Próxima página"
                onClick={handleNext}
                className={navBtnCls(currentPage === total - 1)}
                disabled={currentPage === total - 1}
              >
                <ChevronRight size={18} />
              </button>
            </div>
           
            <CalculadoraNoripurum />
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="flex flex-1 justify-center pt-16">
        <div className="container w-full max-w-4xl p-6">
          <div className="w-full rounded-lg bg-white p-4 shadow-sm">
            <div className="flex flex-col gap-6">
              <div className="w-full">{pages[currentPage]}</div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Navbar;

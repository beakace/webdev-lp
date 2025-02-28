"use client";

import Link from "next/link";
import CenterUnderline from "@/fancy/components/text/underline-center";
import Logo from "./Logo";
import { useState } from "react";

export default function Navbar() {
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  return (
    <nav className="bg-white text-[#2A6B9F] py-4 px-8 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center space-x-2 text-[#2A6B9F] group"
          onMouseEnter={() => setIsLogoHovered(true)}
          onMouseLeave={() => setIsLogoHovered(false)}
        >
          <Logo color="#2A6B9F" />
          <span
            className={`text-xl lowercase font-bold transition-all ${
              isLogoHovered ? "text-[#F59E0B]" : "text-[#2A6B9F]"
            }`}
          >
            stronami
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#contact" className="cursor-pointer lowercase">
            <CenterUnderline label="Kontakt" />
          </a>

          <a
            className="group relative inline-flex items-center overflow-hidden rounded-md bg-[#F59E0B] px-6 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
            href="#contact"
          >
            <span className="absolute -start-full transition-all duration-300 group-hover:start-4">
              <svg
                className="size-4 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>

            <span className="text-sm font-medium transition-all duration-300 group-hover:ms-4 uppercase tracking-wider">
              Zamów wycenę
            </span>
          </a>
        </div>

        <button className="md:hidden text-[#2A6B9F]">
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}

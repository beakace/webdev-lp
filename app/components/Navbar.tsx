import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#0C8EF4] text-white py-4 px-8 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/stronami-logo.svg"
            alt="Stronami"
            width={120}
            height={120}
            className="w-10 h-10"
          />
          <span className="text-xl lowercase font-bold">stronami</span>
        </Link>

        <div className="hidden md:flex space-x-8">
          <a
            href="#services"
            className="hover:opacity-80 transition-colors cursor-pointer"
          >
            Usługi
          </a>
          <a
            href="#why-us"
            className="hover:opacity-80 transition-colors cursor-pointer"
          >
            Dlaczego my
          </a>
          <a
            href="#showcase"
            className="hover:opacity-80 transition-colors cursor-pointer"
          >
            Realizacje
          </a>
          <a
            href="#contact"
            className="hover:opacity-80 transition-colors cursor-pointer"
          >
            Kontakt
          </a>
        </div>

        <button className="md:hidden">
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

import Typewriter from "@/fancy/components/text/typewriter";
import AnimatedServiceCard from "./AnimatedServiceCard";

export default function HeroSection() {
  const serviceCards = [
    {
      imageSrc: "/images/pexels-olly-925786.jpg",
      title: "Strony Internetowe",
      description:
        "Nowoczesne i responsywne strony dostosowane do Twoich potrzeb",
    },
    {
      imageSrc: "/images/pexels-olly-935743.jpg",
      title: "Sklepy Online",
      description:
        "Funkcjonalne sklepy e-commerce z intuicyjnym panelem zarządzania",
    },
    {
      imageSrc: "/images/pexels-olly-942424.jpg",
      title: "Aplikacje Webowe",
      description:
        "Zaawansowane aplikacje internetowe z bogatą funkcjonalnością",
    },
    {
      imageSrc: "/images/pexels-moose-photos-170195-1586973.jpg",
      title: "SEO",
      description:
        "Optymalizacja pod kątem wyszukiwarek dla lepszej widoczności",
    },
    {
      imageSrc: "/images/pexels-buro-millennial-636760-1438081.jpg",
      title: "Wsparcie Techniczne",
      description: "Ciągłe wsparcie i aktualizacje dla Twojej strony",
    },
  ];

  return (
    <section
      id="hero"
      className="min-h-[80vh] flex flex-col justify-center items-start text-left p-8 max-w-7xl mx-auto"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Twoja strona może być{" "}
        <span className="text-4xl md:text-6xl font-bold text-[#F59E0B]">
          <Typewriter
            text={[
              "nowoczesna",
              "profesjonalna",
              "responsywna",
              "szybka",
              "przyjazna",
              "atrakcyjna",
              "dostępna",
              "konkurencyjna",
              "zoptymalizowana",
            ]}
            speed={70}
            waitTime={1500}
            deleteSpeed={40}
            cursorChar={"_"}
          />
        </span>
      </h1>

      <p className="text-xl md:text-2xl mt-6 max-w-2xl text-gray-600 mb-10">
        Strony internetowe dopasowane do Twoich potrzeb
      </p>

      {/* Visual Showcase with animated service cards */}
      <div className="w-full mb-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {serviceCards.map((card, index) => (
            <AnimatedServiceCard
              key={index}
              imageSrc={card.imageSrc}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>

      <div className="mt-4">
        <a
          className="group relative inline-flex items-center overflow-hidden rounded-md bg-[#F59E0B] px-8 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
          href="#contact"
        >
          <span className="absolute -start-full transition-all duration-300 group-hover:start-4">
            <svg
              className="size-5 rtl:rotate-180"
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
    </section>
  );
}

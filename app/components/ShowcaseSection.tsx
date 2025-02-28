import Image from "next/image";

export default function ShowcaseSection() {
  return (
    <section id="showcase" className="py-16 px-8 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center">Nasze Realizacje</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="Kwiaciarnia Florencia"
          category="Strona Firmowa"
          description="Nowoczesna strona dla lokalnej kwiaciarni, z galerią produktów i formularzem zamówień."
          image="/images/pexels-olly-925786.jpg"
        />

        <ProjectCard
          title="Kancelaria Prawna Nowak"
          category="Strona Korporacyjna"
          description="Profesjonalna strona dla kancelarii prawnej z systemem rezerwacji konsultacji online."
          image="/images/pexels-olly-935743.jpg"
        />

        <ProjectCard
          title="Restauracja Smaki Świata"
          category="Strona z Rezerwacjami"
          description="Strona restauracji z menu online, galerią i systemem rezerwacji stolików."
          image="/images/pexels-olly-942424.jpg"
        />

        <ProjectCard
          title="Studio Fotograficzne KaroLens"
          category="Portfolio"
          description="Eleganckie portfolio dla fotografa z galerią prac i systemem rezerwacji sesji."
          image="/images/pexels-moose-photos-170195-1586973.jpg"
        />

        <ProjectCard
          title="Biuro Podróży Dalekie Horyzonty"
          category="Sklep Online"
          description="Strona biura podróży z wyszukiwarką ofert i systemem rezerwacji wycieczek."
          image="/images/pexels-buro-millennial-636760-1438081.jpg"
        />
      </div>
    </section>
  );
}

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
}

function ProjectCard({
  title,
  category,
  description,
  image,
}: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-white/80 text-sm">{category}</p>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-[#0C8EF4] font-medium text-sm mb-3">{category}</p>
        <p className="text-gray-600">{description}</p>
        <button className="mt-4 text-[#0C8EF4] font-medium flex items-center">
          Zobacz szczegóły
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

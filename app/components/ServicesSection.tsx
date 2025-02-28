export default function ServicesSection() {
  return (
    <section id="services" className="py-16 px-8 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center font-konkhmer">
        Nasze Usługi
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ServiceCard
          title="Strony Internetowe"
          description="Nowoczesne i responsywne strony internetowe dostosowane do Twoich potrzeb"
          icon={
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          }
        />

        <ServiceCard
          title="Sklepy Internetowe"
          description="Funkcjonalne sklepy online z intuicyjnym panelem administracyjnym"
          icon={
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
            />
          }
        />

        <ServiceCard
          title="Optymalizacja SEO"
          description="Pozycjonowanie i optymalizacja dla lepszej widoczności w wyszukiwarkach"
          icon={
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          }
        />
      </div>
    </section>
  );
}

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:-translate-y-1">
      <div className="bg-gray-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-[#0C8EF4]">
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {icon}
        </svg>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

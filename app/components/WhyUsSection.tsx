export default function WhyUsSection() {
  return (
    <section id="why-us" className="py-16 px-8 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center">Dlaczego My?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <BenefitCard
          title="Indywidualne Podejście"
          description="Każdy projekt traktujemy indywidualnie, dostosowując się do potrzeb i specyfiki Twojej firmy"
        />
        <BenefitCard
          title="Szybka Realizacja"
          description="Działamy sprawnie i terminowo, dbając o każdy szczegół projektu"
        />
      </div>
    </section>
  );
}

interface BenefitCardProps {
  title: string;
  description: string;
}

function BenefitCard({ title, description }: BenefitCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

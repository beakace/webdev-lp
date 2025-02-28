import Image from "next/image";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 px-8 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center">
        Zadowoleni Klienci
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <TestimonialCard
          name="Anna Kowalska"
          company="Kwiaciarnia Florencia"
          quote="Strona internetowa stworzona przez Stronami przyciągnęła wielu nowych klientów. Jestem bardzo zadowolona z efektów!"
          image="/images/pexels-olly-925786.jpg"
        />

        <TestimonialCard
          name="Jan Nowak"
          company="Kancelaria Prawna Nowak"
          quote="Profesjonalna obsługa i szybka realizacja. Strona wygląda nowocześnie i działa bez zarzutu."
          image="/images/pexels-olly-935743.jpg"
        />

        <TestimonialCard
          name="Marek Wiśniewski"
          company="Restauracja Smaki Świata"
          quote="Dzięki nowej stronie internetowej nasze rezerwacje wzrosły o 40%. Polecam Stronami każdej firmie!"
          image="/images/pexels-olly-942424.jpg"
        />

        <TestimonialCard
          name="Karolina Lewandowska"
          company="Studio Fotograficzne KaroLens"
          quote="Strona idealnie odzwierciedla charakter mojego biznesu. Współpraca przebiegła sprawnie i bezproblemowo."
          image="/images/pexels-moose-photos-170195-1586973.jpg"
        />

        <TestimonialCard
          name="Tomasz Kowalczyk"
          company="Biuro Podróży Dalekie Horyzonty"
          quote="Nowoczesny design i funkcjonalność na najwyższym poziomie. Klienci chwalą łatwość nawigacji po stronie."
          image="/images/pexels-buro-millennial-636760-1438081.jpg"
        />
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  name: string;
  company: string;
  quote: string;
  image: string;
}

function TestimonialCard({
  name,
  company,
  quote,
  image,
}: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
          <Image
            src={image}
            alt={name}
            width={64}
            height={64}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="text-gray-600 text-sm">{company}</p>
        </div>
      </div>
      <p className="text-gray-700 italic flex-grow">"{quote}"</p>
      <div className="mt-4 text-[#0C8EF4]">
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
}

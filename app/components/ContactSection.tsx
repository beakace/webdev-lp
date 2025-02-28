import Image from "next/image";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-16 px-8 max-w-7xl mx-auto bg-[#2A6B9F] text-white relative overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 opacity-20 w-64 h-64">
        <Image
          src="/stronami-logo.svg"
          alt="Stronami Logo"
          width={176}
          height={173}
          className="w-full h-full"
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Rozpocznij Swoją Cyfrową Podróż
        </h2>
        <p className="text-xl mb-8">
          Skontaktuj się z nami i omów swój projekt
        </p>
        <button className="bg-white text-[#2A6B9F] px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors">
          Darmowa Konsultacja
        </button>
      </div>
    </section>
  );
}

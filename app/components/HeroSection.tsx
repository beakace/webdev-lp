import Typewriter from "@/fancy/components/text/typewriter";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-[60vh] flex flex-col justify-center items-start text-left p-8 max-w-7xl mx-auto"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Twoja strona może być{" "}
        <span className="text-4xl md:text-6xl font-bold text-[#024950]">
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

      <p className="text-xl md:text-2xl mt-6 max-w-2xl text-gray-600">
        Tworzymy profesjonalne strony internetowe dopasowane do Twoich potrzeb
      </p>

      <div className="mt-10">
        <button className="bg-[#024950] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition-colors mr-4">
          Zamów wycenę
        </button>
        <button className="bg-white text-[#024950] px-8 py-3 rounded-lg text-lg font-semibold border-2 border-[#024950] hover:bg-gray-50 transition-colors">
          Portfolio
        </button>
      </div>
    </section>
  );
}

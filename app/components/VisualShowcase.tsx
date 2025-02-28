"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, stagger, useAnimate } from "motion/react";

import Floating, {
  FloatingElement,
} from "@/fancy/components/image/parallax-floating";

export default function VisualShowcase() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "img",
      { opacity: [0, 1] },
      { duration: 0.5, delay: stagger(0.15) }
    );
  }, []);

  return (
    <section className="py-12 px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <Image
            src="/images/pexels-olly-925786.jpg"
            alt="Happy client"
            width={400}
            height={400}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <Image
            src="/images/pexels-olly-935743.jpg"
            alt="Happy client"
            width={400}
            height={400}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <Image
            src="/images/pexels-olly-942424.jpg"
            alt="Happy client"
            width={400}
            height={400}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <Image
            src="/images/pexels-moose-photos-170195-1586973.jpg"
            alt="Happy client"
            width={400}
            height={400}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <Image
            src="/images/pexels-buro-millennial-636760-1438081.jpg"
            alt="Happy client"
            width={400}
            height={400}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}

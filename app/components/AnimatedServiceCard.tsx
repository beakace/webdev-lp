"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface AnimatedServiceCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

export default function AnimatedServiceCard({
  imageSrc,
  title,
  description,
}: AnimatedServiceCardProps) {
  return (
    <motion.div
      className="aspect-square overflow-hidden rounded-lg shadow-md relative group cursor-pointer"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:opacity-0"
      />

      <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center">
        <h3 className="text-[#2A6B9F] font-bold text-xl mb-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          {title}
        </h3>

        <p className="text-gray-800 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

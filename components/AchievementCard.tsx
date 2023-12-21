import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type Props = {
  title?: string;
  img: string;
  desc?: string;
  date?: string;
  code?: string[];
  theme?: boolean;
};

export default function AchievementCard({
  title,
  img,
  desc,
  date,
  theme,
}: Props) {
  return (
    <motion.article
      initial={{
        y: -50,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.3,
      }}
      className="mx-2"
    >
      <div
        style={{
          background: theme ? "rgb(25,25,25)" : "rgb(245,245,245)",
        }}
        className="shadow-2xl flex border border-transparent hover:border-blue-600 rounded-lg max-h-[500px] w-[350px] h-[450px] md:w-[500px] opacity-80 hover:opacity-100 items-center align-middle transition-opacity duration-200 px-4 overflow-hidden"
      >
        <div>
          <Image
            src={img}
            width={300}
            height={300}
            alt="Logros de Diego Arturo Yangua Merino en la Universidad Cesar Vallejo"
            className="rounded-xl mb-2 max-h-[300px] w-full object-fill"
          />
          <h4 className="font-bold text-2xl">{title}</h4>
          <p className="uppercase items-center">{date}</p>
          <p className="font-light p-2">{desc}</p>
        </div>
      </div>
    </motion.article>
  );
}

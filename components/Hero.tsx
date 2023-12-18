import React, { useContext } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { FullContext } from "../context/Context";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

export default function Hero({}: Props) {
  const appContext = useContext(FullContext);
  const [text, _] = useTypewriter({
    words: appContext?.idiome.hero.Words ?? [],
    loop: true,
    delaySpeed: 1800,
  });
  return (
    <motion.div
      className="md:h-screen relative align-middle flex flex-col md:flex-row justify-center items-center text-center overflow-hidden"
      transition={{
        duration: 1,
      }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <div  className="h-20 md:hidden"></div>
      <Image
        src="/images/ProfilePhoto.jpg"
        alt="Diego Arturo Yangua Merino"
        width={240}
        height={240}
        className="rounded-full h-48 w-48 md:h-72 md:w-72 object-cover mr-6"
      />
      <div className="flex flex-col gap-3 md:text-left">
        <h1 className="text-4xl lg:text-5xl font-semibold">
          {appContext?.idiome.hero.profession}
        </h1>
        <h2 className="text-base uppercase text-gray-500 -tracking-tight">
          {appContext?.idiome.hero.preWords} {text}
          <Cursor cursorColor="#f7ab0a" />
        </h2>
        <div className="mx-2 md:mx-0 md:max-w-[30vw]">
          {appContext?.idiome.about.description}
        </div>
      </div>
    </motion.div>
  );
}

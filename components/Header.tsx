import React, { useContext, useState, useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import {
  GlobeAsiaAustraliaIcon,
  GlobeAmericasIcon,
  LightBulbIcon,
  MoonIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";
import { FullContext } from "../context/Context";
import Link from "next/link";
import handler from "../pages/api/getPDF";

type Props = {};

export default function Header({}: Props) {
  const [isOpen, setOpen] = useState(false);
  const appContext = useContext(FullContext);

  return (
    <motion.header
      initial={{
        y: -50,
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        y: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1,
      }}
      className="p-5 sticky flex top-0 gap-2 items-start justify-center md:justify-between max-w-7xl mx-auto z-20 xl:items-center"
    >
      {/* Social Icons */}
      <div className="flex flex-row gap-2 items-center">
        <SocialIcon
          url="https://twitter.com/DacyNoob"
          target="_blank"
          fgColor={appContext?.theme.fgIcon}
          bgColor={appContext?.theme.bgIcon}
        />
        <SocialIcon
          url="https://www.linkedin.com/in/diego-merino-43b0b2197/"
          target="_blank"
          fgColor={appContext?.theme.fgIcon}
          bgColor={appContext?.theme.bgIcon}
        />
        <SocialIcon
          url="https://github.com/Dacyz"
          fgColor={appContext?.theme.fgIcon}
          bgColor={appContext?.theme.bgIcon}
          target="_blank"
        />
      </div>
      {/* Settings Buttons */}
      <div className=" flex-row items-center gap-2 flex">
        {/* Resume Button */}
        <Link
          href={
            appContext?.lenguaje == "en"
              ? "https://firebasestorage.googleapis.com/v0/b/inserge-application.appspot.com/o/repositorio-Diego%2Fresume-en.pdf?alt=media&token=f49a40e8-bbd2-4b2e-9cd1-2c3595a3b744"
              : appContext?.lenguaje == "pt"
              ? "https://firebasestorage.googleapis.com/v0/b/inserge-application.appspot.com/o/repositorio-Diego%2Fresume-pt.pdf?alt=media&token=c10744b6-77cb-4f55-a45a-7e310cadceeb"
              : "https://firebasestorage.googleapis.com/v0/b/inserge-application.appspot.com/o/repositorio-Diego%2Fresume-es.pdf?alt=media&token=ad9685c6-70c5-44e2-aebc-a14e37ab0c5d"
          }
          target="_blank"
        >
          <div
            style={{
              background: appContext?.theme.bgButton,
            }}
            className="flex-row flex md:w-28 rounded-full md:rounded-2xl justify-between cursor-pointer"
          >
            <div className="hidden md:inline-flex align-middle pl-2 my-auto font-semibold">
              {appContext?.idiome.sections.resume}
            </div>
            <ArrowDownTrayIcon
              style={{ color: appContext?.theme.fgIcon }}
              className="h-7 w-7 m-3"
            />
          </div>
        </Link>
        {/* Theme mode Button */}
        <div
          onClick={() => appContext?.setThemeMode(!appContext?.themeMode)}
          style={{
            background: appContext?.theme.bgButton,
          }}
          className="flex-row flex p-[5px]  rounded-full cursor-pointer"
        >
          {appContext?.themeMode ? (
            <MoonIcon className="h-6 w-6 text-[rgb(156,163,175)] m-2" />
          ) : (
            <LightBulbIcon className="h-6 w-6 text-black m-2" />
          )}
        </div>
        {/* Lenguage Button */}
        <div
          style={{
            background: appContext?.theme.bgButton,
          }}
          className="flex-row flex md:w-32 rounded-2xl justify-between cursor-pointer"
          onClick={() => setOpen(isOpen ? false : true)}
        >
          <div className="hidden md:inline-flex align-middle pl-2 my-auto font-semibold">
            {appContext?.idiome.en === "Ingles"
              ? appContext?.idiome.es
              : appContext?.idiome.en === "Inglês"
              ? appContext?.idiome.pt
              : appContext?.idiome.en}
          </div>
          {appContext?.idiome.en === "Ingles" ? (
            <GlobeAsiaAustraliaIcon
              style={{ color: appContext?.theme.fgIcon }}
              className="h-8 w-8 m-2"
            />
          ) : (
            <GlobeAmericasIcon
              style={{ color: appContext?.theme.fgIcon }}
              className="h-8 w-8 m-2"
            />
          )}
        </div>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ y: -5, opacity: 0 }}
            animate={{ y: 0, opacity: [0.1, 1] }}
            exit={{ y: -5, opacity: [0.5, 0] }}
            transition={{ duration: 0.1 }}
            style={{
              background: appContext?.theme.bgIcon,
            }}
            onMouseLeave={() => setOpen(false)}
            className="absolute top-[74px] md:top-[58px] md:w-32 w-[60%] rounded-b-2xl md:right-5 z-50"
          >
            {[
              { lenguaje: appContext?.idiome.en, idiome: "en" },
              { lenguaje: appContext?.idiome.es, idiome: "es" },
              { lenguaje: appContext?.idiome.pt, idiome: "pt" },
            ]
              .filter((e) => e.idiome != appContext?.lenguaje)
              .map((e, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setOpen(false);
                    appContext?.bla(e.idiome);
                  }}
                  className="p-2 rounded-2xl hover:font-semibold justify-between items-center cursor-pointer flex-row flex"
                >
                  {e.lenguaje}
                </div>
              ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

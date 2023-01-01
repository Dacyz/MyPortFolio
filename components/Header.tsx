import React, { useContext } from 'react'
import { SocialIcon } from 'react-social-icons'
import {
  GlobeAsiaAustraliaIcon,
  GlobeAltIcon,
  GlobeAmericasIcon,
  LightBulbIcon,
  MoonIcon,
  ChatBubbleLeftIcon,
} from '@heroicons/react/24/solid'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FullContext } from '../context/Context'

type Props = {}

export default function Header({}: Props) {
  const [isOpen, setOpen] = useState(false)

  const appContext = useContext(FullContext)

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
          url="https://www.youtube.com/channel/UCGJwZBiP5TyP5tTP0wlFnMQ"
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
          url="https://twitch.tv/dacynoob"
          fgColor={appContext?.theme.fgIcon}
          bgColor={appContext?.theme.bgIcon}
          target="_blank"
        />
        <SocialIcon
          url="https://github.com/Dacyz"
          fgColor={appContext?.theme.fgIcon}
          bgColor={appContext?.theme.bgIcon}
          target="_blank"
        />
      </div>
      {/* Settings Buttons */}
      <div className=" flex-row items-center gap-2 hidden sm:flex">
        {/* Theme mode Button */}
        <div
          onClick={() => appContext?.setThemeMode(!appContext?.themeMode)}
          style={{
            background: appContext?.theme.bgButton,
          }}
          className="flex-row flex rounded-2xl cursor-pointer"
        >
          <div className="hidden lg:inline-flex align-middle pl-2 my-auto font-semibold">
            Theme
          </div>
          {appContext?.themeMode ? (
            <MoonIcon className="h-8 w-8 text-[rgb(156,163,175)] m-2" />
          ) : (
            <LightBulbIcon className="h-8 w-8 text-black m-2" />
          )}
        </div>
        {/* Lenguage Button */}
        <div
          style={{
            background: appContext?.theme.bgButton,
          }}
          className="flex-row flex rounded-2xl cursor-pointer"
          onClick={() => setOpen(isOpen ? false : true)}
        >
          <div className="hidden lg:inline-flex align-middle pl-2 my-auto font-semibold">
            {appContext?.idiome.en === 'Ingles'
              ? appContext?.idiome.es
              : appContext?.idiome.en}
          </div>
          <GlobeAltIcon
            style={{ color: appContext?.theme.fgIcon }}
            className="h-8 w-8 m-2"
          />
        </div>
        {/* Contact Button */}
        <div
          style={{
            background: appContext?.theme.bgButton,
          }}
          className="flex-row flex items-center rounded-2xl cursor-pointer"
        >
          <ChatBubbleLeftIcon
            style={{ color: appContext?.theme.fgIcon }}
            className="h-8 w-8 m-2"
          />
          <p className="hidden lg:inline-flex align-middle pr-2 my-auto font-semibold">
            {appContext?.idiome.touch}
          </p>
        </div>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ y: -50, x: 20, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, x: 0, opacity: 1, scale: 1 }}
            exit={{ y: -50, x: 20, scale: [1, 0.8], opacity: [1, 0] }}
            transition={{ duration: 0.1 }}
            style={{
              background: appContext?.theme.bgCard,
            }}
            className="absolute top-[75px] w-full md:rounded-2xl md:w-48 md:right-40 py-3 px-2 z-50"
          >
            <div
              style={{
                background: appContext?.theme.bgItem,
              }}
              onClick={() => {
                setOpen(false)
                appContext?.bla('en')
              }}
              className="mb-2 p-2 gap-2  rounded-2xl items-center cursor-pointer flex-row flex"
            >
              <GlobeAmericasIcon
                style={{ color: appContext?.theme.fgIcon }}
                className="h-8 w-8"
              />
              {appContext?.idiome.en}
            </div>
            <div
              style={{
                background: appContext?.theme.bgItem,
              }}
              onClick={() => {
                setOpen(false)
                appContext?.bla('es')
              }}
              className=" p-2 gap-2 rounded-2xl items-center cursor-pointer flex-row flex"
            >
              <GlobeAsiaAustraliaIcon
                style={{ color: appContext?.theme.fgIcon }}
                className="h-8 w-8"
              />
              {appContext?.idiome.es}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

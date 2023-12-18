import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { FullContext } from '../context/Context'
import Image from 'next/image'

type Props = {}

function About({}: Props) {
  const appContext = useContext(FullContext)
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="md:h-[80vh] flex flex-col justify-center"
    >
      <h3 className="sectionInLineTitle">
        {appContext?.idiome.sections.about}
      </h3>
      <div className="flex flex-col relative text-center lg:px-20 md:text-left  md:flex-row max-w-7xl px-10 justify-center mx-auto items-center z-0 overflow-hidden">
        <motion.div
          initial={{
            x: -200,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
          }}
          className="md:mb-0 flex-shrink-0 overflow-hidden w-48 h-32 rounded-full justify-center items-center  md:rounded-lg md:w-[300px] md:h-[300px] xl:w-[400px] xl:h-[400px]"
        >
          <Image
            src="/images/Playa de fondo.jpg"
            alt='Foto de playa de Diego Arturo Yangua Merino'
            width={300}
            height={100}
            className="object-cover md:mb-0 md:w-[300px] md:h-[300px] xl:w-[400px] xl:h-[400px] overflow-hidden flex-shrink-0"
          />
        </motion.div>
        <motion.div
          initial={{
            x: 200,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
          }}
          className="px-0 md:px-10"
        >
          <h4 className="text-2xl font-semibold">
            {appContext?.idiome.about.title}
          </h4>
          <p className="overflow-y-scroll max-h-52 md:overflow-hidden md:h-auto text-base my-2">
            {appContext?.idiome.about.description}
          </p>
          <h4 className="text-1xl font-semibold m-2">
            {appContext?.idiome.about.lenguaje}
          </h4>
          <div className="flex flex-col md:flex-row gap-2 ">
            <div className="bg-gray-300 h-6 w-full rounded-2xl md:mb-10">
              <div className="bg-blue-400 h-6 w-[100%] flex flex-row justify-center gap-2 font-semibold rounded-2xl text-center">
                100%
                <div className="md:hidden">-</div>
                <div className="md:absolute justify-start md:mt-6">
                  {appContext?.idiome.es}
                </div>
              </div>
            </div>
            <div className="bg-gray-400 h-6 w-full rounded-2xl md:mb-10">
              <div className="bg-blue-400 h-6 w-[85%] flex flex-row justify-center gap-2 font-semibold rounded-2xl text-center">
                85%
                <div className="md:hidden">-</div>
                <div className="md:absolute justify-start md:mt-6">
                  {appContext?.idiome.en}
                </div>
              </div>
            </div>
            <div className="bg-gray-400 h-6 w-full rounded-2xl md:mb-10">
              <div className="bg-blue-400 h-6 w-[45%] flex flex-row justify-center gap-2 font-semibold rounded-2xl text-center">
                45%
                <div className="md:hidden">-</div>
                <div className="md:absolute justify-start md:mt-6">
                  {appContext?.idiome.pt}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About

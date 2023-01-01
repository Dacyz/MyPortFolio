import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { FullContext } from '../context/Context'

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
      className="flex flex-col relative text-center lg:px-20 md:text-left h-screen md:flex-row max-w-7xl px-10 justify-center mx-auto items-center z-0 overflow-hidden"
    >
      <h3 className="sectionTitle">{appContext?.idiome.sections.about}</h3>
      <div className='h-24'></div>
      <motion.img
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
        src="https://pbs.twimg.com/profile_images/1580390485855801344/CdhXnp5U_400x400.jpg"
        className="md:mb-0 flex-shrink-0 w-48  h-32 rounded-full justify-center items-center object-cover md:rounded-lg md:w-[300px] md:h-[300px] xl:w-[400px] xl:h-[400px]"
      />
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
        <h4 className="text-4xl font-semibold">
          {appContext?.idiome.about.title}
        </h4>
        <p className="overflow-y-scroll h-52 md:overflow-hidden md:h-auto text-base mt-2">{appContext?.idiome.about.description}</p>
      </motion.div>
    </motion.div>
  )
}

export default About

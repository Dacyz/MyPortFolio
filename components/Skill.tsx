import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  directionMovement?: number
  theme?: string
  porcent?: string
  src?: string
}

function Skill({ directionMovement, porcent, theme, src }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={
          directionMovement == 0
            ? {
                opacity: 0,
                y: 50,
                x: 20,
                scale: 0.3,
              }
            : directionMovement == 1
            ? {
                opacity: 0,
                x: -20,
                y: -50,
                scale: 0.3,
              }
            : directionMovement == 2
            ? {
                opacity: 0,
                y: 20,
                x: 50,
                scale: 0.3,
              }
            : {
                opacity: 0,
                y: -20,
                x: -50,
                scale: 0.3,
              }
        }
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
        src={src}
        style={{
          background: theme,
        }}
        className="rounded-full border-2 border-transparent object-fill w-24 h-24  md:h-28 md:w-28 xl:w-32 xl:h-32 filter group-hover:border-blue-500  transition duration-300 case-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-50 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:h-28 md:w-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black ">{porcent ?? '0%'}</p>
        </div>
      </div>
    </div>
  )
}

export default Skill

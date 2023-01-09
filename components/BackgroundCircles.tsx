import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
      }}
      className="relative flex justify-center items-center align-middle z-0"
    >
      <div className="absolute border-4 border-blue-500 rounded-full h-[165px] w-[100px] mt-48 animate-spin" />
      <div className="absolute border-4 border-blue-500 rounded-full h-[100px] w-[165px] mt-48 animate-spin" />
      <div className="absolute hidden md:inline-block border-2 border-blue-400 rounded-full h-[400px] w-[900px] mt-72 animate-pulse" />
      {/* <div className="absolute border border-blue-500 border-y-0 border-x-1 rounded-full h-[200px] w-[400px] mt-72 animate-ping duration-[2s]" /> */}
      {/* <div className="absolute border border-red-500 rounded-full h-[450px] w-[450px] mt-52 animate-ping" /> */}
    </motion.div>
  )
}

export default BackgroundCircles

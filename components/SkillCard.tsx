import React from 'react'
import { motion } from 'framer-motion'
import { XMarkIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

type Props = {
  layoutId?: string
  skill?: string
  porcent?: string
  link?: string
  desc?: string
  src?: string
  exp?: string
  theme?: string
  dateT?: string
  descT?: string
  prctT?: string
  onClick: () => void
}

function SkillCard({
  layoutId,
  skill,
  link,
  porcent,
  desc,
  onClick,
  src,
  theme,
  exp,
  dateT,
  descT,
  prctT
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      layoutId={layoutId}
      style={{
        background: theme,
      }}
      className="z-20 px-10 py-5 h-72 w-96 rounded-2xl absolute overflow-hidden "
    >
      <div className="flex gap-5 flex-row">
        <Link href={link ?? ''} target="_blank">
          <img
            alt=''
            src={src??''}
            className="rounded-full object-fill hover:border-[#f7AB01] border-transparent border-4 w-24 h-24 md:h-28 md:w-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 overflow-hidden "
          />
        </Link>

        <div className="p-2 align-middle my-auto items-center max-h-max">
          <motion.h5 className=" font-bold z-20">{skill}</motion.h5>
          <motion.h2 className="  z-20">
            <span className="font-semibold">{prctT}: </span> {porcent}
          </motion.h2>
          <motion.h2 className=" z-20">
            <span className="font-semibold">{dateT}: </span>
            {exp}
          </motion.h2>
        </div>
      </div>
      <div>
        <motion.h2 className="z-20 py-2">
          <span className="font-bold">{descT}: </span>
          {desc}
        </motion.h2>
      </div>
      {/* Close button */}
      <motion.button
        className="bg-[#f7ab0a]/40 w-7 h-7 rounded-full top-[10px]  items-center right-[10px] absolute z-30"
        onClick={onClick}
      >
        <XMarkIcon className="w-5 x-5 mx-auto" />
      </motion.button>
    </motion.div>
  )
}

export default SkillCard

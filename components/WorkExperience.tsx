import React, { useState, useContext } from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { FullContext } from '../context/Context'
import AchievementCard from './AchievementCard'

type Props = {}

function WorkExperience({}: Props) {
  const [select, setSelect] = useState(0)
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
      viewport={{
        once: true,
      }}
      className="flex flex-col relative text-center justify-center items-center z-0 overflow-hidden"
    >
      {/* Desabilite el titulo por campatibilidades */}
      <h3 className="sectionInLineTitle">
        <span
          className={
            select == 1
              ? 'underline decoration-yellow-600 cursor-pointer'
              : ' cursor-pointer'
          }
          onMouseEnter={() => setSelect(1)}
          onClick={() => setSelect(0)}
        >
          {appContext?.idiome.sections.experience.exp}
        </span>{' '}
        {appContext?.idiome.sections.experience.and}{' '}
        <span
          className={
            select == 2
              ? 'underline decoration-yellow-600 cursor-pointer'
              : 'cursor-pointer'
          }
          onMouseEnter={() => setSelect(2)}
          onClick={() => setSelect(0)}
        >
          {appContext?.idiome.sections.experience.arc}
        </span>
      </h3>
      <div className="sectionInLineSubtitle">
        {select == 0
          ? appContext?.idiome.experience.subtitleOn
          : appContext?.idiome.experience.subtitleOff}
      </div>
      <div className="w-full flex overflow-x-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7AB01]/80">
        <div className=" md:ml-32"></div>
        {appContext?.idiome.experience.achievements.map((e, i) =>
          e.type ? (
            select == 0 || select == 1 ? (
              <ExperienceCard
              key={i}
                title={e.title}
                img={e.img}
                date={e.date}
                desc={e.desc}
                code={e.code}
                theme={appContext?.themeMode}
              />
            ) : (
              ''
            )
          ) : select == 0 || select == 2 ? (
            <AchievementCard
              key={i}
              title={e.title}
              img={e.img}
              date={e.date}
              desc={e.desc}
              code={e.code}
              theme={appContext?.themeMode}
            />
          ) : (
            ''
          ),
        )}
        <div className="md:mr-32"></div>
      </div>
    </motion.div>
  )
}

export default WorkExperience

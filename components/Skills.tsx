import React, { useState, useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Skill from './Skill'
import SkillCard from './SkillCard'
import { FullContext } from '../context/Context'

type Props = {}

function Skills({}: Props) {
  const [selectedId, setSelectedId] = useState(-1)
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
      className="sectionConfigCol"
    >
      <h3 className="sectionInLineTitle">{appContext?.idiome.sections.skills}</h3>
      <h3 className="sectionInLineSubtitle">
        {appContext?.idiome.skills.subtitle}
      </h3>
      <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-6 gap-1 sm:gap-2 lg:gap-3">
        {appContext?.idiome.skills.data.map((skill, i) => (
          <motion.div
            key={i}
            layoutId={i.toString()}
            onClick={() =>
              selectedId == -1 ? setSelectedId(i) : setSelectedId(-1)
            }
          >
            <Skill
              directionMovement={skill.directioninit}
              porcent={skill.porcent}
              src={skill.src}
              theme={appContext?.theme.bgCard}
            />
          </motion.div>
        ))}
      </div>
      <AnimatePresence initial={false}>
        {selectedId != -1 && (
          <SkillCard
            layoutId={
              selectedId == -1
                ? '0'
                : appContext?.idiome.skills.data[selectedId].id.toString()
            }
            skill={appContext?.idiome.skills.data[selectedId].skill}
            porcent={appContext?.idiome.skills.data[selectedId].porcent}
            desc={appContext?.idiome.skills.data[selectedId].desc}
            src={appContext?.idiome.skills.data[selectedId].src}
            theme={appContext?.theme.bgCard}
            link={appContext?.idiome.skills.data[selectedId].href}
            exp={appContext?.idiome.skills.data[selectedId].exp}
            descT={appContext?.idiome.skills.desc}
            dateT={appContext?.idiome.skills.date}
            prctT={appContext?.idiome.skills.prct}
            onClick={() => setSelectedId(-1)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Skills

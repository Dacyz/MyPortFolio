import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper'
import { FullContext } from '../context/Context'
import 'swiper/css'
import Link from 'next/link'
import Image from 'next/image'

type Props = {}

function Projects({}: Props) {
  SwiperCore.use([Autoplay])
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
        duration: 2,
      }}
      className="justify-center flex-col flex h-screen"
    >
      <h3 className="sectionInLineTitle">
        {appContext?.idiome.sections.projects}
      </h3>
      <div>
        <Swiper
          autoplay={{
            delay: 2000,
          }}
          loop={true}
          slidesPerView={1}
        >
          {appContext?.idiome.projects.data.map((projec, i) => (
            <SwiperSlide key={i}>
              <div className="w-full snap-center flex flex-col space-y-2 items-center justify-center p-2 md:p-4">
                <Image alt="" src={projec.img} className="w-[70%] md:w-[40%]" />
                <div className="space-y-2 px-5 md:px-10 max-w-6xl">
                  <h4 className="text-4xl font-semibold text-center">
                    {projec.name}
                  </h4>

                  <p className="text-center">{projec.desc}</p>
                  <h5 className="font-semibold text-center">
                    {appContext.idiome.projects.tech}
                  </h5>
                  <div className="flex gap-1 justify-center my-2 overflow-hidden">
                    {projec.technic?.map((a, i) => (
                      <Link key={i} href={'/#skills'}>
                        <Image
                          alt=""
                          src={a}
                          className="w-10 h-10 m-1 rounded-full hover:outline outline-1 object-cover"
                        />
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="flex flex-row gap-3">
                  <Link href={projec.href} target="_blank">
                    <div className="heroButton">
                      {appContext.idiome.projects.more}
                    </div>
                  </Link>
                  {projec.demo != '' ? (
                    <Link href={projec.href} target="_blank">
                      <div className="heroButton">
                        {appContext.idiome.projects.demo}
                      </div>
                    </Link>
                  ) : (
                    <div className="heroButtonDisabled">
                      {appContext.idiome.projects.ntdemo}
                    </div>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  )
}

export default Projects

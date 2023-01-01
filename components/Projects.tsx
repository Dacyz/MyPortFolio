import React from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from "swiper";
import 'swiper/css'

type Props = {}

function Projects({}: Props) {

  SwiperCore.use([Autoplay])
  const projects = [1, 2, 3, 4]
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
      className="sectionConfig"
    >
      <h3 className="sectionTitle">Projects</h3>
      <Swiper autoplay={{
        delay: 2000
      }} loop={true } slidesPerView={1}>
        {projects.map((projec, i) => (
          <SwiperSlide>
            <div
              key={i}
              className="w-fit flex-shrink-0  snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
            >
              <motion.img
                initial={{
                  scale: 0.8,
                }}
                whileInView={{
                  scale: 1,
                }}
                transition={{
                  duration: 1.5,
                }}
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--pOjS9Uad--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vg8z9mc7bf0n9a9xoanf.png"
                className="w-72 h-100"
              />
              <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-4xl font-semibold text-center">
                  <span className="underline decoration-[#F7AB0A]/50">
                    {' '}
                    Case Study {i + 1} of {projects.length}:
                  </span>{' '}
                  UPS clone
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores, ut eligendi laboriosam veniam optio fugit officiis
                  distinctio modi sint in, itaque animi numquam dicta corrupti
                  nihil provident, quae culpa at? Lorem ipsum dolo
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-mandatory snap-x z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7AB01]/80">
        
        <div></div>
      </div> */}
    </motion.div>
  )
}

export default Projects

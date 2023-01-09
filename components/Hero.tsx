import Link from 'next/link'
import React, { useContext } from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import { FullContext } from '../context/Context'

type Props = {}

export default function Hero({}: Props) {
  const appContext = useContext(FullContext)
  const [text, _] = useTypewriter({
    words: appContext?.idiome.hero.Words ?? [],
    loop: true,
    delaySpeed: 1800,
  })
  
  return (
    <div className="h-screen align-middle flex flex-col space-y-8 justify-center items-center text-center overflow-hidden">
      <BackgroundCircles />
      <div className="z-20">
        <img
          src="./images/Foto formal.jpg"
          className="relative rounded-full h-32 w-32 mx-auto object-cover"
        />
        <div>
          <h2 className="text-sm uppercase text-gray-500 p-2 tracking-[10px]">
            {appContext?.idiome.hero.profession}
          </h2>
          <h1 className="text-5xl lg:text-6xl font-semibold px-10">
            {appContext?.idiome.hero.preWords} {text}
            <Cursor cursorColor="#f7ab0a" />
          </h1>
          <div className="grid gap-2 justify-center align-middle mx-auto md:grid-flow-col pt-6">
            <Link href="#about">
              <button className="heroButton">{appContext?.idiome.sections.about}</button>
            </Link>
            <Link href="#experience">
              <button className="heroButton">{appContext?.idiome.sections.experience.exp}</button>
            </Link>
            <Link href="#skills">
              <button className="heroButton">{appContext?.idiome.sections.skills}</button>
            </Link>
            <Link href="#projects">
              <button className="heroButton">{appContext?.idiome.sections.projects}</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

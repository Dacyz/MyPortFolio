import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form'
import { SocialIcon } from 'react-social-icons'
import { FullContext } from '../context/Context'

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}

type Props = {}

function ContactMe({}: Props) {
  const appContext = useContext(FullContext)

  const { register, handleSubmit } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (data.subject.trim() != '' && data.name.trim() != '' && data.message.trim() != '' && data.email.trim() != '') {
      
      window.location.href =
        'mailto:DiegoYanguaM@gmail?subject=' +
        data.subject +
        ' &body=Hi, my name is ' +
        data.name +
        ', ' +
        data.message +
        '. From (' +
        data.email +
        '.'
    } else{
      alert('Debes completar los campos')
    }
  }

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
      className=""
    >
      <h4 className="text-4xl font-semibold text-center">
        {appContext?.idiome.sections.contact}
      </h4>
      <div className="w-screen space-y-2 flex flex-col sm:flex-row sm:justify-evenly">
        <div className="space-y-3 m-auto sm:ml-auto sm:mr-2">
          <div className="flex items-center justify-end space-x-4 mr-2">
            <p className="text-xl">+51 992 058 519</p>
            <PhoneIcon className="text-[#7AB0A] w-7" />
          </div>
          <div className="flex items-center justify-end space-x-4 mr-2">
            <p className="text-xl">DiegoYanguaM@gmail.com</p>
            <EnvelopeIcon className="text-[#7AB0A] w-7" />
          </div>
          <div className="flex items-center justify-end space-x-4 mr-2">
            <p className="text-xl">Piura - Perú</p>
            <MapPinIcon className="text-[#7AB0A] w-7" />
          </div>
          <div className="flex gap-2 justify-center sm:justify-end">
            {[
              'https://www.youtube.com/channel/UCGJwZBiP5TyP5tTP0wlFnMQ',
              'https://twitch.tv/dacynoob',
              'https://m.me/diegoartcy',
              'https://www.facebook.com/diegoartcy',
              'https://www.instagram.com/diegoartcy/',
            ].map((e, i) => (
              <SocialIcon
                url={e}
                key={i}
                target="_blank"
                fgColor={appContext?.theme.fgIcon}
                bgColor={appContext?.theme.bgIcon}
              />
            ))}
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 mx-auto sm:mr-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register('name')}
              placeholder="Name"
              className="contactInput w-40 md:w-auto"
              type="text"
            />
            <input
              {...register('email')}
              placeholder="Email"
              className="contactInput w-40 md:w-auto"
              type="email"
            />
          </div>
          <input
            {...register('subject')}
            placeholder="Subject"
            className="contactInput w-[328px] md:w-auto"
            type="text"
          />
          <textarea
            {...register('message')}
            placeholder="Message"
            className="contactInput w-[328px] md:w-auto"
          />
          <button
            className="bg-white rounded-xl h-10 text-black uppercase text-lg"
            type="submit"
          >
            submit
          </button>
        </form>
      </div>
      <div className="text-center mb-10 mt-2 mx-2 font-thin">
        {appContext?.idiome.sections.footer}
      </div>
    </motion.div>
  )
}

export default ContactMe

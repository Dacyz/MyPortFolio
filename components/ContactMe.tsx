import React from 'react'
import { motion } from 'framer-motion'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}

type Props = {}

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
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
      className="w-screen flex flex-col lg:flex-row lg:justify-evenly"
    >
      <div className="space-y-5 mb-5 mx-auto">
        <h4 className="text-2xl font-semibold text-center md:text-left">
          Mis contactos personales
        </h4>
        <div className="flex items-center space-x-5">
          <PhoneIcon className="text-[#7AB0A] w-7" />
          <p className="text-xl">+51 992 058 519</p>
        </div>
        <div className="flex items-center space-x-5">
          <EnvelopeIcon className="text-[#7AB0A] w-7" />
          <p className="text-xl">DiegoYanguaM@gmail.com</p>
        </div>
        <div className="flex items-center space-x-5">
          <MapPinIcon className="text-[#7AB0A] w-7" />
          <p className="text-xl">Piura - Perú</p>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-2 mx-auto"
      >
        <div className="flex space-x-2">
          <input
            {...register('name')}
            placeholder="Name"
            className="contactInput"
            type="text"
          />
          <input
            {...register('email')}
            placeholder="Email"
            className="contactInput"
            type="email"
          />
        </div>
        <input
          {...register('subject')}
          placeholder="Subject"
          className="contactInput"
          type="text"
        />
        <textarea
          {...register('message')}
          placeholder="Message"
          className="contactInput"
        />
        <button
          className="bg-white rounded-xl h-12 text-black uppercase text-lg"
          type="submit"
        >
          submit
        </button>
      </form>
    </motion.div>
  )
}

export default ContactMe

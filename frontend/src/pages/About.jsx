import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quasi accusantium, natus culpa quis hic architecto vitae repellat? Corporis perferendis dolores reprehenderit non! Quia quod magnam ipsum porro quas culpa?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet perspiciatis, maiores in deserunt nesciunt optio veniam nemo adipisci consectetur eum velit temporibus repellendus ipsam. Molestias nemo est numquam quibusdam vitae.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti recusandae consequatur, sed nostrum nulla id voluptate numquam incidunt et veniam labore exercitationem reiciendis repellat voluptatibus iste odit veritatis quia hic.</p>
        </div>

      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />

      </div>

    </div>
  )
}

export default About

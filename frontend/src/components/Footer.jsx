import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
          <img src={assets.logo} className='mb-5 w-32' alt="" />
          <p className='w-full md:w-2/4 text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, sunt! Exercitationem nesciunt laboriosam accusantium eaque ex officia error reprehenderit. Quasi totam nostrum dolore, eligendi similique quis corrupti voluptate voluptatem quae.</p>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className='text-xl font-medium mb-5 '>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+252-617978804</li>
            <li>nurahmed@st.snu.edu.so</li>

          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024 nurahmed@st.snu.edu.so - All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
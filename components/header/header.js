import Link from 'next/link';
import React from 'react'
import { BsPersonCircle } from 'react-icons/bs';




const Header = () => {
  return (
    <header  className='bg-simpleBlack py-5 px-4 flex'>
      <div>
        <BsPersonCircle size={35} color='#ff9e22' />
      </div>

      <ul className='flex items-center justify-between ml-auto space-x-6 [&>li]:text-orange [&>li]:cursor-pointer'>
        <li><Link href='/'>Users</Link></li>
      </ul>

    </header>
  )
}

export default Header
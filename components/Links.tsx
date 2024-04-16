'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const Links = () => {
  const [menu, setMenu] = useState(false)
 
  return (
    <>
      <div
        className='absolute left-1 top-6 lg:hidden cursor-pointer z-10'
        onClick={() => setMenu(!menu)}
      >
        {menu ? (
          <X
            size={24}
            color='red'
          />
        ) : (
          <Menu size={24} />
        )}
      </div>
      <div
        className={
          'w-full  flex items-center  justify-between  gap-6    italic'
        }
      >
        <Link
          href='/'
          className='flex items-center gap-2 max-sm-gap-1'
        >
          <Image
            src='/images/logo.png'
            alt=' Logo'
            width={70}
            height={70}
            className=''
          />
          <h1 className='font-semibold text-xl  '>Movies</h1>
        </Link>

        <div className='max-lg:hidden flex '>
          <div className='flex items-center gap-6'>
            <Link
              href='/'
              className=' px-4'
            >
             Home
            </Link>
            
            <Link
              href='/about-us'
              className=' px-4'
            >
               About
            </Link>
            <Link
              href='/contact'
              className=' px-4'
            >
              Contact
            </Link>
          </div>
          
        </div>
        {menu && (
          <div className='w-1/2 absolute top-0 left-0  flex flex-col pt-20 pb-2 gap-6 bg-secondary lg:hidden'>
            <Link
              href='/'
              className=' px-4'
            >
             Home
            </Link>
            
            <Link
              href='/about-us'
              className=' px-4'
            >
               About
            </Link>
            <Link
              href='/contact'
              className=' px-4'
            >
              Contact
            </Link>

           
          </div>
        )}
      </div>
    </>
  )
}

export default Links
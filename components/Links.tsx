'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
const Links = () => {
  const [menu, setMenu] = useState(false)
  const pathname = usePathname()
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
              className={`flex items-center gap-4 hover:bg-primary hover:text-primary-foreground hover:rounded-sm  rounded-sm px-4 py-2 transition ${
                pathname === '/' ? 'active ' : 'px-4'
              }`}
            >
             Home
            </Link>
            
            <Link
              href='/about-us'
              className={`flex items-center gap-4 hover:bg-primary hover:text-primary-foreground hover:rounded-sm  rounded-sm px-4 py-2 transition ${
                pathname === '/about-us' ? 'active ' : 'px-4'
              }`}
            >
               About
            </Link>
            <Link
              href='/contact'
              className={`flex items-center gap-4 hover:bg-primary hover:text-primary-foreground hover:rounded-sm  rounded-sm px-4 py-2 transition ${
                pathname === '/contact' ? 'active ' : 'px-4'
              }`}
            >
              Contact
            </Link>
          </div>
          
        </div>
        {menu && (
          <div className='w-1/2 absolute top-0 left-0  flex flex-col pt-20 pb-2 gap-6 bg-secondary lg:hidden'>
            <Link
              href='/'
              className={`flex items-center gap-4 hover:bg-primary hover:text-primary-foreground hover:rounded-sm  rounded-sm px-4 py-2 transition ${
                pathname === '/' ? 'active ' : 'px-4'
              }`}
            >
             Home
            </Link>
            
            <Link
              href='/about-us'
              className={`flex items-center gap-4 hover:bg-primary hover:text-primary-foreground hover:rounded-sm  rounded-sm px-4 py-2 transition ${
                pathname === '/about-us' ? 'active ' : 'px-4'
              }`}
            >
               About
            </Link>
            <Link
              href='/contact'
              className={`flex items-center gap-4 hover:bg-primary hover:text-primary-foreground hover:rounded-sm  rounded-sm px-4 py-2 transition ${
                pathname === '/contact' ? 'active ' : 'px-4'
              }`}
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
import Link from 'next/link'
import React from 'react'

const TypeMovies = () => {
  return (
    <div className='flex gap-4'>
      <Link href={`/?genere=movie/popular`}>Popular</Link>
      <Link href={'/?genere=movie/top_rated'}>Top Rated</Link>
      <Link href={'/?genere=movie/upcoming'}>Upcoming</Link>
      <Link href={'/?genere=movie/now_playing'}>Now Playing</Link>
      <Link href={'/?genere=trending/all/week'}>Trending</Link>
    </div>
  )
}

export default TypeMovies
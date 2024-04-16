
import CardMovie from '@/components/CardMovie'
import { Key, ReactElement, JSXElementConstructor, ReactNode, AwaitedReactNode } from 'react'
const API_KEY = process.env.API_TMDB_KEY
import type { PropsMovie } from '@/components/CardMovie'
export default async function Home() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  )
  const data = await res.json()
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const results = data.results

  return (
    <main className='flex min-h-screen flex-col items-center justify-start p-12'>
      <div className='w-full grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4' >
        {results.map((movie: PropsMovie) => (
          <CardMovie key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  )
}

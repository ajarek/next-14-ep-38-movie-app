import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'

export type PropsMovie={
  id:number
  backdrop_path: string
  title: string
  overview: string
  release_date: string
}

const CardMovie = ({movie}: {movie: PropsMovie}) => {
  return (
    <Card>
      <CardHeader>
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title || ''}
          width={500}
          height={300}
          className='sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300'
        />
      </CardHeader>
      <CardContent>
        <CardTitle>{movie.title}</CardTitle>
        <CardDescription>{movie.overview.slice(0, 100)}</CardDescription>
       
      </CardContent>
      <CardFooter>
        <p>{movie.release_date}</p>
      </CardFooter>
    </Card>
  )
}

export default CardMovie

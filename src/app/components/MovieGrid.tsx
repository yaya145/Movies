import React from 'react'
import { MovieCard } from './MovieCard'

const MOCK_MOVIES = [
  {
    id: "1",
    title: "Интерстеллар",
    description: "Когда засуха приводит человечество к продовольственному кризису, коллектив исследователей и ученых отправляется сквозь червоточину в путешествие.",
    rating: 8.6,
    releaseDate: "2014-11-06",
    imageUrl: "./interstellar.webp"
  },
  {
    id: "2",
    title: "Начало",
    description: "Кобб — талантливый вор, лучший в опасном искусстве извлечения: он крадет ценные секреты из глубин подсознания во время сна.",
    rating: 8.8,
    releaseDate: "2010-07-22",
    imageUrl: "./inception.jpg"
  },
  {
    id: "3",
    title: "Бегущий по лезвию 2049",
    description: "Новый блейд-раннер, офицер К, раскрывает давно погребенную тайну, которая может погрузить остатки общества в хаос.",
    rating: 8.0,
    releaseDate: "2017-10-05",
    imageUrl: "./runner.jpg"
  },
  {
    id: "4",
    title: "Дюна: Часть вторая",
    description: "Герцог Пол Атрейдес присоединяется к племени фрименов, чтобы возглавить восстание против уничтоживших его семью Харконненов.",
    rating: 8.5,
    releaseDate: "2024-03-01",
    imageUrl: "./duna2.webp"
  }
]

export const MovieGrid: React.FC = () => {
  return (

    <section className="py-10 px-6 max-w-[1280px] mx-auto bg-app-bg text-app-text min-h-screen transition-colors duration-300">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">В тренде</h2>
          <p className="mt-1 text-xs opacity-60">Самые просматриваемые фильмы за неделю.</p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {MOCK_MOVIES.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            description={movie.description}
            rating={movie.rating}
            releaseDate={movie.releaseDate}
            imageUrl={movie.imageUrl}
          />
        ))}
      </div>
    </section>
  )
}

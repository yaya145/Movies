import React from 'react';
import { MovieCard } from './MovieCard';

export interface Movie {
  id: string;
  title: string;
  description: string;
  rating: number;
  releaseDate: string;
  imageUrl: string;
}

interface MovieGridProps {
  title?: string;
  subtitle?: string;
  movies?: Movie[];
}

const DEFAULT_MOVIES: Movie[] = [
  {
    id: '1',
    title: 'Интерстеллар',
    description: 'Когда засуха приводит человечество к продовольственному кризису, коллектив исследователей и ученых отправляется сквозь червоточину в путешествие.',
    rating: 8.6,
    releaseDate: '2014-11-06',
    imageUrl: '/interstellar.webp',
  },
  {
    id: '2',
    title: 'Начало',
    description: 'Кобб — талантливый вор, лучший в опасном искусстве извлечения: он крадет ценные секреты из глубин подсознания во время сна.',
    rating: 8.8,
    releaseDate: '2010-07-22',
    imageUrl: '/inception.jpg',
  },
  {
    id: '3',
    title: 'Бегущий по лезвию 2049',
    description: 'Новый блейд-раннер, офицер К, раскрывает давно погребенную тайну, которая может погрузить остатки общества в хаос.',
    rating: 8.0,
    releaseDate: '2017-10-05',
    imageUrl: '/runner.jpg',
  },
  {
    id: '4',
    title: 'Дюна: Часть вторая',
    description: 'Герцог Пол Атрейдес присоединяется к племени фрименов, чтобы возглавить восстание против уничтоживших его семью Харконненов.',
    rating: 8.5,
    releaseDate: '2024-03-01',
    imageUrl: '/duna2.webp',
  },
  {
    id: '5',
    title: 'Зелёная миля',
    description: 'История о надзирателе блока смертников, который сталкивается с чудом и несправедливостью.',
    rating: 9.1,
    releaseDate: '1999-12-10',
    imageUrl: '/the_green_mile.webp',
  },
  {
    id: '6',
    title: 'Майкл',
    description: 'Биографическая музыкальная драма режиссёра Антуана Фукуа о становлении короля поп-музыки Майкла Джексона, от детства в группе Jackson 5 до пика его славы.',
    rating: 7.3,
    releaseDate: '2026-04-24',
    imageUrl: '/michael.jpg',
  },
  {
    id: '7',
    title: 'Проект "Конец света"',
    description: 'научно-фантастическая картина с Райаном Гослингом об учителе, который пытается спасти Солнце от угасания.',
    rating: 8.2,
    releaseDate: '2026-03-20',
    imageUrl: '/hail_mary.webp',
  },
  {
    id: '8',
    title: 'Побег из Шоушенка',
    description: 'Рассказывает о невинно осуждённом банкире Энди Дюфрейне, который проводит в тюрьме около двух десятилетий и совершает дерзкий побег.',
    rating: 9.1,
    releaseDate: '1994-09-10',
    imageUrl: '/the_shaw_redemption.webp',
  },
];

export const MovieGrid: React.FC<MovieGridProps> = ({
  title = 'В тренде',
  subtitle = 'Самые просматриваемые фильмы за неделю.',
  movies = DEFAULT_MOVIES,
}) => {
  return (
    <section className="py-10 px-6 max-w-[1280px] mx-auto bg-app-bg text-app-text min-h-screen transition-colors duration-300">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
          {subtitle && <p className="mt-1 text-xs opacity-60">{subtitle}</p>}
        </div>
      </div>

      {movies.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map(({ id, ...movieProps }) => (
            <MovieCard key={id} {...movieProps} />
          ))}
        </div>
      ) : (
        <div className="py-12 text-center opacity-60">
          Фильмы не найдены.
        </div>
      )}
    </section>
  );
};

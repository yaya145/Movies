import React from 'react'

interface MovieCardProps {
  title: string
  description: string
  rating: number
  releaseDate: string
  imageUrl: string
}

export const MovieCard: React.FC<MovieCardProps> = ({
  title,
  description,
  rating,
  releaseDate,
  imageUrl,
}) => {
  const releaseYear = new Date(releaseDate).getFullYear() || releaseDate;

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-current/10 bg-app-card text-app-text shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg">
      
      <div className="relative aspect-[2/3] w-full overflow-hidden bg-current/5">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-md bg-black/80 px-2 py-1 text-xs font-bold text-yellow-400 border border-white/10">
          <span>★</span>
          <span>{rating.toFixed(1)}</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-bold leading-tight transition-colors group-hover:text-amber-500 line-clamp-1" title={title}>
            {title}
          </h3>
          <span className="text-xs font-medium opacity-60 shrink-0 mt-0.5">
            {releaseYear}
          </span>
        </div>
        
        <p className="mt-2 text-xs opacity-70 line-clamp-3 flex-1 leading-relaxed">
          {description}
        </p>

        <div className="mt-4 flex items-center justify-between pt-3 border-t border-current/10">
          <button className="cursor-pointer text-xs font-semibold text-amber-500 hover:underline">
            Смотреть
          </button>
          
          <button 
            title="Добавить в избранное"
            className="cursor-pointer rounded-md p-1.5 opacity-60 hover:opacity-100 hover:text-red-500 transition-colors"
          >
            <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
} 


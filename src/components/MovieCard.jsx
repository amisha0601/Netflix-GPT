import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  if (!posterPath) return null; 
  return (
    <div className='w-full '>
      <img alt='Movie Card' className='rounded-2xl' 
        src={IMG_CDN_URL + posterPath}
      />  
    </div>
  )
}

export default MovieCard;
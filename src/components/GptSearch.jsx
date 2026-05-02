import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BG_URL } from '../utils/constants';

const GptSearch = () => {
  return (
    <div className='relative'>
     <div className="fixed z-0 w-full h-full">
        <img
          className='h-screen w-screen object-cover'
          src={BG_URL}
          alt="bg"
        />
        <div className="absolute top-0 left-0 h-screen w-screen bg-black/40"></div>
      </div>
      <div className='relative z-10 pt-16'>
         <GptSearchBar/>
    <GptMovieSuggestions/>
      </div>
   </div>
  )
}

export default GptSearch;

import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BG_URL } from '../utils/constants';

const GptSearch = () => {
  return (
    <div>
     <div className="fixed -z-10 ">
        <img
          className='h-screen w-screen object-cover'
          src={BG_URL}
          alt="bg"
        />
        <div className="absolute top-0 left-0 h-screen w-screen bg-black/40"></div>
      </div>
    <GptSearchBar/>
    <GptMovieSuggestions/>
   </div>
  )
}

export default GptSearch;

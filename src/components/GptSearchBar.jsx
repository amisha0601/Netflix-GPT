import React from "react";

const GptSearchBar = () => {
  return (
    <div className="pt-[6%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder="What would you like to watch today?"
        ></input>
        <button className="py-2 px-4 m-4 col-span-3 bg-lime-400 text-white rounded-lg">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

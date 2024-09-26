'use client'
import { useState } from "react";
 
const Search = () => {
  const [isDisabled, setIsDisabled] = useState(true);

    return (
      <div>
        <form className="flex justify-center items-center space-x-4 m-4">
          <input type="search" placeholder="Search library..." disabled className="px-4 py-2 bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:opacity-75"/>
          <label className={`p-2 flex items-center gap-2 bg-gray-100 rounded-md ${isDisabled ? 'cursor-not-allowed opacity-75' : 'cursor-pointer'}`}>
            <input 
              type="submit" 
              disabled={isDisabled} 
              className="hidden" 
            />
            <p className="m-0">&#127468;&#127463;</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="h-3 w-3">
              <path d="M8 13.1l-8-8 2.1-2.2 5.9 5.9 5.9-5.9 2.1 2.2z" />
            </svg>
          </label>
          <input type="submit" value="Search" disabled className="px-4 py-2 bg-green-700 text-white rounded-md cursor-pointer disabled:cursor-not-allowed disabled:opacity-75"/>
        </form>
      </div>
    );
  };
  
  export default Search;
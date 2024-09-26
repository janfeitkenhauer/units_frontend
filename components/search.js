'use client'
 
const Search = () => {
    return (
      <div>
        <form className="flex justify-center items-center space-x-4 m-4">
          <input type="search" placeholder="Search library..." className="px-4 py-2 bg-gray-200 rounded-md"/>
          <div className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-md">
            <input type="button" value="Search realm" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="h-3 w-3">
              <path d="M8 13.1l-8-8 2.1-2.2 5.9 5.9 5.9-5.9 2.1 2.2z" />
            </svg>
          </div>
          <input type="submit" value="Search" className="px-4 py-2 bg-sky-800 text-white rounded-md cursor-pointer"/>
        </form>
      </div>
    );
  };
  
  export default Search;
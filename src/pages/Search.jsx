import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GifState } from '../context/Context'
import FilterGif from '../components/FilterGif'
import Gif from '../components/Gif'

const Search = () => {
  const [searchResults, setSearchResults] = useState([])
  const {query} = useParams()

  const {gifAPI, filter} = GifState();

  const fetchSearchResults = async () => {
    const { data } = await gifAPI.search(query, {
      sort: "relevent",
      lang:"en",
      type: filter,
      limit:20
    });
    setSearchResults(data)
  }

  useEffect(() => {
    fetchSearchResults();
  }, [filter])
  
  return (
    <div className='my-4'>
      <h2 className='text-5xl pb-3 font-extrabold'>{ query }</h2>

      <FilterGif alignLeft={true}/>

      {searchResults.length > 0 ? (
        <div className='columns-2 md:columns-3 lg:columns-4 gap-2'>
          {searchResults.map((gif, index) => {
            return <Gif gif={gif} key={index}/>
          })}
        </div>
      ) : (
        <span>
          NO GIFs found for {query}. Try searching for Stickers instead!
        </span>
      )}
    </div>
  );
}

export default Search
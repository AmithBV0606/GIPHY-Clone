import React, {useEffect} from 'react'
import { GifState } from '../context/Context'
import Gif from '../components/Gif'
import FilterGif from '../components/FilterGif'

const Home = () => {
  const {gifAPI, gifs, setGifs, filter} = GifState()

  const fetchTredingGIFs = async () => {
    const { data } = await gifAPI.trending({
      limit: 20,
      type: filter,
      rating: "g"
    })

    setGifs(data);
  }

  useEffect(() => {
    fetchTredingGIFs()
  }, [filter])
  

  return (
    <div>
      <img 
        src="src/assets/banner.gif" 
        alt="Earth Banner"
        className='mt-2 rounded-lg w-full' 
      />

      {/* Filter */}
      <FilterGif showTrending />

      <div className='columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2'>
        {gifs.map((gif, index) => {
          return <Gif gif={gif} key={index}/>
        })}
      </div>

    </div>
  )
}

export default Home
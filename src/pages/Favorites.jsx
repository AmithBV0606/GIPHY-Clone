import React, {useEffect, useState} from 'react'
import { GifState } from '../context/Context'
import Gif from '../components/Gif';

const Favourites = () => {
  const [favoriteGIFs, setFavoriteGIFs] = useState([])

  const {gifAPI, favorites} = GifState();

  const fetchFavoriteGIFs = async () => {
    const {data:gifs} = await gifAPI.gifs(favorites);
    setFavoriteGIFs(gifs)
  }

  useEffect(() => {
    fetchFavoriteGIFs();
  }, [])

  return (
    <div>
      <span className='faded-text'>My Favorites</span>

      <div className='columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2 mt-2'>
        {favoriteGIFs.map((gif, index) => (
          <Gif gif={gif} key={index}/>
        ))}
      </div>
    </div>
  )
}

export default Favourites
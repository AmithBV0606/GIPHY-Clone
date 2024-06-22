import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { HiOutlineMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";

const GifSearch = () => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const searchGIFs = async () => {
        if(query.trim() === ""){
            return;
        }

        navigate(`/search/${query}`)
    }

  return (
    <div className='flex relative'>
        <input 
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Search all the GIFs and Stickers'
            className='w-full pl-4 pr-14 py-5 text-xl text-black rounded-lg border border-gray-300 outline-none' 
        />

        {query && (
            <button
                className='absolute right-20 top-6 bg-gray-500 opacity-90 rounded-full mr-2'
                onClick={() => setQuery("")}
            >
                <HiMiniXMark size={22}/>
            </button>
        )}

        <button
            className='bg-gradient-to-tr from-pink-500 to-pink-300 text-white px-4 py-2 rounded-lg absolute right-0 h-full'
            onClick={searchGIFs}
        >
            <HiOutlineMagnifyingGlass size={35} className='-scale-x-100'/>
        </button>
    </div>
  )
}

export default GifSearch
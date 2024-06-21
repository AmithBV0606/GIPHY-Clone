import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiDotsVertical, HiOutlineMenuAlt3 } from "react-icons/hi";
import { GifState } from "../context/Context";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);

  const { gifAPI, filter, setFilter, favorites} = GifState()

  const fetchGifCategories = async () => {
    const {data} = await gifAPI.categories();
    console.log(data)
    setCategories(data)
  }

  useEffect(() => {
    fetchGifCategories()
  }, [])
  

  return (
    <nav>

        <div className="flex gap-4 justify-between items-center mb-2 relative">

            <Link to="/" className="flex gap-2">
            <img src="src/assets/GIPHY.svg" alt="GIPHY Logo" className="w-8" />

            <h1 className="text-5xl font-bold tracking-tight cursor-pointer">
                GIPHY
            </h1>
            </Link>

            <div className="flex items-center justify-center gap-2 font-bold text-base">
                {/* Render Other Items */}
                {categories?.slice(0, 5)?.map((category) => {
                    return (
                        <Link
                            key={category.name} 
                            to={`/${category.name_encoded}`} 
                            className="px-4 py-1 hover:gradient border-b-4 hidden lg:block"
                        >
                            {category.name}
                        </Link>
                    );
                })}

                <button onClick={() => setShowCategories(!showCategories)}>
                    <HiDotsVertical
                        size={35}
                        className={`py-0.5 hover:gradient border-b-4 hidden lg:block ${showCategories ? "gradient" : ""}`}
                    />
                </button>

                {favorites.length > 0 && (
                    <div className="h-9 bg-gray-700 pt-1.5 px-6 cursor-pointer rounded">
                        <Link to="/favorites">Favorite GIFs</Link>
                    </div>)
                }

                <button>
                    <HiOutlineMenuAlt3 
                        className="text-sky-400 block lg:hidden" 
                        size={35}
                    />
                </button>
            </div>

            {showCategories && (
                <div className="absolute right-0 top-14 px-10 pt-6 pb-9 w-full gradient z-20">
                    <span className="text-3xl font-extrabold">Categories</span>
                    <hr className="bg-gray-100 opacity-50 my-5"/>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 ">
                        {categories?.map((category) => {
                            return (
                                <Link 
                                    className="font-bold"
                                    key={category.name}
                                    to={`/${category.name_encoded}`}    
                                >
                                    {category.name}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            )}

        </div>

        {/* Search */}
    </nav>
  );
};

export default Header;
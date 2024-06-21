import { GiphyFetch } from "@giphy/js-fetch-api";
import { createContext, useContext, useState } from "react";

const GifContext = createContext();

const GifContextProvider = ({ children }) => {
    const gifAPI = new GiphyFetch(import.meta.env.VITE_GIPHY_API_KEY)

    const [gifs, setGifs] = useState([]);
    const [filter, setFilter] = useState("gifs");
    const [favorites, setFavorites] = useState([]);

    return (
        <GifContext.Provider value={{ gifAPI, gifs, setGifs, filter, setFilter, favorites }}>
            {children}
        </GifContext.Provider>
    );
}

export const GifState = () => {
    return useContext(GifContext)
}

export default GifContextProvider;
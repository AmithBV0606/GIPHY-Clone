import { createContext } from "react";

export const GifContext = createContext();

const GifContextProvider = ({ children }) => {
    return (
        <GifContext.Provider>
            {children}
        </GifContext.Provider>
    );
}

export default GifContextProvider;
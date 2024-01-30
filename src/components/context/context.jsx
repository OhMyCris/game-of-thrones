import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

export const GameOfContext = createContext();

const baseUrl = "https://game-of-thrones-json-server.vercel.app"

export const GameOfContextProvider = ({children}) => {

    const [characters, setCharacters] = useState([])

    useEffect(() => {
        const getCharacters = async () => {
            const characterApi = await axios.get(`${baseUrl}/characters`)
            setCharacters(characterApi);
        }

        getCharacters()
    }, [])

    return (
        <GameOfContext.Provider value={{characters}}>
            {children}
        </GameOfContext.Provider>
    )
}
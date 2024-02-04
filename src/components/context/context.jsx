import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

export const GameOfContext = createContext();

const baseUrl = "https://game-of-thrones-json-server.vercel.app"

export const GameOfContextProvider = ({children}) => {

    const [characters, setCharacters] = useState([])
    // const [detalleCharacters, setDetalleCharacters] = useState([])
    const [houses, setHouses] = useState([])
    // const [search, setSearch] = useState([])

    useEffect(() => {
        const getCharacters = async () => {
            const characterApi = await axios.get(`${baseUrl}/characters`)
            setCharacters(characterApi.data);
            console.log(characterApi.data);
        }

        getCharacters()
    }, [])

  

    useEffect(() => {
        const getHouses = async () => {
            const housesApi = await axios.get(`${baseUrl}/houses`)
            setHouses(housesApi.data);
            console.log(housesApi.data);
        }

        getHouses()
    }, [])

  

    return (
        <GameOfContext.Provider value={{characters, houses}}>
            {children}
        </GameOfContext.Provider>
    )
}
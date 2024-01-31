import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

export const GameOfContext = createContext();

const baseUrl = "https://game-of-thrones-json-server.vercel.app"

export const GameOfContextProvider = ({children}) => {

    const [characters, setCharacters] = useState([])
    const [houses, setHouses] = useState([])
    const [search, setSearch] = useState([])

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

    useEffect(() => {
        const getSearch = async () => {
            const searchApi = await axios.get(`${baseUrl}/characters?name=`)
            setSearch(searchApi.data);
            console.log(searchApi.data);
        }

        getSearch()
    }, [])

    return (
        <GameOfContext.Provider value={{characters, houses, search}}>
            {children}
        </GameOfContext.Provider>
    )
}
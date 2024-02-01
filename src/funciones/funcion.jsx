import axios from 'axios'

const todosPersonajes = async(state) => {
    const peticion = await axios.get('  https://game-of-thrones-json-server.vercel.app/houses')
    state(peticion.data);
}

const unicaCasa = async (id, state) => {
    const peticion = await axios.get(`https://game-of-thrones-json-server.vercel.app/houses/${id}`  )
    state(peticion.data);
}
export{todosPersonajes, unicaCasa}
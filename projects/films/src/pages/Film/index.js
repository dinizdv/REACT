import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

import api from '../../services/api'

function Film () {
    const {id} = useParams()
    const [film, setFilm] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        async function loadFilm(){
            await api.get(`/movie/${id}`, {
                params:{
                    api_key: "376586d56c257fd50e1c2b37bb7af55e", // prove to the server that you have permission to access the requested resources 
                }
            })

            .then ((response) => {
                setFilm(response.data) // update the film with the dates
                setLoading(false) 
            })
            .catch(() => {
                console.log("Does not exist") // the film with this id does not exist
            })
    } 
    
        loadFilm()
        
        return () => {
            console.log("Disassembled component") // when you come home
        }

    },    [])

    // loading only works while the films do not appear

    if (loading){
        return(
            <div className="film-info">
                <h1>Loading films...</h1>
            </div>
        )
    }

    return(
        <div className="film-info">
            <h1>{film.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${film.backdrop_path}`} alt={film.title} />

            <h3>Synopsis</h3>
            <span>{film.overview}</span>
            <span>Vote average: {film.vote_average} / 10</span> 
            {/* ***arredondar o vote_average */}
        </div>
    )
}

export default Film
import React, { useEffect, useState } from 'react'
import './Row.css'
const base_url = 'https://image.tmdb.org/t/p/original'
function Row({ title, fetchUrl, isLargeRow }) {
    console.log(fetchUrl, 'url')
    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchMovie() {
            const response = await fetch(fetchUrl)
            const data = await response.json()
            //Whatever Data that You Will Get That Will Be As As A data.[results] 
            setMovie(data.results)
            console.log(data.results, 'data')
            return data
        } fetchMovie()

    }, [fetchUrl])

    console.log(movie, 'from Row')
    return (
        <div className='row'>
            <h2>{title}</h2>

            <div className='row_posters' >
                {movie?.map(movie =>
                ((isLargeRow && movie.poster_path || !isLargeRow && movie.poster_path) &&

                    <img className={`row_poster ${isLargeRow && 'row_posterLarge'}`} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
                        }`} alt={movie?.name} ></img>
                ))

                }
            </div>
        </div>
    )
}

export default Row
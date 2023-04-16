import React, { useState, useEffect } from 'react'
import './Banner.css'
import requests from './Requests'

function Banner() {
    const [movie, setMovie] = useState({})

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(requests.fetchNetflixOriginals)
            const data = await response.json()
            //Whatever Data that You Will Get That Will Be As As A data.[results] 
            const randomIndex = Math.floor(Math.random() * (data.results.length + 1))
            setMovie(data.results[randomIndex])
            console.log(data, 'data')
            return data
        }
        fetchData()
    }, [])

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string
    }
    console.log(movie, '......')
    return (
        <header className='banner' style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center  center',
            backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`
        }}>

            <div className='banner_content'>
                <h1 className='banner_title'>{movie?.name || movie?.original_name || movie?.title}</h1>
                <div className='banner_buttons'>
                    <button className='banner_button'>play</button>
                    <button className='banner_button'>My List</button>
                </div>
                <div className='banner_description'>{movie?.overview}</div>
            </div>
            <div className='banner--fadeBottom'></div>
            {truncate()}
        </header>
    )
}

export default Banner
import {React, useState, useEffect} from 'react'
import axios from './../axios';
import requests from './../requests';
import './Banner.css';

const baseURL='https://image.tmdb.org/t/p/w500/';

const Banner = () => {
    const [movie, setMovie]=useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get(requests.fetchNetflixOriginals);
            // console.log(request.data.results[Math.floor(Math.random()*request.data.results.length)])
            setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length)])
            // Math.floor(Math.random()*request.data.results.length-1)
            // console.log(movie);
        }
        fetchData();
    }, []);

    function truncate(n, str){
        return str.length>n ? str.substr(0, n-1) + "..." : str;
    }

  return (
    <header className='banner'
        style={{
            backgroundSize: 'cover',
            backgroundImage: `url(${baseURL}${movie.backdrop_path})`,
            backgroundPosition: 'center center'
        }}
    > 
    {/* It will have a background image */}
        <div className="banner-contents">
            <h1 className='banner-title'>{movie.name}</h1>
            <div className="banner-buttons">
                <button className="banner-button">Play</button>
                <button className="banner-button">My List</button>
            </div>
            <p className='banner-description'>{movie.overview}</p>
        </div>
        <div className="banner-fadebottom"></div>
    </header>
  )
}

export default Banner
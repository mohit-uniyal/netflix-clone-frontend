import {React, useState, useEffect} from 'react'
import axios from './../axios';
import './Row.css';

const baseURL='https://image.tmdb.org/t/p/w500/';

const Row = ({title, fetchUrl}) => {
    const [movies, setMovies]=useState([]);

    useEffect(()=>{
        // if [], run once when the row loads, and dont run again
        // contains dependencies. So, if something in the dependencies changes, this piece of code would run again.
        async function fetchData(){
            const request=await axios.get(fetchUrl);
            // console.log(request.data.results);
            setMovies(request.data.results);
            // console.table(movies);
        }
        fetchData();
    }, [fetchUrl]);


  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className="row-posters">
            {/* containers -> posters*/}
            {movies.map((movie)=>{
                return <img key={movie.id} className='row-poster' src={`${baseURL}${movie.poster_path}`} alt={movie.name} />
            })}
        </div>
    </div>
  )
}

export default Row
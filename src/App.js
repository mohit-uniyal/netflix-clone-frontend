import React from 'react'
import Row from './components/Row'
import requests from './requests';
import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Banner />
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentatries" fetchUrl={requests.fetchDocumentaryMovies} />
    </div>
  )
}

export default App
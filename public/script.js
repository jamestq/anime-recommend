import {populateGenresDropDown, getSelectedGenre, getRandomMovie} from './helper.js';

const jikanBaseUrl = "https://api.jikan.moe/v4";
const loadGenreButton = document.getElementById('load-genre');
const pickGenreButton = document.getElementById('pick-genre');

async function getGenres(){
    let genreRequestEndPoint = "/genres/anime";
    let urlToFetch = jikanBaseUrl + genreRequestEndPoint;
    try{
        let response = await fetch(urlToFetch);
        if(response.ok){
            let jsonResponse = await response.json();
            let genres = jsonResponse.data;  
            return genres;
        }
        return [];
    }catch(error){
        console.log(error);
    }
}

function loadGenres(){
    getGenres().then(populateGenresDropDown);
}   

async function getMovies(){
    const selectedGenre = getSelectedGenre();
    let discoverAnimeEndPoint = '/anime'
    let requestParams = `?genres=${selectedGenre}`;
    let urlToFetch = jikanBaseUrl + discoverAnimeEndPoint + requestParams;
    try{
        const response = await fetch(urlToFetch);
        if(response.ok){
            const jsonResponse = await response.json();
            const movies = jsonResponse.data;
            return movies;
        }
    }catch(error){ 
        console.log(error);
    }
}

async function getMovieInfo(movie){
    let movieId = movie.mal_id;
    let movieEndPoint = `/anime/${movieId}`;
    let urlToFetch = jikanBaseUrl + movieEndPoint;
    try{
        const response = await fetch(urlToFetch);
        if(response.ok){
            const movieInfo = response.json();
            return movieInfo;
        }
    }catch(error){
        console.log(error);
    }
}

async function showRandomMovie(){
    const movies = await getMovies();
    const randomMovie = getRandomMovie(movies);
    const info = await getMovieInfo(randomMovie);
    console.log(info);
}

pickGenreButton.onclick = showRandomMovie;
loadGenreButton.onclick = loadGenres;

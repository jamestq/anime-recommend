import {populateGenresDropDown} from './helper.js';

const jikanBaseUrl = "https://api.jikan.moe/v4";

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
    }catch(error){
        console.log(error);
    }
}

getGenres().then(populateGenresDropDown);
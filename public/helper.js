const populateGenresDropDown = function(genres){
    const select = document.getElementById('genres');
    for(let i=0; i<genres.length; i++){
        let option = document.createElement('option');
        option.value = genres[i].mal_id;
        option.text = genres[i].name;
        select.appendChild(option);
    }
}

const getSelectedGenre = function(){
    return document.getElementById('genres').value;
}


const getRandomMovie = function(movies){
    const randomSelection = Math.floor(Math.random()*movies.length);
    return movies[randomSelection];
}

export {populateGenresDropDown, getSelectedGenre, getRandomMovie};
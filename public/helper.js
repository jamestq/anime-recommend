const populateGenresDropDown = function(genres){
    const select = document.getElementById('genres');
    for(let i=0; i<genres.length; i++){
        let option = document.createElement('option');
        option.value = genres[i].mal_id;
        option.text = genres[i].name;
        select.appendChild(option);
    }
}

export {populateGenresDropDown};
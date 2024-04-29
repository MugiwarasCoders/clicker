//CONCERNE LA PAGE FAVORIS

async function getAllFavoritesMovies(account_id) {
    let allFavs = []
    await fetch(`https://api.themoviedb.org/3/account/${account_id}/favorite/movies?language=fr-FR&sort_by=created_at.desc`, options)
    .then(response => response.json())
    .then(response => {
        let favorites = response
        favorites.results.forEach(favorite => {
            $('#favoriteMovies').append(`
            <div class="favContainer d-flex">
                <img class="favImage" src="https://image.tmdb.org/t/p/w500${favorite.poster_path}">
                <div class="favInfos d-flex flex-column">
                    <div>
                        <h2>${favorite.original_title}</h2>
                        <p></p>
                    </div>
                    <div>
                        <p>${favorite.overview}</p>
                    </div>
                </div>
            </div>`)
            allFavs.push(favorite.id)
        })
        return allFavs
    })
    .catch(err => console.error(err));
}


//SERIES
async function getAllFavoritesSeries(account_id) {
    await fetch(`https://api.themoviedb.org/3/account/${account_id}/favorite/tv?language=fr-FR&sort_by=created_at.desc`, options)
    .then(response => response.json())
    .then(response => {
        let favorites = response
        favorites.results.forEach(favorite => {
            $('#favoriteSeries').append(`
            <div class="favContainer d-flex">
                <img class="favImage" src="https://image.tmdb.org/t/p/w500${favorite.poster_path}">
                <div class="favInfos d-flex flex-column">
                    <div>
                        <h2>${favorite.name}</h2>
                        <p></p>
                    </div>
                    <div>
                        <p>${favorite.overview}</p>
                    </div>
                </div>
            </div>`)
        })
    })
    .catch(err => console.error(err));
}





async function rmAllFavs(account_id){
    await fetch(`https://api.themoviedb.org/3/account/${account_id}/favorite/movies?language=fr-FR&sort_by=created_at.desc`, options)
    .then(response => response.json())
    .then(response => {
        response.results.forEach(favorite => {
            let movie_id = favorite.id
            removeFavorite(account_id, movie_id)
            $('#favoriteMovies').empty()
        })
    })
}

async function removeFavorite(account_id, movie_id){
    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzI3OWRlY2RjNzc0NTUyZDdkYzI4NjA5M2FmMTZhMSIsInN1YiI6IjY2MjYyOWRkNjJmMzM1MDE3ZGRhYzg3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vbfXPXqHdE1JUPQXRT-vGJY89rNYBUnjTHd0oe9HCLA'
        },
        body: JSON.stringify({media_type: 'movie', media_id: movie_id, favorite: false})
    };

    fetch(`https://api.themoviedb.org/3/account/${account_id}/favorite`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}






$(document).ready(function(){
    getAllFavoritesMovies(21227686)
    getAllFavoritesSeries(21227686)
})
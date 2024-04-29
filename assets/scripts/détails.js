$(document).ready(function(){
    listFavs(21227686)
})

function currentMovie(){
    // Récupérer l'URL actuelle
    let url = window.location.search;

    // Obtenir les paramètres d'URL de l'URL
    let urlParams = new URLSearchParams(url);

    // Vérifier si le paramètre "movie_id" est présent dans l'URL
    if (urlParams.has('movie_id')) {
        // Récupérer la valeur du paramètre "movie_id"
        let movieId = urlParams.get('movie_id');
        return movieId;
    } else {
        // Si le paramètre "movie_id" n'est pas présent, retourner null ou une autre valeur par défaut
        return null;
    }
}

async function listFavs(account_id){
    let current = currentMovie()
    await fetch(`https://api.themoviedb.org/3/account/${account_id}/favorite/movies?language=fr-FR&sort_by=created_at.desc`, options)
    .then(response => response.json())
    .then(response => {
        response.results.forEach(favorite => {
            console.log(favorite.original_title)
            if (favorite.id == current){
                console.log('yes')
                $('.addFavorite').find('#full_heart').css('height', '100%')
            }
        })
    })
}

//CONCERNE LA PAGE DETAILS
function addFavoriteMovie(media_type, media_id, account_id) {
    const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          Authorization: 'Bearer '+key+''
        },
        body: JSON.stringify({media_type: media_type, media_id: media_id, favorite: true})
    };

    fetch(`https://api.themoviedb.org/3/account/${account_id}/favorite`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            if (response.status_code === 1){
                console.log('Le film a bien été ajouté à vos favoris')
                $('.addFavorite').find('#full_heart').css('height', '100%')
                $('.addFavorite').addClass('animate__animated animate__heartBeat')
            }
            if (response.status_code === 12){
                console.log('Le film a bien été supprimé de vos favoris')
                removeFavoriteMovie(media_id)
            }
            else{

            }
        })
        .catch(err => console.error(err));
}

async function addToFavorite(id, media_type){
    // showFavorites()
    $('.addFavorite').click(function(){
        addFavoriteMovie(media_type, id, 21227686)
    })
}


//Suppression des favoris

function removeFavoriteMovie(media_id, account_id) {
    const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzI3OWRlY2RjNzc0NTUyZDdkYzI4NjA5M2FmMTZhMSIsInN1YiI6IjY2MjYyOWRkNjJmMzM1MDE3ZGRhYzg3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vbfXPXqHdE1JUPQXRT-vGJY89rNYBUnjTHd0oe9HCLA'
        },
        body: JSON.stringify({media_type: 'movie', media_id: media_id, favorite: false})
    };

    fetch(`https://api.themoviedb.org/3/account/${account_id}/favorite`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
        $('.addFavorite').find('#full_heart').css('height', '0%')

}

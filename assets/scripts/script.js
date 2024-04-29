
//Fonctions
let key = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzI3OWRlY2RjNzc0NTUyZDdkYzI4NjA5M2FmMTZhMSIsInN1YiI6IjY2MjYyOWRkNjJmMzM1MDE3ZGRhYzg3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vbfXPXqHdE1JUPQXRT-vGJY89rNYBUnjTHd0oe9HCLA"

let options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${key}`
  }
};

const urlParams = new URLSearchParams(window.location.search);
const serieId = urlParams.get('serie_id');
const movieId = urlParams.get('movie_id');

//FUNCTIONS

async function getPopularMovies(){
  let response = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=fr-FR&page=1&sort_by=popularity.desc', options)
  let popularMovies = await response.json()
  return popularMovies
}

async function getPopularSeries(){
  let response = await fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&language=fr-FR&page=1&sort_by=popularity.desc&air_date.lte={max_date}&air_date.gte={min_date}', options);
  let popularSeries = await response.json();
  return popularSeries;
}

async function getDetailsMovies(movie_id){
  let response_movie = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}?language=fr-FR`, options);
  let details_movie = await response_movie.json();
  return details_movie;
}

async function getDetailsSeries(serie_id){
  let response_serie = await fetch(`https://api.themoviedb.org/3/tv/${serie_id}?language=fr-FR`, options);
  let details_serie = await response_serie.json();
  return details_serie;
}



$(document).ready(function(){
  /**
   * Affichage des films
   */

  getPopularMovies().then(popularMovies => {
    for (let i = 0; i < 5; i++) {
      const movie = popularMovies.results[i];
      let synopsis = movie.overview;

      if (synopsis.length < 1){
        synopsis = 'Aucune description pour le moment, envoyez nous une suggestion ici 👇<br><button class="suggest">Suggérer</button>';
      }
      
      $('.films_a_laffiche').append(`
        <div class="movie_poster">
          <a href="assets/pages/details.html?movie_id=${movie.id}">
            <div class="infos" data-id="${movie.id}">
              <div class="infos_title">
                <h2 class="titre">${movie.title}</h2>
              </div>
              <div class="infos_category"></div>
              <div class="infos_synopsis">
                <p>${synopsis}</p>
              </div>
            </div>
            <a>
              <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
            </a>
          </a>
        </div>`);

      getDetailsMovies(movie.id);
    }
  });

  getDetailsMovies(movieId).then(detailsMovie => {

    /**
     * Boucle permettant d'afficher la liste des genres d'un film
     */
    const movie_genres = detailsMovie.genres;
    const genreMovie = [];
    for (let i = 0; i < movie_genres.length; i++) {
      genreMovie.push(movie_genres[i].name);
    }

    $('.body_modal').append(`
      <img src="https://image.tmdb.org/t/p/w500${detailsMovie.poster_path}" alt="affiche du film" class="affiche_modal" />
      <div class="description_modal">
        <div class="titre_note_modal">
          <div class="date">
            <p class="date_sortie_modal">Date de sortie:</p>
            <p class="date_id">${detailsMovie.release_date}</p>
          </div>
          <h1 class="titre_modal">${detailsMovie.title}</h1>
          <p class="note_modal">${detailsMovie.vote_average}/10⭐</p>
        </div>
        <div class="genre_infos_duree">
          <p>Synopsis:</p>
          <p class="genre_modal">${genreMovie}</p>
          <h2 class="fs-5 mb-0 pb-0">Synopsis du film :</h2>
          <p class="infos_modal p-1 m-0">${detailsMovie.overview}</p>
          <p class="duree_modal">Langue originale: ${detailsMovie.original_language}</p>
          <a class="addFavorite"><img id="empty_heart" src="../img/empty_heart.png"><img id="full_heart" src="../img/full_heart.png"></a>
        </div>
      </div>
    `);
    addToFavorite(detailsMovie.id, 'movie')
  });
});


  /**
   * Affichage des séries
   */
  getPopularSeries().then(popularSeries => {
    for (let i = 0; i < 5; i++) {
      const serie = popularSeries.results[i];
      let synopsis = serie.overview;

      if (synopsis.length < 1){
        synopsis = 'Aucune description pour le moment, envoyez nous une suggestion ici 👇<br><button class="suggest">Suggérer</button>';
      }
      
      $('.series_a_laffiche').append(`
        <div class="movie_poster">
          <a href="assets/pages/details.html?serie_id=${serie.id}">
            <div class="infos" data-id="${serie.id}">
              <div class="infos_title">
                <h2 class="titre">${serie.name}</h2>
              </div>
              <div class="infos_category"></div>
              <div class="infos_synopsis">
                <p>${synopsis}</p>
              </div>
            </div>
            <a>
              <img src="https://image.tmdb.org/t/p/w500${serie.poster_path}">
            </a>
          </a>
        </div>`);
      getDetailsSeries(serieId);
    }
  });

  getDetailsSeries(serieId).then(detailsSerie => {
    console.log(detailsSerie);

    /**
     * Boucle permettant d'afficher la liste des genres d'une série
     */
    const serie_genres = detailsSerie.genres;
    const genreSerie = [];
    for (let i = 0; i < serie_genres.length; i++) {
      genreSerie.push(serie_genres[i].name);
    }
    
    $('.body_modal').append(`
      <img src="https://image.tmdb.org/t/p/w500${detailsSerie.poster_path}" alt="affiche du film" class="affiche_modal" />
      <div class="description_modal">
        <div class="titre_note_modal">
          <div class="date">
            <p class="date_sortie_modal">Date de sortie:</p>
            <p class="date_id">${detailsSerie.first_air_date}</p>
          </div>
          <h1 class="titre_modal">${detailsSerie.name}</h1>
          <p class="note_modal">${detailsSerie.vote_average}/10⭐</p>
        </div>
        <div class="genre_infos_duree">
          <p>Synopsis:</p>
          <p class="genre_modal">${genreSerie}</p>
          <h2 class="fs-5 mb-0 pb-0">Synopsis du film :</h2>
          <p class="infos_modal p-1 m-0">${detailsSerie.overview}</p>
          <h2 class="fs-5">${detailsSerie.number_of_seasons} saisons</h2>
          <p class="duree_modal">Langue originale: ${detailsSerie.original_language}</p>
          <a class="addFavorite"><img id="empty_heart" src="../img/empty_heart.png"><img id="full_heart" src="../img/full_heart.png"></a>
        </div>
      </div>
    `);
    addToFavorite(detailsSerie.id, 'tv')
  });
    
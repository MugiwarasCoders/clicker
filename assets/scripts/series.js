const key = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzI3OWRlY2RjNzc0NTUyZDdkYzI4NjA5M2FmMTZhMSIsInN1YiI6IjY2MjYyOWRkNjJmMzM1MDE3ZGRhYzg3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vbfXPXqHdE1JUPQXRT-vGJY89rNYBUnjTHd0oe9HCLA"

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+key+''
    }
  }; 

$(document).ready(function(){
    setGenres()
    initializeSelectSize();
    getMovies()
    $(document).on('change', '#sortBySelect', filter);
    $(document).on('change', '#genresSelect', filter);
})


//PAGINATION
$('.page-link').click(function(){
    $('.page-link, .page-item').removeClass('active')
    let id = $(this).attr('id')+''
    let pageId = '&page='+$(this).attr('id')+''
    if (id == 'next'){
        let ids = parseInt($('.page-link:not(#next)').last().attr('id'))
        let nextPage = ids + 1
        pageId = '&page='+ nextPage+''
        //On change tous les id de page
        $('.pagination').find('.page-item').find('.page-link').each(function(){
            id = parseInt($(this).attr('id'))
            newId = id + 4
            $(this).attr('id', newId)
            $(this).text(newId)
        })
    }
    if (id == 'previous'){
        let ids = parseInt($('.page-link:not(#previous)').first().attr('id'))
        if (ids > 1){
            let prevPage = ids - 1
            pageId = '&page='+ prevPage+''
            //On change tous les id de page
            $('.pagination').find('.page-item').find('.page-link').each(function(){
                id = parseInt($(this).attr('id'))
                newId = id - 4
                $(this).attr('id', newId)
                $(this).text(newId)
            })
        }
        else{
            pageId = '&page=1'
        }
    }
    if ($(this).attr('id') == "next" || $(this).attr('id') == "previous"){
        $(this).siblings('.page-item').first().addClass('active')
    }
    else{
        $(this).addClass('active')
    }
    filter(pageId)
})

async function initializeSelectSize(){
    await setGenres()
    $('#sortBySelect, #genresSelect').selectize({
        sortField: 'text', // Trier les options par texte
        dropdownParent: 'body', // Afficher la liste déroulante dans le body
        dropdownCssClass: 'custom-dropdown', // Ajouter une classe personnalisée au dropdown
    });
}

async function setGenres(){
    let response = await fetch('https://api.themoviedb.org/3/genre/tv/list?language=fr', options)
    let genres = await response.json()
    genres.genres.forEach(genre =>{
        $('#genresSelect').append('<option data-value="'+genre.id+'">'+genre.name+'</option>')
        $('.dropdown-menu').append('<li><a class="dropdown-item" href="#">'+genre.name+'</a></li>')
        return genre.name
    })
}

function getGenre(object){
    genreId = $('#genresSelect')[0].selectize.getValue();
    genreName = $('#genresSelect').text()
    if (genreId == ''){
        //ne rien faire
    }
    else{
        let genre = '&with_genres='+genreId+''
        if (object == 'id'){
            return genre
        }
        else{
            return genreName
        }
    }
}

function getSort(){
    let sort = $('#sortBySelect')[0].selectize.getValue();
    let popularity = '&sort_by=popularity.desc'
    let releaseDate = '&sort_by=primary_release_date.desc'
    let rate = '&sort_by=vote_count.desc'
    if (sort == "popularity"){
        return popularity
    }
    else if(sort == "releaseDate"){
        return releaseDate
    }
    else if(sort == "rate"){
        return rate
    }
}

function filter(pageId){
    //Filtre de genres
    let genre = getGenre('id')
    let sort = getSort()
    let fetchAdress = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=fr-FR'
    if (typeof(pageId) === 'string'){
        fetchAdress = fetchAdress+pageId
    }
    if (genre !== undefined){
        fetchAdress = fetchAdress+genre
        $('.big_title').text('Tous les films - '+getGenre(name)+'')
    }
    if (sort !==undefined){
        fetchAdress = fetchAdress+sort
    }
    getMovies(fetchAdress)
}

async function getMovies(fetchAdress){
    if(fetchAdress === undefined){
        fetchAdress = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=fr-FR&page=1&sort_by=popularity.desc'
    }
    $('.movies').empty()
    let response = await fetch(fetchAdress, options)
    let series = await response.json()
    .then(series => {
        series.results.forEach(serie =>{
            console.log(serie)
            let synopsis = serie.overview
            if (synopsis.length < 1){
                synopsis = 'Aucune description pour le moment, envoyez nous une suggestion ici 👇<br><button class="suggest">Suggérer</button>'
            }
            if (serie.poster_path != null){
                $('.movies').append('<a href="details.html?serie_id='+serie.id+'"><div class="movie_poster"><div class="infos"><div class="infos_title"><h2>'+serie.name+'</h2></div><div class="infos_category"></div><div class="infos_synopsis"><p>'+synopsis+'</p></div></div><img src="https://image.tmdb.org/t/p/w500'+serie.poster_path+'"></div></a>')
                $('.addFavorite').click(function(){
                    $(this).addClass('animate__animated animate__rubberBand')
                    addFavoriteSerie(detailsserie.id, 21227686)
                  })
            }
        })
    })
}




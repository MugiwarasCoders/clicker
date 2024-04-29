$(document).ready(function(){
    //-------------
    //-----------------------------HEADER
    //-------------
    $('header').html(`
    <!-- Navigation bar -->
    <nav class="navbar navbar-expand-lg text-bg-danger"> <!-- Navigation bar with the background color in red -->
        <div class="container-fluid">
            <!-- Logo -->
            <a class="navbar-brand" href="/index.html">
                <img src="/assets/img/logo_header.png" alt="logo PopCorn" id="logo_header"/> <!-- PopCorn logo -->
            </a>
            <!-- Toggle button for mobile -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span> <!-- Hamburger icon for the toggle button -->
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!-- Navigation links -->
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <!-- Active link for 'Mes favoris' -->
                    <li class="nav-item">
                        <a class="nav-link active text-bg-danger" aria-current="page" href="/assets/pages/favorites.html">Mes favoris</a>
                    </li>
                    <!-- Link for 'Films' -->
                    <li class="nav-item">
                        <a class="nav-link text-bg-danger" href="/assets/pages/movies.html">Films</a>
                    </li>
                    <!-- Link for 'Séries' -->
                    <li class="nav-item">
                        <a class="nav-link text-bg-danger" href="/assets/pages/series.html">Séries</a>
                    </li>
                    <!-- Dropdown menu for 'Genres' -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-bg-danger" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Genres</a>
                        <ul class="dropdown-menu">
                            <!-- Dropdown items to be added dynamically -->
                        </ul>
                    </li>
                </ul>
                <!-- Search form -->
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-light bg-body-white" type="submit">Search</button> <!-- Search button -->
                </form>
            </div>
        </div>
    </nav>`)
})
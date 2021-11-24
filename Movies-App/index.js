const apiUrl = "https://api.themoviedb.org/3/discover/movie/?sort_by=popularity.desc&api_key=e71af2f796069a9633524317d045c00b&page=1"
const imgPath = "https://image.tmdb.org/t/p/w400/"
const searchUrl = "https://api.themoviedb.org/3/search/movie?api_key=e71af2f796069a9633524317d045c00b&language=en-US&query="
const searchQuery = document.getElementById("search")
const form = document.getElementById("form")
const main = document.getElementById("main")
const rating = document.querySelector('div.movieInfo>span')



async function getMovies(url) {
    const resp = await fetch(url)
    const respData = await resp.json()

    showMovies(respData)


}


showMovies = (respData) => {


    respData.results.forEach(movie => {

         

        const movieEl = document.createElement("div")
        movieEl.classList.add("movie")
        movieEl.innerHTML=`
            <img  src ="${imgPath}${movie.poster_path}" alt="${movie.title}"/>
            <div class="movieInfo">
            ${movie.title}
            <span class="${getRating(movie)}" >
            ${movie.vote_average}
            </span>

            </div>
            <div class="overview"> ${movie.overview}
            </div>

        `
        
        main.appendChild(movieEl)

    });
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    main.innerHTML = "";
    getMovies(searchUrl + searchQuery.value)

})

function getRating(movie){
    if (movie.vote_average<8.0){
        return "red"
    }
    else return "green"
}


getMovies(apiUrl)

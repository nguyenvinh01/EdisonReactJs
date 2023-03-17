let display = document.querySelector("#movies")
let movie =[]
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const API_KEY = "1cf50e6248dc270629e802686245c2c8"
function getMovie(params) {
    axios.get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`)
    .then((res)=>{
        movie = res.data.results
        console.log(movie.results);
        render()
    })
}
getMovie()
function render(){
    movie.forEach(m=>{
        div = document.createElement("div")
        li = document.createElement("img")
        div.classList = "col-4 col-lg-3 col-xl-2 p-1"
        poster = IMG_URL + m.poster_path
        li.src = poster
        li.classList = "img-fluid"
        div.appendChild(li)
        display.appendChild(div)
    })
}
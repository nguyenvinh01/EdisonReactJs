const form = document.querySelector("form")
const api_key = "af3f2aa600cf9a70f578b920967cc918"
let weathers = []
form.addEventListener('submit',function(event){
    event.preventDefault()
    let value = document.querySelector("input").value
    getWeather(value)
})
function getWeather(value){
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${api_key}&units=metric`).then((res)=>{
        weathers = res.data;
        render()
    })
}
function render(){
    let display = document.querySelector(".ajax-section .cities")

    const li = document.createElement("li");
    li.classList.add("city");
    const weather = 
    `
        <h2 class="city-name" data-name="${weathers.name},${weathers.sys.country}">
            <span>${weathers.name}</span>
            <sup>${weathers.sys.country}</sup>
        </h2>
        <div class="city-temp">${weathers.main.temp.toFixed(0)}<sup>°C</sup></div>
        <figure>
            <img class="city-icon" src="http://openweathermap.org/img/w/${weathers.weather[0].icon}.png" alt=${weathers.weather[0].main}>
            <figcaption>${weathers.weather[0].description}</figcaption>
        </figure>
    `
    li.innerHTML = weather
    display.appendChild(li) 
}
const api = "https://pokeapi.co/api/v2/pokemon"
const form = document.querySelector("form")
let list = document.querySelector("ul")
let type = document.querySelector("#type")
let pokemon = []
let pokemonDetails = []
let pokemonDetail = []
let pokemonId = document.querySelector("button")

form.addEventListener('click',function(event){
    event.preventDefault()
    getPokemons()
})
console.log(pokemonDetails);
function getPokemons(){
    axios.get(api)
    .then(res=>{
        pokemon = res.data.results;
        pokemonDetails = pokemon.map(p=>axios.get(p.url))
        axios.all(pokemonDetails).then((res)=>{
            pokemonDetail = res.map(r=> r.data)
            render()
        })
    })
}
function render(){
    let po =""
    pokemonDetail.forEach(p=>{
        ty = p.types.map(t => value = `'${t.type.name}'`)
        po += 
            `
            <button class="btn border-1 border-dark my-1" onclick="renderPokemon(${p.id-1},[${ty}])">${p.id}. ${p.name}</button><br>
            `
        })
        list.innerHTML = po
}
function renderPokemon(id,types){
    let pokemonImg = document.querySelector("img")
    let divType = ""
    types.forEach(t => {
        let span = document.createElement("span")
        span.innerHTML = t
        divType +=`
        <span class="mx-3 px-2 ${t} text-white rounded-1" style="border: 1px solid #000;">${t}</span>
        `
    })
    pokemonImg.src = pokemonDetail[id].sprites.front_default
    type.innerHTML = divType
}
getPokemons()


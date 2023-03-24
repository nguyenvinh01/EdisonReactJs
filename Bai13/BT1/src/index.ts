import axios from "axios";

const api = "https://pokeapi.co/api/v2/pokemon/"

class Pokemon{
    name:string
    types:string[]
    constructor(name:string, types:string[]) {
        this.name = name
        this.types = types
    }
}
const getData = async ()=>{
    try {
        let listPokemon = await axios.get("https://pokeapi.co/api/v2/pokemon/")
        return listPokemon.data.results;
    } catch (error) {
        console.log(error);
    }
}
const getSelectedPokemon = async (name :string): Promise<Pokemon>=>{
    return new Promise((resolve,reject)=>{
            axios.get(api+name).then(res=>{
                let pokemonDetail = res.data
                let types = pokemonDetail.types.map((t:any)=>{
                    return t.type.name
                })
                const pokemon:Pokemon ={
                    name:pokemonDetail.name,
                    types: types
                }
                resolve(pokemon)
            }).catch((error)=> reject(error))
    })
    // try {
    //     let pokemonDetail = await axios.get(api+name)
    //     let { data } = pokemonDetail
    //     let types = data.types.map((t:any)=>{
    //         return t.type.name
    //     })
    //     const pokemon: Pokemon = {
    //         name: data.name,
    //         types:types
    //     }   
    //     return pokemon
    // } catch (error) {
    //     console.log(error);
    // }
}
const displayPokemon =async (name: string) => {
    try {
        let p = await getSelectedPokemon(name)
        console.log(`Name: ${p.name} - Type: ${p.types.join(", ")}`)

    } catch (error) {
        console.log(error);
    } 
}
console.log(getData().then(p=> console.log(p)));

displayPokemon('bulbasaur');





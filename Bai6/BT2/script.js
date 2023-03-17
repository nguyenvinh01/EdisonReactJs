const api = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
let display = document.querySelector("#show")
let listFood = []
function getFood() {
    axios.get(api).then((res)=>{
        listFood = res.data.meals
        render()
    })
}
function render() {
    let foodElement = ""
    listFood.forEach((f)=>{
        foodElement+=
        `
        <div class="my-3 row border-bottom border-secondary pb-3">
            <div id="img-food">
                <img src="${f.strMealThumb}" alt="" style = " width: 7rem" class="img-fluid col-3">

                <span class="mx-4">${f.strMeal}</span>
            </div>
        </div>
        `
    })
    display.innerHTML += foodElement
}
getFood()
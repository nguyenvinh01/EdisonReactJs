
let employees = []
const tbodyElemnt = document.querySelector("tbody")

function getEmployee(){
    axios.get('https://jsonplaceholder.typicode.com/users').then(function(res){
        employees = res.data
        render()
    })
}
getEmployee()

function render(){
    const trElement = employees.map(function(e){
        return `
        <tr>
        <td>${e.name}</td>
        <td>${e.username}</td>
        <td>${e.email}</td>
    </tr>
        `
    })
    tbodyElemnt.innerHTML = trElement.join("")
}
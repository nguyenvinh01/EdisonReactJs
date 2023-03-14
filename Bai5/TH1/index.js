
const todos =[]
const todoList = document.querySelector("ul")
let todoIndex =null;
const form = document.querySelector("form")
form.addEventListener('submit',function(event){
    event.preventDefault()
    const input = document.querySelector("input")
    const value = input.value.trim()
    if(!value) 
    {
        alert("Chưa nhập nội dung")
        return
    }
    if(todoIndex==null){
        todos.push(input.value)
    }
    else{
        todos[todoIndex] = input.value
    }
    input.value=""

    let btnSubmit = document.querySelector('button[type="submit"]')
    btnSubmit.textContent = "Add"
    todoIndex = null;
    render()
})
function handleDelete(index){
    todos.splice(index,1);
    render()
}
function render(){
    const todoElement = todos.map(function(todo){
        return `<li>
        <span>${todo}</span>
        <button id ="bEdit">Edit</button>
        <button id ="bDelete">Delete</button>
        </li>`
    })
    todoList.innerHTML = todoElement.join("")

    const deleteButtons = document.querySelectorAll("#bDelete")

    deleteButtons.forEach((deleteButton,index)=>{
        deleteButton.addEventListener('click',()=>{
            handleDelete(index)
        })
    })

    const editButtons = document.querySelectorAll("#bEdit")
    editButtons.forEach((editButton,index)=>{
        editButton.addEventListener('click',()=>{
            handleEdit(index)
        })
    })
}

function handleEdit(index){
    const input = document.querySelector("input")
    console.log(todos[index]);
    input.value = todos[index]
    let btnSubmit = document.querySelector('button[type="submit"]')
    btnSubmit.textContent="Edit"
    todoIndex = index
    render()
}
function initialApp(){
    render()

}

console.log(todos);
initialApp()

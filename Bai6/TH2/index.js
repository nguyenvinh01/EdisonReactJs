const todoList = document.querySelector("ul")
let todos = []  
let page = 1;
let todoIndex = null
const btn = document.querySelector('button[type="submit"]')
const input = document.querySelector("input")

function getTodos(){
    axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=10&_page=${page}`).then(function(todo){
        todos = todo.data
        render()
    })
}
function handleNext(){
    page = page+1;
    getTodos()
}

function handleBack(){
    if(page == 1) return;
    page = page-1;
    getTodos()

}
function render(){
    const todosList = todos.map(function(todo){
        return `
        <li>
        <span>${todo.title}</span>
        <button id ="bEdit" value = "${todo.id}" onclick="getItem(${todo.id})">Edit</button>
        <button id ="bDelete" value = "${todo.id}" onclick="deleteTodo(${todo.id})">Delete</button>
        </li>
        `
    })
    todoList.innerHTML = todosList.join("")

}
function addTodo(todo){
    const value = input.value
    if(!(value.trim())){
        alert("assd")
        return
    } 
    axios.post("https://jsonplaceholder.typicode.com/todos",todo).then((res)=>{
        if(res.data) {
            getTodos();
        }
    })
}

function deleteTodo(id){
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res)=>{
        if(res.data) {
            getTodos();
        }
    })
}
function getItem(id) {
    axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`).then(function(todo){
        todos = todo.data
        console.log(todos);
        input.value = todos.title
        btn.innerHTML = "Edit"
        todoIndex = todos.id;
    })
}
function editTodo(id,value){
    axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`,{'title':value}).then((res)=>{
        if(res.data) {
            getTodos();
        }
    })
}
function hanldeSubmitForm(event){
    event.preventDefault()
    const value = input.value.trim()
    if(!value) {
        alert("Nhập lại")
        return
    }

    if(todoIndex == null){
        addTodo({
            userId:1,
            title:value,
            completed:false
        })
    }
    else{
        editTodo(todoIndex,value)
    }
    input.value =""
    todoIndex = null;
    btn.innerHTML ="Add"
}
getTodos()
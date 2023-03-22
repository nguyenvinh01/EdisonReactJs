class ToDo{
    date:Date
    works:string[]
    constructor(date:Date, works:string[]) {
        this.date = date
        this.works = works
    }
}
let todo = new ToDo(new Date("2022-12-3"),["job1","job2"])
// let todo1 = new ToDo(new Date("2022-12-2"),["job3","job4"])
let todo1 = new ToDo(new Date("2022-12-3"),["job1","job2"])
let todo2 = new ToDo(new Date("2022-12-1"),["job6","job5"])

class TodoList{
    todoList:ToDo[]
    constructor(){
        this.todoList =[]
    }
    addTodo(todo:ToDo){
        if(this.checkDate(todo.date) === false){
            this.todoList.push(todo)
        }
        else{
            console.log("Trùng ngày");
        }
    }
    removeTodo(date:Date){
        this.todoList.map((e,index)=>{
            if(e.date.getTime() == date.getTime()) this.todoList.splice(index,1)
        })
    }
    checkDate(date:Date) {
        return this.todoList.some((t)=> date.getTime()===t.date.getTime())
    }
    getTodo(){
        this.todoList.map((t)=>{
            console.log(`Date: ${t.date.toLocaleString()} - Works:${t.works.join(",")}`);
        })
    }
}
let todoList = new TodoList()

todoList.addTodo(todo)
todoList.getTodo()
todoList.addTodo(todo2)
todoList.getTodo()
todoList.addTodo(todo1)
todoList.removeTodo(new Date("2022-12-3"))
todoList.getTodo()

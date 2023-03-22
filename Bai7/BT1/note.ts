class Note{
    title:string
    content:string
    constructor(title:string, content:string){
        this.title = title
        this.content = content
    }
    addNote(note:Note){
        this.title = note.title
        this.content = note.content
    }
    getNote(){
        return `Title: ${this.title}, Content: ${this.content}`
    }
}
let note = new Note('title1','content1')
let note1 = new Note('title2','content2')
console.log(note.getNote());

class NoteList{
    note:Note[]
    constructor(){
        this.note = []
    }
    addNoteToList(note:Note){
        this.note.push(note)
    }
    getNoteList(){
        console.log(this.note);
    }
}
let noteList = new NoteList()
noteList.addNoteToList(note)
noteList.addNoteToList(note1)

noteList.getNoteList()

import logo from './logo.svg';
import './App.css';

function App() {
  const isUserLoggedIn = true
  const message = "Hello User"
  const todo =['Learn ReactJs', 'Learn NodeJs', 'Learn ReactJs']
  const todoNumber =[1,2,3,4,5,6]
  return (
    <div className="App">
      <h1>{isUserLoggedIn ? message : "Login Now"} </h1>
      {todo.map((t,index)=>{
        return <h1 key={index}>{t}</h1>
      })}
      {todoNumber.map((t,index)=>{
        return <span key={index}>{t}   </span>
      })}
    </div>
  );
}

export default App;

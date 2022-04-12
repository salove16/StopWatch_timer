
import { useEffect, useState} from 'react';
import './App.css';

function App() {
const [todos,settodos]=useState([])
const [age ,setage]=useState(10)


useEffect(()=>{
fetch("http://localhost:8080/posts")
.then((d)=>d.json())
.then((data)=>{
  settodos(data)
  console.log(todos)
})
},[age])


  return (
    <div className="App">
 {todos.map((todo)=>(
   <div>{todo.id}.{todo.title}</div>
 ))}
 <div>{age}</div>
 <button onClick={()=>{
   setage(age+1)
 }}>add</button>
    </div>
  );
}

export default App;

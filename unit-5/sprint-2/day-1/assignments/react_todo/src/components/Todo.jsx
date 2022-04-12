import { nanoid } from "nanoid"
import { useState } from "react"
import { ShowCompletedTodo } from "./TodoCompleted"
import { TodoInput } from "./TodoInput"
import { TodoItem } from "./TodoItem"



export const Todo=()=>{
const [todos,setTodo]=useState([])

const getData=(text)=>{
console.log(text)
const payload={
    items:text,
    status:false,
    id:nanoid(5)
}
    setTodo([...todos,payload])


}

const handleId=(id)=>{
  setTodo( todos.map((e)=>(
         e.id===id ? {...e, status: !e.status}:e
          )))

   
}


return (
    <div>
<TodoInput getData={getData}/>
<div className="todo">
{
    todos.map(e=>(
<TodoItem handleId={handleId} text={e}/>
    ))
}
</div>
<button onClick={()=>{
    document.querySelector(".show").classList.toggle("none")
}}>Show Completed Todo</button>
<div className="none show">
{
    todos.map(e=>(
<ShowCompletedTodo  handleId={handleId} text={e}/>
    ))
    
}

</div>
    </div>

    
)


}
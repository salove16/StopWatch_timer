import { useState } from "react"
import { TodoInput } from "./TodoInput"
import { TodoItem } from "./TodoItem";
import { nanoid } from 'nanoid'


function Todo(){
const [todo, setTodo]=useState([])

    const getData = (Todo)=>{
        
        const payload={
            title:Todo,
            status:false,
            id:nanoid(5)

        }
        setTodo([...todo,payload])
        console.log(todo)
    };

const handleStatus=(id)=>{
    console.log(id)
    setTodo(
        todo.map((e)=>(
            e.id===id ? {...e, status: !e.status}:e
        ))
    )
}

    return (<div  >
        <TodoInput getData={getData}/>
        {todo.map((e) =>(
            <div className="display"><TodoItem handleStatus={handleStatus} todo={e}></TodoItem></div>
         
        ))}
    </div>
    )
}

export {Todo}
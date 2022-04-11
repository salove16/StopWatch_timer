import { useState } from "react"
import { TodoInput } from "./TodoInput"



function Todo(){
const [todoList, setTodoList]=useState([])

    const getData = (todo)=>{
        console.log(todo)
        setTodoList([...todoList,todo])
    };
    return <div>
        <TodoInput getData={getData}/>
        {todoList.map((e) =>(
         <div>{e}</div>
        ))}
    </div>
}export {Todo}
export const TodoItem=({todo,handleStatus})=>{
    
   
            return (
                <div className="item">
            {todo.title} 
            <button
             className={todo.status=== false ? "blue":"green"} 
             onClick = {()=>{
                 handleStatus(todo.id)
             }}></button>
        </div>
            )
    
}
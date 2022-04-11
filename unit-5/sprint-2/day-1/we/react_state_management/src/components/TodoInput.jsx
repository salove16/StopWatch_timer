import { useState } from "react"


export const TodoInput=({getData})=>{
const [text, setText]= useState("");
    return <div>
<input type="text"  placeholder="Enter todo" onChange={(e)=>{
    setText(e.target.value);
}} />
<button onClick={()=>{
    getData(text)
}}>Add todo</button>

    </div>

}
// import { useState } from "react"


export const TodoItem=({text,handleId})=>{
    // const [check, setCheck]=useState([])
    if(text.status===false)
    {
        console.log(text);
        return (
            <div id="checkinput">
         <div>
         <input type="checkbox" value="delete" onClick={()=>{
               handleId(text.id)
           }}/>
                {text.items}
         </div>
                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828970.png" alt="" />
            </div>
        )
    }

   return <></>
   
}
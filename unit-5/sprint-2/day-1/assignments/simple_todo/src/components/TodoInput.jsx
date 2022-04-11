import { useState } from "react"


export const TodoInput=({getData})=>{
const [text, setText]= useState("");
    return <div className="big">
        <div>
        <input   type="text"  placeholder="Write Something" onChange={(e)=>{
    setText(e.target.value);
}} />
        </div>
<div>
<button className="btn1" onClick={()=>{
  if(text.length!==0)
  {
    getData(text)
  }else{
      return
  }
    
}}>+</button>
</div>


    </div>

}
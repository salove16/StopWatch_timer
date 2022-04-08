import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
    inkpens:20,
  });
  const books= inv.books
  const notebooks=inv.notebooks
  const pens=inv.pens
  const inkpens=inv.inkpens
    // Create add and remove functions here that changes the
    // state.
    
const handleChange=(value,title)=>{
  if(title==="book"){
    if(books<=0&&value===-1)
    {
      return 
    }else{
      setInv(prevState =>{
        return {...prevState,books:prevState.books+value}
      })
    }
    
  }else if(title==="notebook")
  {
    if(notebooks<=0&&value===-1)
    {
      return 
    }else{
      setInv(prevState =>{
        return {...prevState,notebooks:prevState.notebooks+value}
      })
    }
    
  }else if(title==="pen")
  {
    if(pens<=0&&value===-1)
    {
      return 
    }else{
      setInv(prevState =>{
        return {...prevState,pens:prevState.pens+value}
      })
    }
    
   
  }else if(title==="inkpen")
  {
    if(inkpens<=0&&value===-1)
    {
      return 
    }else{
      setInv(prevState =>{
        return {...prevState,inkpens:prevState.inkpens+value}
      })
    }
   
  }
 
  console.log(inv)
}
let sum=books+notebooks+pens+inkpens



  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button className="circlularButton" onClick={()=>{
          handleChange(1,"book")
        }}>+</button>
        <button className="circlularButton"  onClick={()=>{
          handleChange(-1,"book")
        }}>-</button>
        <span>{books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton" onClick={()=>{
          handleChange(1,"notebook")
        }} >+</button>
        <button className="circlularButton"  onClick={()=>{
          handleChange(-1,"notebook")
        }}>-</button>
        <span>{notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton" onClick={()=>{
          handleChange(1,"pen")
        }} >+</button>
        <button className="circlularButton" onClick={()=>{
          handleChange(-1,"pen")
        }} >-</button>
        <span>{pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button className="circlularButton" onClick={()=>{
          handleChange(1,"inkpen")
        }} >+</button>
        <button className="circlularButton" onClick={()=>{
          handleChange(-1,"inkpen")
        }} >-</button>
        <span>{inkpens}</span>
      </div>
            {/*calculate total and show it*/}
      total: {sum}
    </div>
  );
};

// export {Inventory}

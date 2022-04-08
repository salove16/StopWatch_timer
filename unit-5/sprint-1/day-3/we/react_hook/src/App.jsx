import logo from "./logo.svg";
import { useState } from "react";

import "./App.css";
// import {Catogery} from "./componenets/catogery"
// function App() {
// const navbar=[{
//   image:"https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
//   title:"Top Offers",
// },
// {
//   image:"https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
//   title:"Grocery",
// },
// {
//   image:"https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100",
//   title:"Mobile",
// }
// ,
// {
//   image:"https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100",
//   title:"Fashion",
// },
// {
//   image:"https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
//   title:"Electronics",
// },
// {
//   image:"https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100",
//   title:"Home",
// },
// {
//   image:"https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100",
//   title:"Appliance",
// },
// {
//   image:"https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100",
//   title:"Travel",
// },
// {
//   image:"https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100",
//   title:"Beauty,Toys,More",
// }]
//   return (
//     <div className="nav">
//     {navbar.map((el)=>(
//        <Catogery image={el.image} label={el.title} />
//      ))}
//     </div>
//   );
// }
function App() {
  const [counter, setcount] = useState(0);
 
  const handleChange = (value) => {
    setcount(counter + value);
  };

  return (
    <div className="App">
      <h3>Counter:{counter}</h3>
      <button
        onClick={() => {
          handleChange(1);
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          handleChange(-1);
        }}
      >
        Reduce
      </button>
      <div>number is {counter % 2 === 0 ? "even" : "odd"}</div>
    </div>
  );
}
export default App;

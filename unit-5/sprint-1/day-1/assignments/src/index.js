import { appendTable } from "./todo.js";
import pic from "./image/PinClipart.com_thug-clipart_980890.png"
import "./index.css";


let tBody = document.querySelector("tbody");
const submitData = (event) => {
  event.preventDefault();
  let name = document.getElementById("name").value;
  console.log(name);
  let age = document.getElementById("age").value;
  console.log(age);
  let gender = document.getElementById("gender").value;
  console.log(gender);
  appendTable(name, age, gender, tBody);
};

let image=document.getElementById("icon")
image.src=pic

document.getElementById("todo").addEventListener("submit", submitData);
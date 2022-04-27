

import {store,add_todo} from "./Redux/redux"

let table=document.getElementById("table")

let addDate=document.getElementById("add")
addDate.addEventListener("click",()=>{
  let name=document.getElementById("name").value
  let qnt=document.getElementById("quantity").value
// console.log(name,qnt)

    store.dispatch(add_todo(name,qnt))
    // displayData(store.getState())
    // table.textContent=""
})

// let data = store.getState()
// console.log("after dispatch",data.todos)

function displayData(data){

//   table.textContent=""
//   data.todos.map((e,index)=>{

//     let tr=document.createElement("tr")

//     let td1=document.createElement("td")

//     td1.textContent=index+1
//     let td2=document.createElement("td")
//     td2.textContent=e.name
//     let td3=document.createElement("td")
//  td3.textContent=e.quantity

//     tr.append(td1,td2,td3)
//     table.append(tr)

//   })
// console.log(data.todos)
}

export {displayData}

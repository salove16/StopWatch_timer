import { legacy_createStore as createStore } from "redux";



const ADD_TODO = "ADD_TODO";

const add_todo = (name, value) => {
  return {
    type: ADD_TODO,
    payload: {
      name: name,
      quantity: value,
    },
  };
};


const reducer =(store,action)=>{
  // displayData(action)
// console.log(store,new Date());
//  if(==="ADD_TODO")
switch(action.type)
    {
      case ADD_TODO:
        return {...store,todos: [...store.todos,action.payload]}
        default:return store
    }
    
   
}


const insate={
  
todos:[],
   
}


const store=createStore(reducer, insate)


// store.dispatch(add_todo("sdfgh",45))

// console.log("after dispatch",store.subscribe())
// console.log(store.getState())
// displayData(store.getState())


// store.subscribe (()=>{
//   console.log("subscribe" , store.getState())
// })

export {store,add_todo}
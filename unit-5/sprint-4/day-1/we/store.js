import { legacy_createStore as createStore } from "redux";
// action type
const ADD_COUNT="ADD_COUNT"

const ADD_TODO="ADD_TODO"

// action creator
const add_todo=(title)=>{

return {
    type:ADD_TODO,
    payload:{
        title:title,
        status:false
    }
}

}


const reducer =(store,action)=>{
    // if(action.type==="ADD_COUNT")
    // {
    //     return {...store,counter: store.counter + action.payload}
    // }

    // if(action.type==="ADD_TODO")
    // {
    //     return {...store,todos: [...store.todos,action.payload]}
    // }
    // return store

    switch (action.type)
    {
        case ADD_COUNT:
            return {...store,counter: store.counter + action.payload}
   case ADD_TODO :
    return {...store,todos: [...store.todos,action.payload]}
default: 
return store
    }
}


const insate={
    counter:0,
    todos:[],
    theame:"dark"
}


const store=createStore(reducer, insate)
// console.log(store.getState())

store.dispatch({type:ADD_COUNT, payload:1})
// console.log("after dispatch",store.getState())

store.dispatch(add_todo("learn redux"))

console.log("after dispatch",store.getState())

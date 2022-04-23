
import axios from "axios"
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";



export const UserDetails=()=>{

    const {id}=useParams()
    
    const [users, setUsers] = useState([])

    useEffect(() => {
      axios.get(`https://reqres.in/api/users/${id}`).then(({ data }) => {
        setUsers(data.data);
      });
    }, []);
   
    // {users.id?  console.log(1):(!users.email?console.log(2):console.log(3))}
//     var [a,b]=[2,3]
// !a==2?console.log(1):b==3?console.log(2):console.log(3)
;

    return(
        <div key={id}>
       {users.id}
       {users.first_name} {users.last_name}
       {users.email}
       <img src={users.avatar} alt="" />
       
     

        </div>
    )
}


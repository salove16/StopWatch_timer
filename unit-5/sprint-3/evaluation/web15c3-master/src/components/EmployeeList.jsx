
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./EmployeeList.css"
export const EmployeeList = () => {

  const [users,SetUser]=useState([])
 
  useEffect(()=>{ 
axios.get(`http://localhost:8080/employee`)
.then(({data})=>{
   SetUser(data)

})
  },[])
//  console.log(users.length)
  return (
    <div className="list_container">{
users.map((e)=>(
<Link to={`/users/${e.id}`}>
<div className="employee_card">
        <img src={e.image} className="employee_image" />
        <br />
        <span className="employee_name">{e.employee_name}</span>
        <span className="employee_title">{e.title}</span>
      </div>
</Link>
))
      
    }
    
    </div>
  );
};

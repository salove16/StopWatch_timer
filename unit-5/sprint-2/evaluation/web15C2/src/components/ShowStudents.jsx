import { useEffect, useState } from "react";

import axios from "axios"

export const ShowStudents = () => {

const [studentData,setstudentData]=useState([])

const [sortby,setSortby]=useState(null)
const [order,setOrder]=useState("asc")

// const getData=async()=>{
// const data=await fetch("http://localhost:8080/students")
// .then((e)=>e.json)


// 
// }


const url="http://localhost:8080/students"

useEffect(()=>{
axios.get(url)
.then(res=>{
  setstudentData(res.data)
})


},[order])

const handleChange=(e)=>{

  const [name,value]=e.target

  setSortby({...sortby,[name]:value})

}

const sortbyChange=(e)=>{
  const [name,value]=e.target

  setOrder({...order,[name]:value})
}



const sorting=()=>{
// console.log(col.target.value)
  if(order==="asc"){
  const sorted=[...studentData].sort((a,b)=>
  a[sortby].toLowerCase() >b[sortby].toLowerCase() ? 1:-1)
  setstudentData(sorted)
}
else if(order==="desc")
{
  const sorted=[...studentData].sort((a,b)=>
  a[sortby].toLowerCase() < b[sortby].toLowerCase() ? 1:-1)
  setstudentData(sorted)
}

}
// console.log(order,sortby)




if(studentData)
{
  return (
    <div>
      <div className="controls">
        <div>
          Sort By:{" "}
          <select
            // select dropdown needs both value and onChange
            className="sortby"
            name="sortby"
            onChange={handleChange}
          >
            <option value="first_name">First Name</option>
            <option value="gender">Gender</option>
            <option value="age">Age</option>
            <option value="tenth_score">10th Score</option>
            <option value="twelth_score">12th Score</option>
          </select>
        </div>
        <div>
          Order:
          <select
            // select dropdown needs both value and onChange
            className="sortorder"
            name="sortorder"
            onChange={sortbyChange}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <button className="sort" onClick={sorting}>sort</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
            <th>10th Score</th>
            <th>12th Score</th>
            <th>Branch</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {/* populate all rows like below: */}
   
          {studentData.map((e)=>{
          return( 
             <tr className="row" key={e.id}>
            <td className="first_name">{e.first_name}</td>
            <td className="last_name">{e.last_name}</td>
            <td className="email">{e.email}</td>
            <td className="gender">{e.gender}</td>
            <td className="age">{e.age}</td>
            <td className="tenth_score">{e.tenth_score}</td>
            <td className="twelth_score">{e.twelth_score}</td>
            <td className="preferred_branch">{e.preferred_branch}</td>
          </tr>
          )
          })}
        </tbody>
      </table>
    </div>
  );
}
 return (
   <div></div>
 )
};

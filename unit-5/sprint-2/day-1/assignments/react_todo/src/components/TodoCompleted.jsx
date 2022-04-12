

export const ShowCompletedTodo=({text,handleId})=>{
    if(text.status===true)
    {
        console.log(text);
        // return (
        //     <div id="checkinput">
        //    <input type="checkbox" value="delete" defaultChecked onClick={()=>{
        //        handleId(text.id)
        //    }}/>
        //         {text.items}
        //     </div>
        // )
        return (
            <div id="checkinput">
         <div>
         <input type="checkbox" value="delete" onClick={()=>{
               handleId(text.id)
           }}/>
                {text.items}
         </div>
                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828970.png" alt="" />
            </div>
        )
    }

   return <></>
}
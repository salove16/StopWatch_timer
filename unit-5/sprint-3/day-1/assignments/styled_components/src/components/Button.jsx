
import styled from "styled-components"

const Button=styled.button`
    font-size: inherit;
font-family: inherit;
line-height: inherit;
${(props)=>{
if(props.variant==="primary")
{
    background:" #631616";
    padding:"5px";
    


}else{
    display:"none"
}


}
}
`


export {Button}
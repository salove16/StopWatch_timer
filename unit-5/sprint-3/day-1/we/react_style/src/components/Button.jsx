import styled from "styled-components"

const Button =styled.button`
    border: none;
    border-radius: 4px;
    padding: 10px;
    text-align: center;
    background: ${(props)=>(props.theam==="light" ? "#f6f54d" :"#143f6b")};
    color: ${(props)=>(props.theam==="light" ? "#143f6b" :"#f6f54d")};
    margin: 5px;

    &:hover{
        box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    }
`





export {Button}
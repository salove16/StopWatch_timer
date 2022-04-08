import "./catogery.css"

function Catogery({image,label}){


    return(
<div className="catogery">
    <img src={image} alt="" />
    <b>{label}</b>
</div>
    )
};

export {Catogery}
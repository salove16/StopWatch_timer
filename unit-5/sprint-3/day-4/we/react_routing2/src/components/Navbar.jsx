import {Link} from "react-router-dom"

export const Navbar=()=>{

    return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
    </div>
    )
}
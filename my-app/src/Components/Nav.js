import react from 'react';
import {Link} from 'react-router-dom';

const Nav=()=>{
    return(

        <div className='navbar'>

            <ul>
                <li><Link to={"/"}>home page</Link></li>
                <li><Link to={"/add"}>products</Link></li>
                <li><Link to={"/update"}>update products</Link></li>
                <li><Link to={"/logout"}>logout</Link></li>
                <li><Link to={"/profile"}>profile</Link></li>
                <li><Link to={"/signup"}>singup</Link></li>
                <li><Link to={"/login"}>login</Link></li>
            </ul>
        </div>


    )
}

export default Nav;
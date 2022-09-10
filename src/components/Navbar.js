import React ,{useState} from 'react'

import './Navbar.css'
import {FaUserAlt} from 'react-icons/fa';
import {
    Link
} from "react-router-dom";
import { useDispatch } from 'react-redux';


const Navbar = () => {
    const [Dropdown, setDropdown] = useState(false);
    const dispatch = useDispatch();

    const Dropdowntoggle = () =>{
        setDropdown(!Dropdown)
    }
    const logoclicked  = () =>{
        dispatch({type:'ALL'});
    }

    return (
        <div className="container">

            <nav className="navbar">
            <h1><Link to ="/" id="logo-tag" onClick={logoclicked}>Bloged</Link></h1>
            <a href ="#" onClick={Dropdowntoggle}><FaUserAlt className="user-icon"/></a> 
            </nav>

            { Dropdown && <div className="dropdown-menu">
                <ul>   
                    <li><Link to="/Create" onClick={Dropdowntoggle}>Create Post</Link></li>
                    <li><Link to = "/Mypost" onClick={Dropdowntoggle}>My posts</Link></li>    
                </ul>
            </div>}

        </div> 
    )
}

export default Navbar;

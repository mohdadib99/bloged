import React ,{useState} from 'react'
import './Searchbar.css'
import {FaSearch} from 'react-icons/fa'

const Searchbar = (props) => {
    const [searchValue, setsearchValue] = useState('');

    const searchDataSubmit = (event) =>{
        event.preventDefault();
        event.target.reset();
        if(searchValue !== null){
            props.searchstateupdater(searchValue);
            
        }
    }
    return (
        <form className="example" autoComplete="off" onSubmit={searchDataSubmit}>
            <input type="text" placeholder={props.placehold} onChange={e=>setsearchValue(e.target.value)}/>
            <button type="submit"><FaSearch className="search-icon"/></button>
        </form>
    )
}

export default Searchbar

import {React}from 'react';
import './Categorybutton.css';



const Categorybutton = (props) => {

    const catfetcher = () =>{
        props.catstateupdater(props.data);
    }
    return (
            <div className="category-button" > 
                <button  onClick={catfetcher}>{props.data}</button>  
             </div>            
    );
    
}

export default Categorybutton;

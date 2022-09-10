import React ,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { setuProducts } from '../store/actions/ProductAction';
import Searchbar from '../components/Searchbar'
import Homepostcard from '../components/Homepostcard';
import { Link } from 'react-router-dom';
import Post from '../components/Post';
import {BiArrowBack} from 'react-icons/bi'
import './Mypost.css'

const Mypost = () => {
    const dispatch = useDispatch();

    const [initial, setinitial] = useState(true);
    const [postClick, setpostClick] = useState(false);                //to check if post clicked
    const [postSelected, setpostSelected] = useState({});             // to retrieve data of post clicked

    const postgetter  = (spost) =>{
        
        setpostClick(true);
        setpostSelected(spost);
    }

    const searchstateupdater  = (sdata)=>{
        dispatch({type:"RESET_PRODUCTS"});
        fetchProducts(sdata);
        
    }

    const uproducts = useSelector((state) => state.uProducts.products);
    const fetchProducts = async (sdata) => {
        const response = await axios
        .get("https://spring-bloged.herokuapp.com/api/v1/post/username/"+sdata)
        .catch((err) => {
            console.log("Err: ", err);
        });
        
        if(response.data.length == 0){
            setinitial(false);
        }
        else{
            setinitial(true);
        }
        
        dispatch(setuProducts(response.data));    
    };


    return (
        <div>
            <div className = "search-my">
                <Searchbar  placehold = "Enter Username ..." searchstateupdater = {searchstateupdater}/>
            </div>
            {!postClick && uproducts.map((data) =><Homepostcard className = "mypost-data" postgetter = {postgetter} object = {data} />)}
            {postClick &&<Link href ="" onClick = {() => setpostClick(false)}> <BiArrowBack id ="back" /></Link>}
            {postClick && <Post object={postSelected} />}  
            {!initial && !postClick && <h2 id="no-post">No Post Found</h2>} 
        </div>
    )
}

export default Mypost;

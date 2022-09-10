import React,{ useState , useEffect} from 'react';
import './Home.css'
import { useSelector } from 'react-redux';
import axios from 'axios';
import { setProducts,setCategories,setuProducts } from '../store/actions/ProductAction';
import Homepostcard from '../components/Homepostcard'
import Categorybutton from '../components/Categorybutton'
import Searchbar from '../components/Searchbar'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Post from '../components/Post';
import LoadingScreen from "../components/LoadingScreen";




const Home = () => {

    const [posttype, setposttype] = useState("?");
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();
    const [Loader, setLoader] = useState(true);
    const [Counter, setCounter] = useState(0);
    const [postClick, setpostClick] = useState(false);

    
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios
            .get("https://spring-bloged.herokuapp.com/api/v1/post"+posttype+"page="+Counter)
            .then(setLoader(false))
            .catch((err) => {
                console.log("Err: ", err);
            });

            dispatch(setProducts(response.data));
        };

        fetchProducts();
    }, [posttype,dispatch,Counter,postClick]);

    //all updater functions
    const trendstateupdater =() =>{
        dispatch({type:"RESET_PRODUCTS"});               //to reset old state(for pagination nd post view (all,trending))
        setposttype("/trending?");
        setpostClick(false);
        setCounter(0);
    }

    const allstateupdater =async() =>{
        dispatch({type:"RESET_PRODUCTS"});  
        setposttype("?");
        setpostClick(false); 
        setCounter(0);
    }
    
    const searchstateupdater =(sdata) =>{
        dispatch({type:"RESET_PRODUCTS"});  
        setposttype("/search?title="+sdata+"&");
        setpostClick(false);
        setCounter(0);
    }

    const catstateupdater = (cdata) =>{
        dispatch({type:"RESET_PRODUCTS"}); 
        setposttype("/"+cdata+"?");
        setpostClick(false);
        setCounter(0);
    }

    //load more functionality
    

    const loadmorefun = (e)=>{
        e.preventDefault();
        setCounter(Counter+1);
        

    }

    //postclicked display
                    //to check if post clicked
    const [postSelected, setpostSelected] = useState({});             // to retrieve data of post clicked

    const postgetter  = (spost) =>{
        setpostClick(true);
        setpostSelected(spost);
    }
    let cname = "left-main"                               //altering css on post click 
    if(postClick){
        cname+="-border";
    }

    
    //getcategories
    const allCats = useSelector((state) => state.allCategories.categories);

    
    useEffect(() => {
        const catgetter = async() =>{
            const cats = [];
            const catresponse = await axios
            .get("https://spring-bloged.herokuapp.com/api/v1/category")
            .catch((err) => {
                console.log("Err: ", err);
            });
            catresponse.data.map((data) => {
                return cats.push(data);
            }); 
            dispatch(setCategories(cats));
        }

        dispatch(setuProducts([]));                //set the products in mypost to empty on home page load(in case of going back it will load fresh w nodata)
        catgetter();   
    }, [dispatch]);
    
    
    return (
        <div>
            <div className="homeswitcher">
                    <div className="all-trending">
                        <Link to="/" onClick={allstateupdater}>All</Link>
                        <a href="#" onClick={trendstateupdater}>TRENDING</a>
                    </div>
                    <Searchbar placehold = "Search..." searchstateupdater = {searchstateupdater} />
            </div>
            
            <hr className="fader-line"/> 

            <div className="home-separator">
                {Loader ? <div className={cname}> <LoadingScreen id="loader"/> </div>  :
                    <div className={cname}>
                        {!postClick &&  products.map((data) => <Homepostcard key = {data.id} postgetter = {postgetter} object ={data}/>)}
                        {postClick && <Post object={postSelected} />}
                        {!postClick && products.length!==0 && <a href="#" role="button" id="load-more" onClick={loadmorefun}> Load more </a>}
                        { !postClick &&products.length ==0 && <h2 id="no-post">No Post Found</h2>}
                    </div> 
                }
                {!postClick && <div className="right-main">
                    { allCats.map((data) =><Categorybutton key = {data.id} data={data.name} catstateupdater = {catstateupdater}/>) }
                </div>}
                
            </div>
        </div>
    )
}

export default Home

import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './Createpost.css';
import { useSelector } from 'react-redux';
import {setCategories,setuProducts } from '../store/actions/ProductAction';
import { useDispatch } from 'react-redux';


const Createpost = () => {
    const dispatch = useDispatch();

    

    useEffect(() => {
        const catgetter = async() =>{
            const cats = [];
            const catresponse = await axios
            .get("https://spring-bloged.herokuapp.com/api/v1/category")
            .catch((err) => {
                console.log("Err: ", err);
            });
            catresponse.data.forEach((data) => {
               cats.push(data);
            }); 
            dispatch(setCategories(cats));
        }
        dispatch(setuProducts([]));                //set the products in mypost to empty on home page load(in case of going back it will load fresh w nodata)
        catgetter();   
    }, [dispatch]);

    const Allcategories= useSelector((state) => state.allCategories.categories);
    window.addEventListener('keydown',function(e){if(e.keyIdentifier==='U+000A'||e.keyIdentifier==='Enter'||e.keyCode===13){if(e.target.nodeName==='INPUT'&&e.target.type==='text'){e.preventDefault();return false;}}},true);
    
    const [user, setuser] = useState('');
    const [title, settitle] = useState('');
    const [desc, setdesc] = useState('');
    const [image, setimage] = useState('');
    const [catname ,setcatname] = useState('');
    const [catid ,setcatid] = useState(0);
    
    

    const postchecker =(e) =>{

        const Getpostdata ={
            username:user,
            title:title,
            body:desc,
            img:image,
            category:{
                id:catid,
                name:catname
            }
        };


        e.preventDefault();
        if(Getpostdata.category && Getpostdata.username && Getpostdata.title && Getpostdata.body){
    
            e.target.reset();
            axios.post("https://spring-bloged.herokuapp.com/api/v1/post",Getpostdata)
                .then((response) => console.log(response));
            
            setuser('');
            settitle('');
            setdesc('');
            setimage('');
            setcatname('');
        }
    }

    // const disableenter =(event) =>{
    //     if (event.target.key === 'Enter') {
    //         event.preventDefault();
    //       }
    // }
    return (
        <div>
            <form className="create-form" onSubmit={postchecker}>
                <div className="create-input-container">
                    <label>Username </label>
                    <input type="text" placeholder="Enter Username"  onChange={e=> setuser(e.target.value)} value={user}></input>
                </div>
                <div className="create-input-container">
                    <label>Title </label>
                    <input type="text" placeholder="Enter Title" onChange={e=>settitle(e.target.value)} value={title}></input>
                </div>
                <div className="create-input-container-text">
                    <label>Description </label>
                    <textarea type="textarea" placeholder="Enter Description" onChange={e=>setdesc(e.target.value)} value={desc}></textarea>
                </div>
                <div className="create-input-container">
                    <label>Image </label>
                    <input type="text" placeholder="Enter Image link" onChange={e=>setimage(e.target.value)} value={image}></input>
                </div>
                <div className="create-input-container">
                    <label>Category </label>

                    <select  onChange={e =>setcatname(e.target.value)} value={catname}>
                        <option selected></option>
                        {Allcategories.map((category) => <option key = {category.id} name={category.id} onClick = {() =>setcatid(category.id)} >{category.name}</option>)}   
                    </select>
                </div>
                <button type="submit">SUBMIT</button>
            </form>
        </div>  
    )
}

export default Createpost;

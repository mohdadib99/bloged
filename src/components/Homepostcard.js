import React from 'react'
import './Homepostcard.css'

const Homepostcard = (props) => {
    const postfetcher =() =>{
        props.postgetter(props.object);
    }
    return (
        <div className="card" onClick={postfetcher}>
            <div className="post-details">
                    <div className="post-header">
                        <div className="postheader-text">
                            <h3>{props.object.username}</h3>
                            <h1>{props.object.title.substring(0, 15)}</h1>
                        </div>
                        <img id = "post-image" src={props.object.img} alt ="loading..."/>   
                    </div>
                    <h2>{props.object.body.substring(0, 50)} ...</h2>
                    <p>{(new Date(props.object.createdAt)).toUTCString()}</p>
                </div>
        </div>
    )
}

export default Homepostcard

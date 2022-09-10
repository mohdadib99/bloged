import React from 'react'
import './Post.css'

const Post = (props) => {
    
    return (
        <div>
            <div className="only-card">
                <div className="only-post-details">
                    <div className="only-postheader">
                        <div className="only-postheader-text">
                            <h3>{props.object.username}</h3>
                            <p>{(new Date(props.object.createdAt)).toUTCString()}</p>
                            <div className="only-post-title">
                                <h1>{props.object.title}</h1>
                            </div>
                        </div>
                        <img id = "only-post-image" src={props.object.img} alt="loading..."/>   
                    </div>
                    <h2>{props.object.body}</h2>
                    
                </div>
                
            </div>
        </div>
    )
}

export default Post

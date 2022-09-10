import Loader from "react-loader-spinner";

import React from 'react';
import './LoadingScreen.css'

const LoadingScreen = () => {
   
    return (
        <div className="loader">
            <Loader 
            type="ThreeDots"
            color="#e9e9e9"
            height={100}
            width={100}
            />
        </div>
    )
}

export default LoadingScreen;

import React from 'react'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Createpost from './Pages/Createpost';
import Mypost from './Pages/Mypost';
import { 
    BrowserRouter as Router,
    Switch,
    Route, 
} from "react-router-dom";


const Main = () => {
    return (
        <div>
            <Router>
            <Navbar/> 
            <Switch>
                <Route exact path="/" component={Home}/>  
                    
                
                <Route path = "/Create" component={Createpost}/>
                      
                
                <Route path = "/Mypost" component={Mypost}/>
                          
            </Switch>
            </Router>
        </div>
    )
}

export default Main

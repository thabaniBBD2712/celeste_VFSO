import React from 'react';
import {  BrowserRouter as Router,Link
} from "react-router-dom";
import '../App.css'
import '../css/home.css'
export function home(){
    return (
        <Router>

    
        <div className="main-container">    
        <div className="left-leaf"><img src="branch.svg" alt="leaf"></img></div>   
         <div className="right-leaf"><img src="branch (1).svg" alt="leaf"></img></div>    
         <div className="bottom-leaf"><img src="branch (2).svg" alt="leaf"></img></div>    
         <div className="title">      <h1>Celeste</h1>      
         <div className="caption">It’s an experience</div>    </div>   
    
         <Link to="../pages/menu" className="menu">
              Tasting Menu
        </Link>
         </div>
        </Router>
    )
}
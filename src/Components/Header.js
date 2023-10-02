import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div className="header"> 
            <button className="header-button0"><Link to="/" className="header-link0">JY</Link></button>
            <button className="header-button"><Link to="/projects" className="header-link">Projects</Link></button>
            <button className="header-button"><Link to="/timeline" className="header-link">Timeline</Link></button>
            <button className="header-button"><Link to="/contactme" className="header-link">Contact</Link></button>
            
        </div>
    ) 
}

export default Header
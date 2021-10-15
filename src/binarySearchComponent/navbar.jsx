import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <span className="navbar-brand"  style={{paddingLeft:"10px"}}>Binary Search Game</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-brand collapse navbar-collapse" id="navbarSupportedContent" >
                    <Link to={"/"} style={{textDecoration:"none"}}>
                        <span style={{color:"Aqua"}}>
                            Home
                        </span>
                    </Link>
                </div>

            </nav>
        );
    }
}

export default Navbar;
import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
    
    render () {
        let button = this.props.currentUser ? 
            <Link onClick={this.props.logout} className="button-secondary" to="/">Sign Out</Link> :
            <Link className="button-secondary" to="/login">Sign In</Link>

        return (
            <div className="container">
                <nav className="row nav" >
                    <div className="col nav-links">
                        <Link to="/">STITCH CLONE</Link>
                        <Link>Women</Link>
                        <Link>Men</Link>
                        <Link>Kids</Link>
                    </div>
                    <div className="col text-right">
                        {button}
                    </div>
                </nav>
            </div>
        )
        
        
    }

}


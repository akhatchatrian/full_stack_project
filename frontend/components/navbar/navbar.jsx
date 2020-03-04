import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
    
    render () {
        if (this.props.currentUser) {
            return (
                    <div className="header-nav-background">
                        <div>
                            <nav className="header-nav" >
                                <h1>Welcome!</h1>
                                <button onClick={this.props.logout}>Logout!</button>
                            </nav>
                        </div>
                </div>
            )
        } else {
            return (
               <div>
                   <div className="header-nav-background">
                    <nav className="header-nav" >
                        <div className="header-nav-links">
                            <Link to="/">STITCH CLONE</Link>
                            <div className="header-nav-links-sub">
                                <Link>Women</Link>
                                <Link>Men</Link>
                            </div>
                        </div>
                        <button className="header-nav-login">
                            <Link to="/login">Sign In</Link>
                        </button>
                    </nav>
                   </div>
               </div>
            )
        }
        
    }

}


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

                   <div className="container">
                    <nav className="row nav" >
                        <div className="col nav-links">
                            <Link to="/">STITCH CLONE</Link>
                            <Link>Women</Link>
                            <Link>Men</Link>
                            <Link>Kids</Link>
                        </div>
                        <div className="col text-right">
                            <Link className="button-secondary" to="/login">Sign In</Link>
                        </div>
                    </nav>
                   </div>

                   
               </div>
            )
        }
        
    }

}


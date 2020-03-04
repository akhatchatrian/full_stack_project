import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {

    render () {
        return (
            <div>
                <br/>
                <br/>
                <br/>
                <br/>
                <Link to="/signup">TAKE YOUR STYLE QUIZ</Link>
            </div>
        )
    }

}

export default Home;
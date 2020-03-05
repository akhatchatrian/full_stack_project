import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {

    render () {
        return (
            <div>
                <div className="home-body-1">
                    <div className="style-quiz">
                        <button className="style-quiz-button">
                            <Link to="/signup">TAKE YOUR STYLE QUIZ</Link>
                        </button>
                    </div>
                    <video className="video"
                        src="https://d3ss0gp3e5d7m3.cloudfront.net/assets/images/gateway-stitch-fix-video.10yH0.mp4">
                        </video>
                </div>
                <div className="home-body-2">
                    <div>We'll Find Style For Your Life</div>
                    <div>How Stitch Fix Works</div>
                    <div>Endless Styles for your best fit</div>
                    <div>1,000+ top brands</div>
                </div>
                <div className="footer">
                    This is the Footer!!!!!
                </div>
            </div>
        )
    }

}

export default Home;
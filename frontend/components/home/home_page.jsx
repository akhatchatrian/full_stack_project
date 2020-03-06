import React from "react";
import { Link } from "react-router-dom";
// import madewell from "../../../app/assets/images/madewell.png"

class Home extends React.Component {

    render () {
        return (
            <div>
                <div className="home-background jumbo width-100">
                    <div className="container height-100">
                        <div className="row center justify-center height-100">
                            <div className="col-center"> 
                                <button className="">
                                    <Link to="/signup">TAKE YOUR STYLE QUIZ</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2>We'll Find Style For Your Life</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>With clothing hand selected by our expert stylists for your unique size & style, 
                                you’ll always look and feel your best. No subscription required.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <a href="">Women</a>
                            <img src="" alt=""/>
                        </div>
                        <div className="col">
                            <a href="">Men</a>
                            <img src="" alt=""/>
                        </div>
                        <div className="col">
                            <a href="">Kids</a>
                            <img src="" alt=""/>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2>How Stitch Fix Works</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>
                                Tell us your price range, size & style. You’ll pay just a $20 
                                styling fee, which gets credited toward pieces you keep.
                            </p>
                        </div>
                        <div className="col">
                            <p>
                                Get a Fix when you want. Try on pieces at home before you buy. 
                                Keep your favorites, send back the rest.
                            </p>
                        </div>
                        <div className="col">
                            <p>
                                Free shipping, returns & exchanges—a prepaid return envelope is included.
                                 There are no hidden fees, ever.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2>Endless styles for your best fit</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div>This is where the picture scroll will go</div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1>1,000+ Top Brands</h1>
                        </div>
                    </div>
                </div>
                
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <img src="" alt=""/>
                        </div>
                        <div className="col">
                            <img src="" alt=""/>
                        </div>
                        <div className="col">
                            <img src="" alt=""/>
                        </div>
                        <div className="col">
                            <img src="" alt=""/>
                        </div>
                        <div className="col">
                            <img src="" alt=""/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <img src="" alt=""/>
                        </div>
                        <div className="col">
                            <img src="" alt=""/>
                        </div>
                        <div className="col">
                            <img src="" alt=""/>
                        </div>
                        <div className="col">
                            <img src="" alt=""/>
                        </div>
                        <div className="col">
                            <img src="" alt=""/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <img src="" alt=""/>
                        </div>
                        <div className="col">
                            <img src="" alt=""/>
                        </div>
                        <div className="col">
                            <img src="" alt=""/>
                        </div>
                        <div className="col">
                            <img src="" alt=""/>
                        </div>
                        <div className="col">
                            <img src="" alt=""/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <img src="" alt=""/>
                        </div>
                        <div className="col">
                            <img src="" alt=""/>
                        </div>
                        <div className="col">
                            <img src="" alt=""/>
                        </div>
                        <div className="col">
                            <img src="" alt=""/>
                        </div>
                        <div className="col">
                            <img src="" alt=""/>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Home;
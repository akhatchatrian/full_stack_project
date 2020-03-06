import React from "react";

export const IntroQuestion = (props) => {
    return (
        <div className="jumbo intro-wrapper">
            <div className="container">
                <div className="row justify-center">
                    <div className="intro-questions">
                        <div className="row justify-center">
                            <div className="circle">
                                <svg viewBox="0 0 380.4 380.4" space="preserve">
                                    <circle fill="#ECEBEB" cx="190.2" cy="190.2" r="190.2"></circle>
                                    <path fill="#2F3237" d="M328.3,165.5c0-1.1-0.4-2.1-1.2-2.8s-1.8-1.2-2.8-1.2h-31.5c-1.3-10.5-4.5-22.4-11.9-30.5 c-5.9-6.5-13.6-9.8-22.9-9.8c-9.3,0-16.9,3.3-22.7,9.8c-7.2,8.1-10.2,20-11.3,30.5h-27.6c-2.2,0-4,1.8-4,4v100.7 c-0.1,1.6-0.3,10.6,5.2,16.4c2.8,3,6.7,4.6,11.2,4.6h101.6c6.6,0,11.5-2,14.6-5.9c4.1-5.2,3.3-11.7,2.9-13.7L328.3,165.5z M241.3,136.3c4.2-4.8,9.7-7.1,16.7-7.1c7,0,12.6,2.3,16.9,7.1c5.8,6.4,8.6,16.2,9.8,25.2h-52.6 C233.1,152.5,235.6,142.7,241.3,136.3z M320,268.9c0,0,1,4.6-1.3,7.5c-1.5,1.9-4.3,2.8-8.3,2.8H208.8c-2.3,0-4.1-0.7-5.4-2 c-2.8-3-3.2-8.7-3.1-10.6c0-0.1,0-0.2,0-0.2v-96.8h23.1c-0.2,8,0.5,14,0.5,14.6c0.3,2.2,2.3,3.8,4.4,3.5c2.2-0.3,3.8-2.3,3.5-4.4 c0-0.1-0.7-5.9-0.4-13.6h53.9c0.4,7.8-0.1,13.6-0.1,13.7c-0.2,2.2,1.4,4.2,3.6,4.4c0.1,0,0.3,0,0.4,0c2,0,3.8-1.5,4-3.6 c0.1-0.6,0.6-6.5,0.2-14.5h26.8l-0.4,98.5C319.9,268.3,319.9,268.6,320,268.9z"></path><path fill="#2F3237" d="M192.8,98.7h32.8v12.5c0,2.2,1.8,4,4,4s4-1.8,4-4V94.7c0-2.2-1.8-4-4-4h-37.8c-1.6-10.5-5.2-21.7-12.5-29.9 c-7.1-8.1-16.8-12.2-28.7-12.2c-11.9,0-21.6,4.1-28.8,12.2c-7.4,8.3-11.1,19.5-12.8,29.9H71.5c-2.2,0-4,1.8-4,4v164.2 c0,0.3,0,6.5,3.1,12.8c2.9,6.1,9.2,13.4,22.2,13.4h79.1c2.2,0,4-1.8,4-4s-1.8-4-4-4H92.8c-16.7,0-17.3-16.4-17.3-18.2V98.7H108 c-1,11.4-0.1,20.5,0,21.2c0.2,2.2,2.2,3.8,4.4,3.5c2.2-0.2,3.8-2.2,3.5-4.4c0-0.2-1-9.2,0.1-20.4h68.6c0.9,11.1-0.1,20.1-0.2,20.3 c-0.3,2.2,1.3,4.2,3.5,4.5c0.2,0,0.3,0,0.5,0c2,0,3.7-1.5,4-3.5C192.6,119.2,193.6,110.1,192.8,98.7z M117.2,90.7 c1.6-8.8,4.8-18,10.7-24.6c5.7-6.4,13.2-9.5,22.9-9.5c9.6,0,17,3.1,22.7,9.5c5.8,6.6,8.8,15.8,10.3,24.6H117.2z"></path>
                                </svg>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col text-center intro-title">
                                <h2 className="">{props.title}</h2>
                            </div>
                        </div>

                        <div className="row radio-wrapper">
                            <div className="col text-center">
                                <input className="radio-button" type="radio" name="" id="" />
                                <label className="intro-label">1</label>
                            </div>
                            <div className="col text-center">
                                <input className="radio-button" type="radio" name="" id="" />
                                <label className="intro-label">2</label>
                            </div>
                            <div className="col text-center">
                                <input className="radio-button" type="radio" name="" id="" />
                                <label className="intro-label">3</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col text-center">
                                <button onClick={props.nextStep} className="button-tertiary">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
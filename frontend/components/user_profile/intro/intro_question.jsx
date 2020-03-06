import React from "react";

export const IntroQuestion = (props) => {
    return (
        <div className="jumbo intro-wrapper">
            <div className="container">

                <div className="row">
                    <div className="col text-center">
                        <div className="circle"></div>
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
    )
}
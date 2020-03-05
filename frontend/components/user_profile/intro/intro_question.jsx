import React from "react";

export const IntroQuestion = (props) => {
   return (
       <div className="intro-questions">
           <div className="intro-icon"></div>
           <div className="intro-label">{props.title}</div> 
           <div className="intro-questions-radio">
                    <input type="radio" name="" id=""/>
                    <input type="radio" name="" id=""/>
                    <input type="radio" name="" id=""/>
           </div>
           <br />
           <div className="intro-button-container">
                <button onClick={props.nextStep} className="intro-next-button">Next</button>
           </div>
       </div>
   )
}
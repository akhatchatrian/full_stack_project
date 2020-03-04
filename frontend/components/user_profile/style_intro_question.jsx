import React from "react";

export const IntroQuestion = (props) => {
   return (
       <div>
           {props.title} <br />
           <button onClick={props.nextStep} className="header-nav-login">Next</button> <br />
           <button onClick={props.prevStep} className="header-nav-login">Previous</button>
       </div>
   )
}
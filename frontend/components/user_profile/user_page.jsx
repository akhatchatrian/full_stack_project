import React from "react";


export const UserPage = (props) => {

    return (
        <div className="user">
            <div className="user-label">
                <label>Start Your Style Quiz</label>
            </div>
            <div className="user-field">
                <input type="text" onChange={props.update("email")}/>
            </div>
            <div className="user-field">
                <input type="password" onChange={props.update("password")}/>
            </div>
            <div>
                <button onClick={props.nextStep} className="user-next">Next</button>
            </div>
        </div>
    )
}
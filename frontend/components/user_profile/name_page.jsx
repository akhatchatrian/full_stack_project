import React from "react";

export const NamePage = (props) => {
    return (
        <div>
            <label>First Name
                <input type="text" onChange={props.update("first_name")}/>
            </label>
            <label>Last Name
                <input type="text" onChange={props.update("last_name")}/>
            </label>
            <button onClick={props.nextStep} className="header-nav-login">Next</button>
        </div>
    )
}
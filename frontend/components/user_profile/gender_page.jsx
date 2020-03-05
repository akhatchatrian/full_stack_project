import React from 'react';

export const GenderPage = (props) => {
    return (
        <div>
            <button onClick={props.nextStep} onClick={props.update("gender")}>Women</button>
            <button onClick={props.nextStep} onClick={props.update("gender")}>Men</button>
        </div>
    )
}
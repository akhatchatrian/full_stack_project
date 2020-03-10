import React from 'react';


export class GenderPage extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentUser !== this.props.currentUser) {
            this.props.nextStep()
        }
    }

    update(value) {
        const user = {
            ...this.props.currentUser,
            "gender": value }
    
        this.props.update(user)
    }

    render() {
        return (
            <div className="row justify-center">
                <div className="name-container">

                    <div className="row justify-center">
                        <h3 className="signup-title">Choose your Style Quiz</h3>
                    </div>

                    <div className="row justify-center">
                        <div className="col field text-center gender-button">
                            <button className="button-primary" onClick={() => { this.update("Female")}}>Women</button>      
                        </div>
                    </div>

                    <div className="row justify-center">
                        <div className="col field text-center gender-button">
                            <button className="button-primary button-sizing" onClick={() => { this.update("male")}}>Men</button>      
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

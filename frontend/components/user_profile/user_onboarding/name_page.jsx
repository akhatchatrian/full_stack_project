import React from "react";

export class NamePage extends React.Component {

    constructor(props) {
        super(props)

        this.state = { 
            first_name: this.props.currentUser.first_name,
            last_name: this.props.currentUser.last_name
        }

        this.updateUser = this.updateUser.bind(this)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentUser !== this.props.currentUser) {
            this.props.nextStep()
        }
    }

    update(field, value) {
        this.setState({[field]: value});
    }

    updateUser() {
        const user = {
            ...this.props.currentUser,
            ...this.state
        }
        this.props.update(user)
    }

    render() {
        return (
            <div className="row justify-center">
                <div className="name-container">

                    <div className="row justify-center">
                        <h3 className="signup-title">What's your name?</h3>
                    </div>

                    <div className="row justify-center">
                        <div className="col field">
                            <input 
                                placeholder="First name" 
                                type="text" 
                                value={this.state.first_name} onChange={(e) => this.update("first_name", e.currentTarget.value)}
                            />
                        </div>
                    </div>

                    <div className="row justify-center">
                        <div className="col field">
                            <input 
                                placeholder="Last name" 
                                type="text" 
                                value={this.state.last_name} onChange={(e) => this.update("last_name", e.currentTarget.value)}
                            />
                        </div>
                    </div>

                    <div className="row justify-center">
                        <div className="col field text-center continue-button">
                            <button onClick={this.updateUser} className="button-primary">Next</button>       
                        </div>
                    </div>

                </div>
            </div>


        )
    }
}
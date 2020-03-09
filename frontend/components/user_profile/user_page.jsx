import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export class UserPage extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: ""
        }

        this.createUser = this.createUser.bind(this)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentUser !== this.props.currentUser) {
            this.props.nextStep()
        }
    }

    update(field, value) {
        this.setState({ [field]: value });
    }

    createUser() {
        this.props.signup(this.state)
    }

    render() {
        return (
            <div className="row justify-center">
                <div className="signup-container">
                    <div className="row">
                        <div className="col text-center">
                            <h3 className="signup-title">Start Your Style Quiz</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-left">
                            <ul className="signup-list">
                                <li className='signup-list-item'>
                                    <span><FontAwesomeIcon icon="check-circle" /></span>
                                    <p><strong>Get styles in your price range,</strong> based on your profile
                                    </p>
                                </li>
                                <li className='signup-list-item'>
                                    <span><FontAwesomeIcon icon="check-circle" /></span>
                                    <p><strong>Order a Fix anytime—</strong> free shipping, returns & exchanges</p>
                                </li>
                                <li className='signup-list-item'>
                                    <span><FontAwesomeIcon icon="check-circle" /></span>
                                    <p><strong>No hidden fees</strong> and no subscription required
                                    </p>
                                </li>
                            </ul>
                        </div>


                        <div className="col text-left">

                            <div className="field">
                                <input placeholder="Email address" type="text" onChange={(e) => this.update("email", e.currentTarget.value)} />
                            </div>

                            <div className="field">
                                <input placeholder="Password" type="password" onChange={(e) => this.update("password", e.currentTarget.value)} />
                            </div>

                            <div className="signup-button-container">
                                <button onClick={this.createUser} className="button-primary">Continue</button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}
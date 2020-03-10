import React from "react"
import IntroQuestions from "../intro/intro_questions";
import { Redirect } from "react-router-dom";
import UserInfo from "./user_info";


class UserOnboardingComponent extends React.Component {

    constructor(props) {
        super(props)

        this.state = { currentStep: this.props.currentUser ? 1 : 0 }
        this.completeStep = this.completeStep.bind(this)
    }

    completeStep() {
        if (this.state.currentStep < 2) {
            this.setState((prevState) => ({
                currentStep: prevState.currentStep + 1
            }))
        } else {
            return <Redirect to="/signup/styleQuiz" />
        }
    }

    renderForm() {
        switch (this.state.currentStep) {
            case 0:
                return <IntroQuestions completeStep={this.completeStep} />
            case 1:
                return <UserInfo
                    currentUser={this.props.currentUser}
                    completeStep={this.completeStep}
                    signup={this.props.signup}
                    update={this.props.update} 
                    />
            default:
                return "in the index"
        }
    }

    render() {
        return (
            <div className="jumbo">
                <div className="container">
                    {this.renderForm()}
                </div>
            </div>
        )
    }
}

export default UserOnboardingComponent;
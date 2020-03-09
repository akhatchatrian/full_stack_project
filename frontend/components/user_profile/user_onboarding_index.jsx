import React from "react"
import IntroQuestions from "./intro/intro_questions";
import UserInfo from "./user_info";


class UserOnboardingComponent extends React.Component {

    constructor(props) {
        super(props)

        this.state = { currentStep: this.props.currentUser ? 1 : 0 }
        this.completeStep = this.completeStep.bind(this)
    }

    componentDidMount() {
        this.props.getStyleItems();
    }

    completeStep() {
        if (this.state.currentStep < 4) {
            this.setState((prevState) => ({
                currentStep: prevState.currentStep + 1
            }))
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
                    update={this.props.update} />
            default:
                return "DONE WITH USER INFO!!!"
        }
    }

    render() {
        if (!this.props.styleItems || Object.values(this.props.styleItems).length === 0) {
            return null
        }

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
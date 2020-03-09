import React from "react";
import { UserPage } from "./user_page";
import { NamePage } from "./name_page";
import { GenderPage } from "./gender_page";


class UserInfo extends React.Component {

    constructor(props) {
        super(props)

        this.state = { currentStep: this.props.currentUser ? 1 : 0 }

        this.nextStep = this.nextStep.bind(this)
        this.prevStep = this.prevStep.bind(this)
    }

    nextStep() {
        if (this.state.currentStep < 3) {
            this.setState((prevState) => ({
                currentStep: prevState.currentStep + 1
            }))
        } else {
            this.props.completeStep()
        }
    }

    prevStep() {
        if (this.state.currentStep > 0) {
            this.setState((prevState) => ({
                currentStep: prevState.currentStep - 1
            }))
        }
    }

    render() {
        switch (this.state.currentStep) {
            case 0:
                return <UserPage
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    signup={this.props.signup}
                    currentUser={this.props.currentUser}
                />
            case 1:
                return <NamePage
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    update={this.props.update}
                    currentUser={this.props.currentUser}
                />
            case 2:
                return <GenderPage
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    update={this.props.update}
                    currentUser={this.props.currentUser}
                />
            default:
                return "hello"
        }
    }


}

export default UserInfo
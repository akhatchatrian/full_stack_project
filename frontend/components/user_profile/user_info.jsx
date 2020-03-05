import React from "react";
import { UserPage } from "./user_page";
import { NamePage } from "./name_page";
import { GenderPage } from "./gender_page";


class UserInfo extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            currentStep: 0 ,
            user: {
                email: "",
                fist_name: "",
                last_name: "",
                password: "",
                gender: ""
            }
        }

        this.nextStep = this.nextStep.bind(this)
        this.prevStep = this.prevStep.bind(this)
        this.update = this.update.bind(this)
    }

    update(field) {
        return e => this.setState({ user: { [field]: e.currentTarget.value } });
    }

    nextStep() {
        if (this.state.currentStep < 3) {
            this.setState((prevState) => ({
                currentStep: prevState.currentStep + 1
            }))
        } else {
            // this.props.signup(this.state.user)
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
        switch(this.state.currentStep) {
            case 0:
                return <UserPage 
                            nextStep={this.nextStep} 
                            prevStep ={this.nextStep} 
                            update={this.update}
                        />
            case 1:
                return <NamePage 
                            nextStep={this.nextStep} 
                            prevStep ={this.nextStep} 
                            update={this.update} 
                        />
            case 2: 
                return <GenderPage 
                            nextStep={this.nextStep} 
                            prevStep={this.prevStep}
                            update={this.update}
                        />
            default:
                return "hello"
        }
    }


}

export default UserInfo
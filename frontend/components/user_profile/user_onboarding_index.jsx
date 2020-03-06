import React from "react"
import IntroQuestions from "./intro/intro_questions";
import UserInfo from "./user_info";


class UserOnboardingComponent extends React.Component {

    constructor(props) {
        super(props)

        this.state = { currentStep: 0 }
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

    render () {
        if (!this.props.styleItems || Object.values(this.props.styleItems).length === 0) {
            return null
        } 

        const items = Object.values(this.props.styleItems)
        
        switch(this.state.currentStep) {
            case 0:
                return <IntroQuestions completeStep={this.completeStep} />
            case 1:
                return <UserInfo completeStep={this.completeStep} signup={this.props.signup}/>
            default:
                return "DONE WITH USER INFO!!!"
        }
    }
}

export default UserOnboardingComponent;
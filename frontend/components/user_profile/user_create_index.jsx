import React from "react"
import IntroQuestions from "./style_intro_questions";

//TODO: Rename to UserOnboardingComponent
class CreateUserIndex extends React.Component {

    constructor(props) {
        super(props)

        //TODO: The User create process has 2 component steps: Intro, UserRegistration

        //A change
    }

    componentDidMount() {
        this.props.getStyleItems();
    }

    completeIntro() {
        //TODO: set currentStep
    }

    renderIntro() {
        if(this.state.currentStep === 0) {
            return <IntroQuestions completeIntro={this.completeIntro} />
        }
    }

    render () {
        if (!this.props.styleItems || Object.values(this.props.styleItems).length === 0) {
            return null
        } 

        const items = Object.values(this.props.styleItems)
    
        
        
        this.renderIntro();     
    }
}

export default CreateUserIndex;
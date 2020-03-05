import React from "react"
import { IntroQuestion } from "./intro_question";

class IntroQuestions extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            currentStep: 0,
            questions: [
                {
                    iconName: "icon1",
                    title: "How do you feel about shopping?",
                    options: {
                        "Don't enjoy": "We’ve got you! Your Stylist will hand-select styles for you, so you can focus on other things.",
                        "It's okay": "Gotcha. Having your own Stylist to hand-select pieces for your style and fit makes it effortless.",
                        "Love it": "Great! So do we. Think of us as your new shopping buddy."
                    }
                },
                {
                    iconName: "icon2",
                    title: "How much time & effort do you put into getting the right look?",
                    options: {
                        "Not a lot": "Got it. We're fans of simplicity too",
                        "Some": "Nice. We hear you",
                        "Tons": "Sweet! We love that."
                    }
                },
                {
                    iconName: "icon3",
                    title: "How often do you try out the latest styles & trends",
                    options: {
                        "Rarely": "No problem. We've got tons of timeless pieces you'll love.",
                        "Occasionally": "Nice. We can definitely help you out.",
                        "All the time": "Awesome. We have tons of fun new pieces just for you."
                    }
                }
            ]
        }

        this.nextStep = this.nextStep.bind(this);
        this.prevStep = this.prevStep.bind(this);
    }

    nextStep() {
        if (this.state.currentStep < this.state.questions.length - 1) {
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
        let currentQuestion = this.state.questions[this.state.currentStep];

        return (
            <div>
                <IntroQuestion 
                    nextStep={this.nextStep} 
                    prevStep={this.prevStep} 
                    iconName={currentQuestion.iconName} 
                    title={currentQuestion.title} 
                    options={currentQuestion.options} 
                />
            </div>
        )
    }

}

export default IntroQuestions;
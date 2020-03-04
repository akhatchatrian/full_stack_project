import React from "react"
import { IntroQuestion } from "./style_intro_question";

class IntroQuestions extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            currentStep: 0,
            questions: [
                {
                    iconName: "icon1",
                    title: "question1",
                    options: {
                        option1: "answer1",
                        option2: "answer2",
                        option3: "answer3"
                    }
                },
                {
                    iconName: "icon2",
                    title: "question2",
                    options: {
                        option1: "answer1",
                        option2: "answer2",
                        option3: "answer3"
                    }
                },
                {
                    iconName: "icon3",
                    title: "question3",
                    options: {
                        option1: "answer1",
                        option2: "answer2",
                        option3: "answer3"
                    }
                }
            ]
        }

        this.nextStep = this.nextStep.bind(this);
        this.prevStep = this.prevStep.bind(this);
    }

    nextStep() {
        if (this.state.currentStep < this.state.questions.length) {
            this.setState((prevState) => ({
                currentStep: prevState.currentStep + 1
            }))
        } else {
            this.props.completeIntro()
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
                <IntroQuestion nextStep={this.nextStep} prevStep={this.prevStep} iconName={currentQuestion.iconName} title={currentQuestion.title} options={currentQuestion.options} />
            </div>
        )
    }

}

export default IntroQuestions;
import React from "react";

export class IntroQuestion extends React.Component {

    constructor(props) {
        super(props);

        this.state = { selectedOption: null };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            selectedOption: e.currentTarget.value
        })
    }

    render() {
        let items = []

        const content = this.state.selectedOption && this.props.options[this.state.selectedOption]
            ? <div className='intro-question-note text-center'>
                {this.props.options[this.state.selectedOption]}
            </div>
            : <div></div>

        for (const optionName in this.props.options) {

            items.push(
                <div key={optionName} className="col text-center">
                    <input className="radio-button"
                        type="radio"
                        onChange={this.handleChange}
                        checked={this.state.selectedOption === optionName}
                        value={optionName}
                        name={this.props.title} />
                    <label className="intro-label">{optionName}</label>
                </div>
            )
        }

        return (
            <div className="jumbo intro-wrapper">
                <div className="container fade-in">
                    <div className="row justify-center">
                        <div className="intro-questions">
                            <div className="row justify-center">
                                <div className="circle">
                                    {this.props.icon}
                                </div>
                            </div>

                            <div className="row">
                                <div className="col text-center intro-title">
                                    <h2 className="">{this.props.title}</h2>
                                </div>
                            </div>

                            <div className="row radio-wrapper">
                                {items}
                                {content}
                            </div>

                            <div className="row">
                                <div className="col text-center">
                                    <button onClick={this.props.nextStep} className="button-tertiary">Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
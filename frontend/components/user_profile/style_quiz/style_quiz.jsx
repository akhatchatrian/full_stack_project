import React from "react";
import { Link } from "react-router-dom";

class StyleQuiz extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user_id: this.props.currentUser.id,
            brands: [],
            price_range: "",
            colors: [],
            size_shirt: "",
            size_pants: "",
            size_shoes: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.update = this.update.bind(this);
    }

    componentDidMount() {
        this.props.getInventoryItems()
    }

    update() {
        this.props.createStyleValue(this.state).then(this.props.createBox())
    }

    handleChange(event, property) {
        const list = this.state[property].slice();

        const isChecked = event.target.checked;
        const value = event.target.value;

        if (isChecked) {
            this.setState({
                [property]: [...list, value]
            })
        } else {
            const index = list.indexOf(value);
            if (index > -1) {
                list.splice(index, 1);

                this.setState({
                    [property]: list
                })
            }
        }
    }

    renderList(list, listName) {
        return list.map(item => {
            return (
                <div key={item} className="col text-left checkbox-spacing">
                    <input
                        className="checkbox"
                        type="checkbox"
                        onChange={(e) => this.handleChange(e, listName)}
                        value={item}
                        name={listName}
                    />
                    <label className="intro-label">{item}</label>
                </div>
            )
        })
    }

    renderBrands() {
        let brandsList = [...new Set(Object.values(this.props.inventoryItems).map(b => b.brand))]        
        return this.renderList(brandsList, "brands");
    }

    renderColors() {
        const colors = ["Black", "White", "Red", "Blue", "Green", "Orange", "Purple", "Yellow", "Brown"]
        return this.renderList(colors, "colors")
    }

    render() {
        if (!this.props.inventoryItems || Object.values(this.props.inventoryItems).length === 0) {
            return null
        }

        return (

            <div>
                <div className="title-container width-100">
                    <div className="row justify-center">
                        <h2>Complete Your Style Profile</h2>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col quiz-image">
                            <div className=""></div>
                        </div>
                    </div>

                    <div className="row justify-center">
                        <div className="welcome message text-center">
                            <h2>Welcome, {this.props.currentUser.first_name}</h2>
                            <p>We’re excited to start styling for you. Please tell us about yourself, 
                                so your Stylist can select items based on your specific preferences.
                            </p>
                        </div>
                    </div>

                    <div className="row justify-center">
                        <div className="question">
                            <p>What do you like to wear?</p>
                            {this.renderBrands()}
                        </div>
                    </div>
                

                    <div className="row justify-center">
                        <div className="question">
                            <div className="divider"></div>
                            <p>What's your max budget per item?</p>
                            <select value={this.state.price_range}
                                    className="style-selector"
                                    onChange={(e) => this.setState({price_range: e.target.value})}>
                                    <option value>--</option>
                                    <option value="25">$25</option>
                                    <option value="50">$50</option>
                                    <option value="75">$75</option>
                                    <option value="100">$100</option>
                                    <option value="I'm rich">I'm rich</option>
                            </select>
                        </div>
                    </div>

                    <div className="row justify-center">
                        <div className="question">
                            <div className="divider"></div>
                            <p>What shades look good on you?</p>
                            {this.renderColors()}
                        </div>
                    </div>

                    <div className="row justify-center">
                        <div className="question">
                            <div className="divider"></div>
                            <p>What's your shirt size?</p>
                            <select value={this.state.size_shirt}
                                    className="style-selector"
                                    onChange={(e) => this.setState({size_shirt: e.target.value})}>
                                    <option value>--</option>
                                    <option value="s">small</option>
                                    <option value="m">medium</option>
                                    <option value="l">large</option>
                            </select>
                        </div>
                    </div>

                    <div className="row justify-center">
                        <div className="question">
                            <div className="divider"></div>
                            <p>Your waist?</p>
                            <select value={this.state.size_pants}
                                    className="style-selector"
                                    onChange={(e) => this.setState({size_pants: e.target.value})}>
                                    <option value>--</option>
                                    <option value="26-30">26-30</option>
                                    <option value="32-36">32-36</option>
                                    <option value="38-42">38-42</option>
                            </select>
                        </div>
                    </div>

                    <div className="row justify-center">
                        <div className="question">
                            <div className="divider"></div>
                            <p>What about your shoe?</p>
                            <select value={this.state.size_shoes}
                                    className="style-selector"
                                    onChange={(e) => this.setState({size_shoes: e.target.value})}>
                                    <option value>--</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                            </select>
                        </div>
                    </div>

                    <div className="row justify-center">
                        <div className="question button-spacing">
                            <Link to="/profile-page" className="button-primary" onClick={this.update}>Get your first box!</Link>  
                        </div>
                    </div>


                </div>
            </div>

        )
    }
}

export default StyleQuiz;
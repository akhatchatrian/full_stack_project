import React from "react";

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

        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        this.props.getInventoryItems()
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
                <div key={item} className="col text-left">
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
            <div className="container">

                <div className="title-container width-100">
                    <div className="row justify-center">
                        <h2>Complete Your Style Profile</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col quiz-image">
                        <div className=""></div>
                    </div>
                </div>

                <div className="row">
                    <div className="col text-center welcome-message">
                        <h2>Welcome, {this.props.currentUser.first_name}</h2>
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
                                <option value="$25">$25</option>
                                <option value="$50">$50</option>
                                <option value="$75">$75</option>
                                <option value="$100">$100</option>
                                <option value="I'm rich">I'm rich</option>
                        </select>
                    </div>
                </div>

                <div className="row justify-center">
                    <div className="question">
                        <div className="divider"></div>
                        {this.renderColors()}
                    </div>
                </div>

                <div className="row justify-center">
                    <div className="question">
                        <div className="divider"></div>
                        <select name="" id="">
                            <option value>--</option>
                            <option value="small">$25</option>
                            <option value="medium">$50</option>
                            <option value="large">$75</option>
                        </select>

                        <select name="" id="">
                            <option value>--</option>
                            <option value="small">$25</option>
                            <option value="medium">$50</option>
                            <option value="large">$75</option>
                        </select>

                        <input type="text" name="" id="" />
                    </div>
                </div>



            </div>
        )
    }
}

export default StyleQuiz;
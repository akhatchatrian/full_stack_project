import React from "react"

class ProfilePage extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getBoxes()
    } 

    render() {

        return (
            <div className="container">
                in the profile page
            </div>
        )
    }
}

export default ProfilePage
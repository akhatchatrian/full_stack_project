import React from "react"

class ProfilePage extends React.Component {
    constructor(props) {
        super(props)

        console.log(this.props.currentUser)
        console.log(this.props)
    }

    componentDidMount() {
        this.props.getBoxes().then(res => {
            console.log("res", res)
        });
    }

    

    render() {
        console.log(this.props.currentUser)
        console.log(this.props)
        return (
            <div className="container">
                in the profile page
            </div>
        )
    }
}

export default ProfilePage
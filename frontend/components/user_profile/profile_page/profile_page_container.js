import { connect } from "react-redux";
import { createBox, getBoxes } from "../../../actions/style_actions";
import ProfilePage from "./profile_page";


const mapStateToProps = state => ({
    currentUser: state.entities.user[state.session.id],
    boxes: state.boxes
})

const mapDispatchToProps = dispatch => ({
    createBox: () => dispatch(createBox()),
    getBoxes: () => dispatch(getBoxes())

})

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)
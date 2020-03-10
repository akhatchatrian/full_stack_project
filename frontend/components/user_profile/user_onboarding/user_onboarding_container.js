import { connect } from "react-redux";
import { signup, update } from "../../../actions/session_actions";
import UserOnboardingComponent from "./user_onboarding_index";


const mapStateToProps = state => ({
    currentUser: state.entities.user[state.session.id]
})

const mapDispatchToProps = dispatch => ({
    signup: (user) => dispatch(signup(user)),
    update: (user) => dispatch(update(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserOnboardingComponent)

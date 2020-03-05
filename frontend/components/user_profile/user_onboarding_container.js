import { connect } from "react-redux";
import { updateStyleValue, getStyleItems } from "../../actions/style_actions";
import { signup } from "../../actions/session_actions";
import UserOnboardingComponent from "./user_onboarding_index";

const mapStateToProps = state => ({
    styleItems: state.entities.styleItems,
    currentUser: state.entities.user[state.session.id]
})

const mapDispatchToProps = dispatch => ({
    updateStyleValue: (styleValue) => dispatch(updateStyleValue(styleValue)),
    signup: (user) => dispatch(signup(user)),
    getStyleItems: () => dispatch(getStyleItems())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserOnboardingComponent)

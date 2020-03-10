import { connect } from "react-redux";
import { getInventoryItems, createStyleValue } from "../../../actions/style_actions";
import StyleQuiz from "./style_quiz";

const mapStateToProps = (state) => ({
    inventoryItems: state.entities.inventoryItems,
    currentUser: state.entities.user[state.session.id]
})


const mapDispatchToProps = dispatch => ({
    getInventoryItems: () => dispatch(getInventoryItems()),
    createStyleValue: (styleValues) => dispatch(createStyleValue(styleValues))
})

export default connect(mapStateToProps, mapDispatchToProps)(StyleQuiz)
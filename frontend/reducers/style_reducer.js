import { RECEIVE_STYLE_ITEMS, RECEIVE_STYLE_VALUE } from "../actions/style_actions";

export const styleReducer = (state = {}, action) => {

    switch(action.type) {
        case RECEIVE_STYLE_ITEMS:
            return Object.assign({}, state, action.styleItems)
        case RECEIVE_STYLE_VALUE:
            return Object.assign({}, state, { [action.styleValue.id]: action.styleValue })
        default:
            return state
    }
}
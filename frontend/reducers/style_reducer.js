import { RECEIVE_STYLE_VALUE, RECEIVE_INVENTORY_ITEMS } from "../actions/style_actions";

export const styleReducer = (state = {}, action) => {
    switch(action.type) {
        case RECEIVE_STYLE_VALUE:
            return Object.assign({}, state, { [action.styleValue.id]: action.styleValue })
        case RECEIVE_INVENTORY_ITEMS:
            return Object.assign({}, state, action.inventoryItems)
        default:
            return state
    }
}
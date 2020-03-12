import { RECEIVE_STYLE_VALUE, RECEIVE_INVENTORY_ITEMS, RECEIVE_BOXES, RECEIVE_BOX } from "../actions/style_actions";

export const styleReducer = (state = {}, action) => {
    switch(action.type) {
        case RECEIVE_STYLE_VALUE:
            return Object.assign({}, state, action.styleValues)
        case RECEIVE_INVENTORY_ITEMS:
            return Object.assign({}, state, action.inventoryItems)
        case RECEIVE_BOXES:
            return Object.assign({}, state, action.boxes)
        case RECEIVE_BOX:
            return Object.assign({}, state, action.box)
        default:
            return state
    }
}
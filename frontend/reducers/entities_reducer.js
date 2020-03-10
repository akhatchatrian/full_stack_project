import { combineReducers } from "redux";
import { userReducer } from "./user_reducer";
import { styleReducer } from "./style_reducer";

export const entitiesReducer = combineReducers({
    user: userReducer,
    inventoryItems: styleReducer
})
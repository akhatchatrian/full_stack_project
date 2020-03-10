import { STYLEUtil } from "../util/style_profile_util";


export const RECEIVE_STYLE_ITEMS = "RECEIVE_STYLE_ITEMS";
export const RECEIVE_STYLE_VALUE = "RECEIVE_STYLE_VALUE";
export const RECEIVE_INVENTORY_ITEMS = "RECEIVE_INVENTORY_ITEMS"

// const receiveStyleItems = (styleItems) => ({
//     type: RECEIVE_STYLE_ITEMS,
//     styleItems
// });

const receiveInventoryItems = (inventoryItems) => ({
    type: RECEIVE_INVENTORY_ITEMS,
    inventoryItems
});

const receiveStyleValue = styleValue => ({
    type: RECEIVE_STYLE_VALUE,
    styleValue
})

// export const getStyleItems = () => dispatch => (
//     STYLEUtil.getStyleItems()
//         .then(styleItems => dispatch(receiveStyleItems(styleItems)))
// )

export const getInventoryItems = () => dispatch => (
    STYLEUtil.getInventoryItems()
        .then(inventoryItems => dispatch(receiveInventoryItems(inventoryItems)))
)

export const createStyleValue = styleValues => dispatch => (
    STYLEUtil.updateEvent(styleValues)
        .then(styleValues => dispatch(receiveStyleValue(styleValues)))
)

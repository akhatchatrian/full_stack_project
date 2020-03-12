import { STYLEUtil } from "../util/style_profile_util";

export const RECEIVE_STYLE_ITEMS = "RECEIVE_STYLE_ITEMS";
export const RECEIVE_STYLE_VALUE = "RECEIVE_STYLE_VALUE";
export const RECEIVE_INVENTORY_ITEMS = "RECEIVE_INVENTORY_ITEMS";
export const RECEIVE_BOXES = "RECEIVE_BOXES";
export const RECEIVE_BOX = "RECEIVE_BOX"

const receiveInventoryItems = (inventoryItems) => ({
    type: RECEIVE_INVENTORY_ITEMS,
    inventoryItems
});

const receiveBoxes = (boxes) => ({
    type: RECEIVE_BOXES,
    boxes
})

const receiveBox = (box) => ({
    type: RECEIVE_BOXES,
    box
})

const receiveStyleValue = styleValue => ({
    type: RECEIVE_STYLE_VALUE,
    styleValue
})

export const getInventoryItems = () => dispatch => (
    STYLEUtil.getInventoryItems()
        .then(inventoryItems => dispatch(receiveInventoryItems(inventoryItems)))
)

export const createStyleValue = styleValues => dispatch => (
    STYLEUtil.createStyleValue(styleValues)
        .then(styleValues => dispatch(receiveStyleValue(styleValues)))
)

export const createBox = () => dispatch => (
    STYLEUtil.createBox()
        .then(box => dispatch(receiveBox(box)))
)

export const getBoxes = () => dispatch => (
    STYLEUtil.getBoxes()
        .then(boxes => dispatch(receiveBoxes(boxes)))
)
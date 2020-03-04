import { STYLEUtil } from "../util/style_profile_util";


export const RECEIVE_STYLE_ITEMS = "RECEIVE_STYLE_ITEMS";
export const RECEIVE_STYLE_VALUE = "RECEIVE_STYLE_VALUE";


const receiveStyleItems = (styleItems) => ({
    type: RECEIVE_STYLE_ITEMS,
    styleItems
});

const receiveStyleValue = styleValue => ({
    type: RECEIVE_STYLE_VALUE,
    styleValue
})

export const getStyleItems = () => dispatch => (
    STYLEUtil.getStyleItems()
        .then(styleItems => dispatch(receiveStyleItems(styleItems)))
)

export const updateStyleValue = styleValue => dispatch => (
    EventAPIUtil.updateEvent(styleValue)
        .then(styleValue => dispatch(receiveStyleValue(styleValue)))
)


export const STYLEUtil = {

    getStyleItems: () => (
        $.ajax({
            method: "GET",
            url: "api/style_profile_items"
        })
    ),

    createStyleValue: (style_value) => (
        $.ajax({
            method: "POST",
            url: `api/style_values`,
            data: { style_value }
        })
    ),

    getInventoryItems: () => (
        $.ajax({
            method: "GET",
            url: "api/inventories"
        })
    ),

    createBox: () => (
        $.ajax({
            method: "POST",
            url: "api/boxes"
        })
    ),

    getBoxes: () => (
        $.ajax({
            method: "GET",
            url: `api/boxes`
        })
    )

}
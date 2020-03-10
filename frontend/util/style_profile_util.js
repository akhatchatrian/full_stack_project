
export const STYLEUtil = {

    getStyleItems: () => (
        $.ajax({
            method: "GET",
            url: "api/style_profile_items"
        })
    ),

    updateStyleValues: (styleValue) => (
        $.ajax({
            method: "PATCH",
            url: `api/style_profile_values/${styleValue.id}`,
            data: { styleValue }
        })
    ),

    getInventoryItems: () => (
        $.ajax({
            method: "GET",
            url: "api/inventories"
        })
    ),

}
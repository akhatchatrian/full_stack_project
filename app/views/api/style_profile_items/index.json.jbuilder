@style_items.each do |style_item|
    json.set! style_item.id do
      json.partial! 'api/style_profile_items/style_profile_items', style_item: style_item
    end
end
  
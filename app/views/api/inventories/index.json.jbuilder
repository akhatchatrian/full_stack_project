@inventory.each do |inventory_item|
    json.set! inventory_item.id do
      json.partial! 'api/inventories/inventories', inventory_item: inventory_item
    end
end
  
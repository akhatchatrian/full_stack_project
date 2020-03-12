class Inventory < ApplicationRecord

    has_one :box_item,
        primary_key: :id,
        foreign_key: :inventory_id,
        class_name: :BoxItem

end

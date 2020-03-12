class BoxItem < ApplicationRecord

    belongs_to :user,
        primary_key: :id, 
        foreign_key: :user_id,
        class_name: :User

    belongs_to :box,
        primary_key: :id,
        foreign_key: :box_id,
        class_name: :Box

    belongs_to :inventory_item,
        primary_key: :id,
        foreign_key: :inventory_id,
        class_name: :Inventory

end

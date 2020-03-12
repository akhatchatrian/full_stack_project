class Box < ApplicationRecord

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    has_many :box_items,
        primary_key: :id,
        foreign_key: :box_id,
        class_name: :BoxItem

    has_many :items,
        through: :box_items,
        source: :inventory_item
    
end

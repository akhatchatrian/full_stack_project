class StyleValue < ApplicationRecord

    validates :brands, :price_range, :color, :size_shirt, :size_pants, :size_shoes

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

end

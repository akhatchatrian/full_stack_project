class StyleValue < ApplicationRecord

    validates :price_range, :size_shirt, :size_pants, :size_shoes, presence: true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

end

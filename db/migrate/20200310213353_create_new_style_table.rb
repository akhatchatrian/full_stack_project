class CreateNewStyleTable < ActiveRecord::Migration[5.2]
  def change
    create_table :style_values do |t|
      t.integer :user_id, null: false
      t.string :brands, array: true, default: []
      t.string :price_range
      t.string :colors, array: true, default: []
      t.string :size_shirt
      t.string :size_pants
      t.string :size_shoes
    end
  end
end

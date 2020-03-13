class CreateInventory < ActiveRecord::Migration[5.2]
  def change
    create_table :inventories do |t|
      t.string :type, null: false
      t.string :brand, null: false
      t.float :price, null: false
      t.string :color, null: false
      t.string :size, null:false
      t.string :gender, null:false
      t.integer :quantity
      t.timestamps
    end
  end
end



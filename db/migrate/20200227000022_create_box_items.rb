class CreateBoxItems < ActiveRecord::Migration[5.2]
  def change
    create_table :box_items do |t|
      t.integer :user_id, null: false
      t.integer :box_id, null: false
      t.integer :inventory_id, null: false
      t.boolean :purchased
      t.text :feedback
    end

    add_index :box_items, :user_id
    add_index :box_items, :box_id
    add_index :box_items, :inventory_id
  end
end


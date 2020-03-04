class CreateBox < ActiveRecord::Migration[5.2]
  def change
    create_table :boxes do |t|
      t.integer :user_id, null: false
      t.float :total_cost, null: false
      t.float :purchase_cost, null: false
      t.timestamps
    end

    add_index :boxes, :user_id
  end
end

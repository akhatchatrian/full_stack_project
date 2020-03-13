class ChangeInventoryCol < ActiveRecord::Migration[5.2]
  def change
    rename_column :inventories, :type, :category
  end
end

class RemoveMistake < ActiveRecord::Migration[5.2]
  def change
    drop_table :style_values_tables
  end
end

class DropStyleValuesTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :style_profile_values
  end
end

class ChangeStyleProfileValues < ActiveRecord::Migration[5.2]
  def change
    change_column :style_profile_values, :user_id, :integer, :null=>true
    change_column :style_profile_values, :value, :string, :null=>true
  end
end

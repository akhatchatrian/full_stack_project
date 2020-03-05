class RemoveNullConstraintFromUsers < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :first_name, :string, :null=>true
    change_column :users, :last_name, :string, :null=>true
    change_column :users, :email, :string, :null=>true
    change_column :users, :gender, :string, :null=>true
    change_column :users, :password_digest, :string, :null=>true
    change_column :users, :sub_plan, :string, :null=>true
  end
end

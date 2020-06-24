class ChangeColumnsForUser < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :first_name, :string
    change_column :users, :last_name, :string
    change_column :users, :location, :string 
    
  end
end

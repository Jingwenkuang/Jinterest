class RemoveColumnsForUser < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :first_name
    remove_column :users, :last_name
    remove_column :users, :location 

    add_column :users, :first_name, :string
    add_column :users, :last_name, :string 
    add_column :users, :location, :string 
  end
end

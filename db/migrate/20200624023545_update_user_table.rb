class UpdateUserTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :username

    add_column :users, :username, :string 
    add_column :users, :age, :string 
  end
end

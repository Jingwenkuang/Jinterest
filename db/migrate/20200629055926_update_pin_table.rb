class UpdatePinTable < ActiveRecord::Migration[5.2]
  def change
    remove_index :pins, :user_id
    remove_index :pins, :title

    add_index :pins, :user_id
    add_index :pins, :title
  end
end

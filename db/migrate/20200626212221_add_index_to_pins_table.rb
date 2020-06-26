class AddIndexToPinsTable < ActiveRecord::Migration[5.2]
  def change

    add_index :pins, :title, unique: true
  end
end

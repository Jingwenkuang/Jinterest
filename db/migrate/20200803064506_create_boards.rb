class CreateBoards < ActiveRecord::Migration[5.2]
  def change
    create_table :boards do |t|
      t.integer :user_id, null: false 
      t.string :name, null: false 
      t.text :description 
      t.datetime :date_start
      t.datetime :date_end
      t.timestamps
    end

    add_index :boards, [:name, :user_id], unique: true
  end
end

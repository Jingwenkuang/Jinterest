class AddsecretToBoardsTable < ActiveRecord::Migration[5.2]
  def change
      add_column :boards, :secret, :boolean, default: false 
  end
end

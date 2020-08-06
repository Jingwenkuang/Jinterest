# == Schema Information
#
# Table name: boards_pins
#
#  id         :bigint           not null, primary key
#  board_id   :integer          not null
#  pin_id     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class BoardsPin < ApplicationRecord
  validates :board_id, :pin_id, presence: true 

  belongs_to :pin
  belongs_to :board
end

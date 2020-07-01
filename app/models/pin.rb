# == Schema Information
#
# Table name: pins
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :text
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Pin < ApplicationRecord

 validates :title, :user_id, presence: true
 validate :ensure_photo

  belongs_to :user,
  foreign_key: :user_id,
  class_name: :User

  has_one_attached :photo

  def ensure_photo 
   unless self.photo.attached?
    errors[:photo] << "must be attached"
   end
  end

end

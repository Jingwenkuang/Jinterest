# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  description     :text
#  session_token   :string           not null
#  password_digest :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  first_name      :string
#  last_name       :string
#  location        :string
#  username        :string
#  age             :string
#
class User < ApplicationRecord

  validates :password_digest, :session_token, :age, :email, presence: true
  validates :session_token, :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true 
  validates :email, format: /\S+@\S+\.\S+/

  attr_reader :password
  after_initialize :ensure_session_token 

  has_many :pins,
  foreign_key: :user_id,
  class_name: :Pin 

  has_many :boards,
  foreign_key: :user_id,
  class_name: :Board 

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil 
  end

  def password=(password)
    @password = password 
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  private

  def self.generate_session_token 
    SecureRandom.urlsafe_base64
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

end

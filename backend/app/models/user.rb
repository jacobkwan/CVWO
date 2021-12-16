class User < ApplicationRecord
  has_many :categories
  has_many :tasks, through: :categories # now Rails will understand @user.tasks
  has_secure_password

  validates :name, :password_digest, presence: true
end

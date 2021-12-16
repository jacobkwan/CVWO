class Category < ApplicationRecord
  belongs_to :user
  has_many :tasks

  validates :user, :title, presence: true
end

class Task < ApplicationRecord
  belongs_to :category

  validates :category, :title, :completed, :urgent, :deleted, presence: true
end

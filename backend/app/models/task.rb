class Task < ApplicationRecord
  belongs_to :category

  validates :category, :title, presence: true
  validates :completed, inclusion: [true, false]
  validates :urgent, inclusion: [true, false]
  validates :deleted, inclusion: [true, false]
end

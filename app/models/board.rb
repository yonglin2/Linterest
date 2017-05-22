class Board < ApplicationRecord
  belongs_to :user

  has_many :pinnings, dependent: :destroy

  has_many :pins, :through => :pinnings
end

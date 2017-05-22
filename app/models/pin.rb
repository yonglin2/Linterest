class Pin < ApplicationRecord
  validates :name, :image_url, presence: true

  has_many :pinnings, dependent: :destroy

  has_many :boards, :through => :pinnings
end

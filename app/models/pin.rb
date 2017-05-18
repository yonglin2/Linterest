class Pin < ApplicationRecord
  validates :name, :image_url, presence: true
end

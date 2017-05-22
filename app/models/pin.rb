class Pin < ApplicationRecord
  validates :name, :image_url, :user_id, presence: true

  belongs_to :creator,
    foreign_key: :user_id,
    primary_key: :id,
    class_name: "User"

  has_many :pinnings, dependent: :destroy

  has_many :boards, :through => :pinnings
end

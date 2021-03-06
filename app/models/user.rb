class User < ApplicationRecord
  attr_reader :password

  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: :true

  has_many :boards
  has_many :pinnings, :through => :boards
  has_many :pins, :through => :pinnings

  has_many :own_pins,
    foreign_key: :user_id,
    primary_key: :id,
    class_name: "Pin"

  has_many :follower_users,
    foreign_key: :following_id,
    primary_key: :id,
    class_name: "Follow"

  has_many :following_users,
    foreign_key: :follower_id,
    primary_key: :id,
    class_name: "Follow"

  has_many :followers,
    through: :follower_users,
    source: :follower

  has_many :followings,
    through: :following_users,
    source: :following

  after_initialize :ensure_session_token

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def generate_session_token
    SecureRandom.base64
  end
end

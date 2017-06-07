class Artist < ApplicationRecord
  validates :name, presence: true

  has_many :albums, dependent: :destroy
  has_many :songs,
    through: :albums
end

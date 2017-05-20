class Artist < ApplicationRecord
  validates :name, presence: true

  has_many :albums
  has_many :songs,
    through: :albums
end

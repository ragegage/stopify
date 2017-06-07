class Song < ApplicationRecord
  validates :title, :album, presence: true
  validates :title, uniqueness: {scope: :album }

  belongs_to :album
  has_one :artist,
    through: :album
end

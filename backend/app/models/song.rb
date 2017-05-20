class Song < ApplicationRecord
  validates :title, :album, presence: true

  belongs_to :album
  has_one :artist,
    through: :album
end

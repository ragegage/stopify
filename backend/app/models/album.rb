class Album < ApplicationRecord
  validates :title, :artist, presence: true

  belongs_to :artist
  has_many :songs, dependent: :destroy
end

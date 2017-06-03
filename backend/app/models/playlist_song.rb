class Playlist < ApplicationRecord
  validates :playlist, :song, presence: true

  belongs_to :playlist
  belongs_to :song
end

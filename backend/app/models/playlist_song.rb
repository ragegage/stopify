class PlaylistSong < ApplicationRecord
  validates :playlist, :song, presence: true
  validates :song, uniqueness: { scope: [:playlist] }

  belongs_to :playlist
  belongs_to :song
end

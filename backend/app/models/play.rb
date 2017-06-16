class Play < ApplicationRecord
  validates :song, presence: true

  belongs_to :song
end

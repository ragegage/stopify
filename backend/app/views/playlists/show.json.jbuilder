json.extract! @playlist, :id, :name
json.featured_song_ids @playlist.songs.map { |song| song.id }

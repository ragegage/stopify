json.extract! @artist, :id, :name, :img_src
json.featured_song_ids @artist.songs.map { |song| song.id }
json.featured_album_ids @artist.albums.map { |album| album.id }

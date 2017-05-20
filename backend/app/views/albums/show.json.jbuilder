json.extract! @album, :id, :title, :img_src, :created_at
json.song_ids @album.songs.map { |song| song.id }

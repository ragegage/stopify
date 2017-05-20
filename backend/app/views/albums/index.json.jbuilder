json.all do
  @albums.each do |album|
    json.set! album.id do
      json.title album.title
      json.img_src album.img_src
      json.song_ids album.songs.map { |song| song.id }
      json.date album.created_at
    end
  end
end
json.byId do
  json.array! @albums.map { |album| album.id }
end

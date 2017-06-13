json.artist do
  json.extract! @artist, :id, :name, :img_src
  json.featured_song_ids @artist.songs.map { |song| song.id }
  json.featured_album_ids @artist.albums.map { |album| album.id }
end
json.songs do
  json.all do
    @artist.songs.each do |song|
      json.set! song.id do
        json.id song.id
        json.title song.title
        json.album song.album.title
        json.artist song.artist.name
        json.url song.url
      end
    end
  end
  json.byId do
    json.array! @artist.songs.map { |song| song.id }
  end
end

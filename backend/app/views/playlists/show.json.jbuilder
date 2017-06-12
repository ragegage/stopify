json.playlist do
  json.extract! @playlist, :id, :name
  json.featured_song_ids @playlist.songs.map { |song| song.id }
end
json.songs do
  json.all do
    @playlist.songs.each do |song|
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
    json.array! @playlist.songs.map { |song| song.id }
  end
end

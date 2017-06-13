json.album do
  json.extract! @album, :id, :title, :img_src, :created_at
  json.song_ids @album.songs.map { |song| song.id }
end
json.songs do
  json.all do
    @album.songs.each do |song|
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
    json.array! @album.songs.map { |song| song.id }
  end
end

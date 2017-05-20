json.all do
  @songs.each do |song|
    json.set! song.id do
      json.title song.title
      json.album song.album.title
      json.artist song.artist.name
    end
  end
end
json.byId do
  json.array! @songs.map { |song| song.id }
end

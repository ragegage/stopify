json.all do
  @songs.each do |song|
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
  json.array! @songs.map { |song| song.id }
end

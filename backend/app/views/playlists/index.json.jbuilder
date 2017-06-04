json.all do
  @playlists.each do |playlist|
    json.set! playlist.id do
      json.id playlist.id
      json.name playlist.name
    end
  end
end
json.byId do
  json.array! @playlists.map { |playlist| playlist.id }
end

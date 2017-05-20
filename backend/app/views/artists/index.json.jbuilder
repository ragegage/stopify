json.all do
  @artists.each do |artist|
    json.set! artist.id do
      json.id artist.id
      json.name artist.name
      json.img_src artist.img_src
    end
  end
end
json.byId do
  json.array! @artists.map { |artist| artist.id }
end

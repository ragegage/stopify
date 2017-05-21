# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Artist.create! name: "Kendrick Lamar"
Artist.create! name: "Kanye West"
Album.create! title: "good kid maad city", artist_id: 1
Album.create! title: "Yeezus", artist_id: 2
Song.create! title: "Backseat Freestyle", album_id: 1, url: "http://danosongs.com/music/danosongs.com-junk-ship-gold.mp3"
Song.create! title: "Monster", album_id: 2, url: "https://www.youtube.com/watch?v=yctBp6n8ROo"

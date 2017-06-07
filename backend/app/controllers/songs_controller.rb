class SongsController < ApplicationController
  def index
    @songs = Song.all.includes(:album, :artist)
  end

  def create
    artist_name = song_artist_params[:artist]&.split&.join(" ") || "Unknown"
    album_name = song_album_params[:album]&.split&.join(" ") || "Untitled Album"
    # strip whitespace
    album_name = album_name.chomp
    artist_name = artist_name.chomp
    artist = Artist.find_or_create_by(name: artist_name)
    album = Album.find_or_create_by(title: album_name, artist: artist)

    @song = Song.new(song_params)
    @song.album = album

    @song.title ||= "Untitled"

    if @song.save
      render json: @song
    else
      render json: ["no work"], status: 422
    end
  end

  private
  def song_params
    params.require(:song).permit(:url, :title)#, :track_num, :genre)
  end
  def song_artist_params
    params.require(:song).permit(:artist)
  end
  def song_album_params
    params.require(:song).permit(:album)
  end
end

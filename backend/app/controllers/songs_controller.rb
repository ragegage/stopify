class SongsController < ApplicationController
  def index
    @songs = Song.all
  end

  def create
    artist = Artist.find_or_create_by(name: song_artist_params[:artist])
    album = Album.find_or_create_by(title: song_album_params[:album], artist: artist)
    
    @song = Song.new(song_params)
    @song.album = album

    unless @song.valid?
      @song.album = Album.first
      @song.title = "Untitled"
    end

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

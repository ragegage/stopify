class SongsController < ApplicationController
  def index
    @songs = Song.all
  end

  def create
    @song = Song.new(song_params)

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
    params.require(:song).permit(:url)
  end
end

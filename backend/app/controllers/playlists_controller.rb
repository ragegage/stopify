class PlaylistsController < ApplicationController
  def index
    @playlists = Playlist.all
    render json: @playlists
  end

  def create
    @playlist = Playlist.new(playlist_params)

    if @playlist.save
      render json: @playlist
    else
      render json: ["no work"], status: 422
    end
  end
  private
  def playlist_params
    params.require(:playlist).permit(:name)
  end
end

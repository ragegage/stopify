class PlaylistSongsController < ApplicationController
  def create
    debugger
    @playlist_song = PlaylistSong.new(playlist_song_params)
    @playlist_song.playlist_id = params[:playlist_id]

    if @playlist_song.save
      render json: @playlist_song
    else
      render json: ["no work"], status: 422
    end
  end

  private
  def playlist_song_params
    params.require(:playlist_song).permit(:song_id)
  end
end

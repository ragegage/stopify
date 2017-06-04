class PlaylistSongsController < ApplicationController
  def create
    @playlist_song = PlaylistSong.new(playlist_song_params)

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

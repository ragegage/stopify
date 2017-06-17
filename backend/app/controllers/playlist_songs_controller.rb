class PlaylistSongsController < ApplicationController
  def create
    @playlist_song = PlaylistSong.new(playlist_song_params)
    @playlist_song.playlist_id = params[:playlist_id]

    if @playlist_song.save
      render json: @playlist_song
    else
      render json: ["no work"], status: 422
    end
  end

  def destroy
    @playlist_song = PlaylistSong.find_by(
      playlist_id: params[:playlist_id],
      song_id: params[:song_id]
    )
    if @playlist_song.destroy
      render json: {
        playlist_id: @playlist_song.playlist_id,
        song_id: @playlist_song.song_id
      }
    else
      render json: ["now work"], status: 422
    end
  end

  private
  def playlist_song_params
    params.require(:playlist_song).permit(:song_id)
  end
end

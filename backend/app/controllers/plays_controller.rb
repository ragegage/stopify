class PlaysController < ApplicationController
  def create
    @play = Play.new(playlist_params)

    if @play.save
      render json: ["success"]
    else
      render json: ["no work"], status: 422
    end
  end

  private
  def playlist_params
    params.require(:play).permit(:song_id)
  end
end

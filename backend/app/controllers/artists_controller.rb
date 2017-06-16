class ArtistsController < ApplicationController
  def index
    @artists = Artist.all.order("RANDOM()").limit(50)
  end

  def show
    @artist = Artist.find(params[:id])
  end
end

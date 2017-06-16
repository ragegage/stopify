class AlbumsController < ApplicationController
  def index
    @albums = Album.all.includes(:songs).order("RANDOM()").limit(50)
  end

  def show
    @album = Album.find(params[:id])
  end
end

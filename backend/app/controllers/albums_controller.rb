class AlbumsController < ApplicationController
  def index
    @albums = Album.all.includes(:songs)
  end

  def show
    @album = Album.find(params[:id])
  end
end

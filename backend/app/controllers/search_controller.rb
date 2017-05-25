class SearchController < ApplicationController
  def show
    query = params[:id]
    @artists = Artist.where("name ILIKE '%#{query}%'").limit(3)
    @albums = Album.where("title ILIKE '%#{query}%'").limit(3)
    @songs = Song.where("title ILIKE '%#{query}%'").limit(3)
    render json: {artists: @artists, albums: @albums, songs: @songs}
  end
end

class SearchController < ApplicationController
  def show
    query = params[:id]
    @artists = Artist.where("name ILIKE '%#{query}%'")
    @albums = Album.where("title ILIKE '%#{query}%'")
    @songs = Song.where("title ILIKE '%#{query}%'")
    unless params[:full]
      @artists = @artists.limit(3)
      @albums = @albums.limit(3)
      @songs = @songs.limit(3)
    end
    render json: {artists: @artists, albums: @albums, songs: @songs}
  end
end

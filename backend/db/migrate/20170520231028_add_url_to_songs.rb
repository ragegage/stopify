class AddUrlToSongs < ActiveRecord::Migration[5.1]
  def change
    add_column :songs, :url, :string, null: false
  end
end

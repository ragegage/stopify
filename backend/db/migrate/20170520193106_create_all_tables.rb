class CreateAllTables < ActiveRecord::Migration[5.1]
  def change
    create_table :songs do |t|
      t.string :title, null: false
      t.integer :album_id, null: false

      t.timestamps
    end

    create_table :albums do |t|
      t.string :title, null: false
      t.integer :artist_id, null: false
      t.string :img_src

      t.timestamps
    end

    create_table :artists do |t|
      t.string :name, null: false
      t.string :img_src

      t.timestamps
    end
  end
end

class CreatePlays < ActiveRecord::Migration[5.1]
  def change
    create_table :plays do |t|
      t.integer :song_id, null: false

      t.timestamps
    end
  end
end

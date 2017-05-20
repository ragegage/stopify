# notes

create_table :playlists do |t|
  t.string :name, null: false
  t.integer :user_id, null: false
  t.img_src :string

  t.timestamps
end

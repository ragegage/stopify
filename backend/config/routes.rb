Rails.application.routes.draw do

  resources :songs, only: [:index, :create], defaults: { format: 'json' }
  resources :artists, only: [:index, :show], defaults: { format: 'json' }
  resources :albums, only: [:index, :show], defaults: { format: 'json' }
  resources :search, only: [:show], defaults: { format: 'json' }
  resources :playlists, only: [:index, :create, :show], defaults: { format: 'json' } do
    resources :playlist_songs, only: [:create, :destroy], defaults: { format: 'json' }
  end
  resources :plays, only: [:create], defaults: { format: 'json' }

end

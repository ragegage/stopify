Rails.application.routes.draw do

  resources :songs, only: [:index, :create], defaults: { format: 'json' }
  resources :artists, only: [:index, :show], defaults: { format: 'json' }
  resources :albums, only: [:index, :show], defaults: { format: 'json' }
  resources :search, only: [:show], defaults: { format: 'json' }

end

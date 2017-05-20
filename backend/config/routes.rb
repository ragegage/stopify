Rails.application.routes.draw do

  resources :songs, only: [:index], defaults: { format: 'json' }
  resources :artists, only: [:index, :show], defaults: { format: 'json' }
  resources :albums, only: [:index, :show], defaults: { format: 'json' }

end

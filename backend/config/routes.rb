Rails.application.routes.draw do

  resources :songs, only: [:index], defaults: { format: 'json' }
  resources :artists, only: [:index, :show]
  resources :albums, only: [:index, :show]

end

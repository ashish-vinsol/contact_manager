Rails.application.routes.draw do

  resources :contacts, only: [:index, :show]

  root to: 'contacts#index'

end

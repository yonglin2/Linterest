Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :pins, only: [:index, :show, :create, :update, :destroy]
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :boards, only: [:index, :show, :create, :update, :destroy]
  end

  root "static_pages#root"
end

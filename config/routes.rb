Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { formant: :json } do
    resources :users, only: [:create, :update, :show]
    resources :style_profile_items, only: [:index]
    resources :style_profile_values, only: [:create, :update]
    resources :boxes, only: [:update]
    resources :box_items, only: [:update]
    resource :session, only: [:create, :destroy]
  end

  root to: "static_pages#root"
end

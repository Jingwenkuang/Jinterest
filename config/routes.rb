Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
   root to: "static_pages#root";
   
   namespace :api, defaults: {format: :json} do 
    resource :session, only: [:create, :destroy]
    resources :users, only: [:index, :show, :create, :update] 
  
    resources :pins, only: [:index, :show, :create, :update, :destroy]
    resources :boards, only: [:index, :show, :create, :update, :destroy]
    resources :boards_pins, only: [:index, :create, :destroy]
   end
end

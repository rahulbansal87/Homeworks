NinetyNineCats::Application.routes.draw do
  resources :cats, except: :destroy

  resources :cat_rental_requests, only: [:create, :new] do
    post "approve", on: :member
    post "deny", on: :member
  end

  resource :session, only: [:create, :destroy, :new]

  resources :users, only: [:create, :new] do
    member do
      get 'activate'
    end
  end

  root to: redirect("/cats")
end

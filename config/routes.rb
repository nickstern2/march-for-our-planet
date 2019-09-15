Rails.application.routes.draw do
  root to: 'pages#home'

  get "education", to: 'pages#education', as: :education

  get "about", to: "pages#about", as: :about

end

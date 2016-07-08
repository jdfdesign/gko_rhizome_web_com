GkoRhizomeWebCom::Application.routes.draw do
  match 'newsletters/subscription',
        :to => 'newsletters#create',
        :method => :post,
        :as => :newsletter_subscription
end

source :rubygems

gem 'iconv'

# Gems used only for assets and not required
# in production environments by default.
group :assets do
 gem 'sass-rails', '~> 3.2.5'
 gem 'coffee-rails', '~> 3.2.2'
 gem 'uglifier', '>= 1.2.6'
end

prod_location = 'git@github.com:jdfdesign/gko_cms3.git'
prod_version = "= 0.4.04"
group :production do
  gem 'gko_core', prod_version, :git => prod_location
  gem 'gko_auth', prod_version, :git => prod_location
  gem 'gko_images', prod_version, :git => prod_location
  gem 'gko_inquiries', prod_version, :git => prod_location
  gem "gko_documents", prod_version, :git => prod_location
  gem "gko_features", prod_version, :git => prod_location
  gem "gko_albums", prod_version, :git => prod_location
  gem 'gko_spectacles', '= 0.0.08',  :git => 'git@github.com:jdfdesign/gko_spectacles.git' 
end
#group :development do
#  gem "gko_core", :path => File.expand_path('~/Github/gko_cms3/gko_core', __FILE__)
#  gem "gko_auth", :path => File.expand_path('~/Github/gko_cms3/gko_auth', __FILE__)
#  gem "gko_images", :path => File.expand_path('~/Github/gko_cms3/gko_images', __FILE__)
#  gem "gko_documents", :path => File.expand_path('~/Github/gko_cms3/gko_documents', __FILE__)
#  gem "gko_albums", :path => File.expand_path('~/Github/gko_cms3/gko_albums', __FILE__)
#  gem "gko_inquiries", :path => File.expand_path('~/Github/gko_cms3/gko_inquiries', __FILE__)
#  gem "gko_spectacles", :path => File.expand_path('~/Github/gko/gko_spectacles', __FILE__)
#  gem "gko_features", :path => File.expand_path('~/Github/gko_cms3/gko_features', __FILE__) 
#end    

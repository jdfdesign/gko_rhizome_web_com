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
prod_version = "= 0.5.54"
group :production do
  gem 'gko_core', prod_version, :git => prod_location
  gem 'gko_auth', prod_version, :git => prod_location
  gem 'gko_images', prod_version, :git => prod_location
  gem 'gko_inquiries', prod_version, :git => prod_location
  gem "gko_documents", prod_version, :git => prod_location
  gem "gko_features", prod_version, :git => prod_location
  gem "gko_albums", prod_version, :git => prod_location
  gem 'gko_image_bank', prod_version, :git => prod_location
  gem 'gko_spectacles', '= 0.0.10',  :git => 'git@github.com:jdfdesign/gko_spectacles.git' 
  gem 'gko_categories', prod_version, :git => prod_location
end
#group :development do
#  gem "gko_core", :path => '~/Github/gko_cms3/gko_core'
#  gem "gko_auth", :path => '~/Github/gko_cms3/gko_auth'
#  gem "gko_images", :path => '~/Github/gko_cms3/gko_images'
#  gem "gko_documents", :path => '~/Github/gko_cms3/gko_documents'
#  gem "gko_albums", :path => '~/Github/gko_cms3/gko_albums'
#  gem "gko_inquiries", :path => '~/Github/gko_cms3/gko_inquiries'
#  gem "gko_spectacles", :path => '~/Github/gko/gko_spectacles'
#  gem "gko_features", :path => '~/Github/gko_cms3/gko_features' 
#  gem "gko_image_bank", :path => '~/Github/gko_cms3/gko_image_bank'
#  gem "gko_categories", :path => '~/Github/gko_cms3/gko_categories'
#end    

source :rubygems

# Gems used only for assets and not required
# in production environments by default.
group :assets do
 gem 'sass-rails', '~> 3.2.6'
 gem 'coffee-rails', '~> 3.2.2'
 gem 'uglifier', '>= 1.2.6'
end

group :production do
  git "git@github.com:jdfdesign/gko_cms3.git", :tag => "v0.6.28" do
    gem 'gko_core'
    gem 'gko_auth'
    gem 'gko_images'
    gem 'gko_inquiries'
    gem "gko_documents"
    gem "gko_features"
    gem "gko_albums"
    gem 'gko_image_bank'
    gem 'gko_categories'
  end
  gem 'gko_spectacles', '= 0.0.12',  :git => 'git@github.com:jdfdesign/gko_spectacles.git' 
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

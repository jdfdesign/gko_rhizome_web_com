# This migration comes from gko_spectacles_engine (originally 20150722121000)
class AddFieldsToSpectacle < ActiveRecord::Migration
  def change
    rename_column :spectacle_options, :subtitle, :extra
    add_column :spectacle_options, :subtitle, :text
    
    rename_column :spectacle_option_translations, :subtitle, :extra
    add_column :spectacle_option_translations, :subtitle, :text
  end
end
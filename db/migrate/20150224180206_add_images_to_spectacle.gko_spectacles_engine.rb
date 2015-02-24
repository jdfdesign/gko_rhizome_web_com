# This migration comes from gko_spectacles_engine (originally 20150224185300)
class AddImagesToSpectacle < ActiveRecord::Migration
  def change
    add_column :spectacle_options, :images_hd_uid, :string
  end
end
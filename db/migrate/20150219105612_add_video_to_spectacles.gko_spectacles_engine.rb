# This migration comes from gko_spectacles_engine (originally 20150219113300)
class AddVideoToSpectacles < ActiveRecord::Migration
  def change
    add_column :spectacle_options, :video_url, :string
    add_column :spectacle_options, :video_hd_uid, :string
  end
end
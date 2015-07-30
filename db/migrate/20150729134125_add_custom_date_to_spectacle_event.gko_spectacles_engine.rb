# This migration comes from gko_spectacles_engine (originally 2015072215320000)
class AddCustomDateToSpectacleEvent < ActiveRecord::Migration
  def change
    add_column :spectacle_events, :custom_date, :string
  end
end
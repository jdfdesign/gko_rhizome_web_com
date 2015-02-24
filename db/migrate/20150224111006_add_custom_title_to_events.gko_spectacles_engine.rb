# This migration comes from gko_spectacles_engine (originally 20150224000000)
class AddCustomTitleToEvents < ActiveRecord::Migration
  def change
    add_column :spectacle_events, :custom_title, :string
    add_column :spectacle_events, :description, :text
  end
end
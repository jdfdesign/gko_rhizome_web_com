# This migration comes from gko_spectacles_engine (originally 20150224143500)
class AddCategoryToEvent < ActiveRecord::Migration
  def change
    add_column :spectacle_events, :category, :string
    remove_column :spectacle_events, :attachable_type
    rename_column :spectacle_events, :attachable_id, :spectacle_id
  end
end
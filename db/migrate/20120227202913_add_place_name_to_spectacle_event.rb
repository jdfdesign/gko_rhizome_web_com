class AddPlaceNameToSpectacleEvent < ActiveRecord::Migration
  def self.up
    add_column :spectacle_events, :place, :string
  end

  def self.down
    remove_column :spectacle_events, :place
  end
end 
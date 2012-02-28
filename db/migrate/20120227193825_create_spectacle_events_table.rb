class CreateSpectacleEventsTable < ActiveRecord::Migration
  def self.up
    create_table :spectacle_events, :force => true do |t|
      t.integer :spectacle_id
      t.integer :section_id
      t.integer :site_id
      t.datetime :start_date
      t.datetime :end_date
      t.string :location
      t.string :more_info_url
      t.string :registration_url
      t.timestamps
    end
    add_index :spectacle_events, :site_id
    add_index :spectacle_events, :section_id
    add_index :spectacle_events, :spectacle_id
  end

  def self.down
    drop_table :spectacle_events
  end
end
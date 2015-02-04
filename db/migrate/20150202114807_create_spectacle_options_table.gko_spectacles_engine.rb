# This migration comes from gko_spectacles_engine (originally 20150202121700)
class CreateSpectacleOptionsTable < ActiveRecord::Migration
  def change
    create_table :spectacle_options, :force => true do |t|
        t.integer :spectacle_id
        t.string :file_doc_uid
        t.string :file_tech_uid
        t.string :file_press_uid
        t.timestamps
    end
    add_index :spectacle_options, :spectacle_id
  end
end
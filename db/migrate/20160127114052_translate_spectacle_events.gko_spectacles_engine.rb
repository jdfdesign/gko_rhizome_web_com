# This migration comes from gko_spectacles_engine (originally 20162701123800)
class TranslateSpectacleEvents < ActiveRecord::Migration
  def change
    unless table_exists?(:spectacle_event_translations)
      SpectacleEvent.create_translation_table!({
        :custom_title => :string
      }, {:migrate_data => true})
    end
  end
end
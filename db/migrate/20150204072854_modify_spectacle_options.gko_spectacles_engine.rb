# This migration comes from gko_spectacles_engine (originally 2015020482200)
class ModifySpectacleOptions < ActiveRecord::Migration
  def change
    add_column :spectacle_options, :subtitle, :text
    add_column :spectacle_options, :team, :text
    add_column :spectacle_options, :prod, :text
    add_column :spectacle_options, :intro, :text
    add_column :spectacle_options, :co_prod, :text
    add_column :spectacle_options, :sponsor, :text

    unless table_exists?(:spectacle_option_translations)
    SpectacleOption.create_translation_table!({
      :subtitle => :text,
      :team => :text,
      :prod => :text,
      :intro => :text,
      :co_prod => :text,
      :sponsor => :text

    }, {:migrate_data => true})
    end
  end
end
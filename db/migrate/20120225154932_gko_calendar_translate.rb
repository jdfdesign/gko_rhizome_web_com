class GkoCalendarTranslate < ActiveRecord::Migration
  def self.up
    Event.create_translation_table! :title => :string, :slug => :string, :body => :text
  end

  def self.down
    Event.drop_translation_table
  end
end
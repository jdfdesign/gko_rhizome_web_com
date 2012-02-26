class GkoCalendarCreateTables < ActiveRecord::Migration
  def self.up
    create_table :events, :force => true do |t|
      t.integer :account_id
      t.integer :author_id
      t.integer :section_id
      t.integer :parent_id
      t.integer :site_id

      t.string :title, :limit => 120
      t.text :body
      t.boolean :all_day, :default => 0
      t.datetime :start_date
      t.datetime :end_date
      t.string :slug
      t.datetime :published_at

      t.string :location
      t.string :contact_email
      t.string :more_info_url
      t.string :registration_url
      t.string :image_mime_type
      t.string :image_name
      t.integer :image_size
      t.integer :image_width
      t.integer :image_height
      t.string :image_uid
      t.string :image_ext
      t.timestamps
    end
    add_index :events, :site_id
    add_index :events, :section_id
    add_index :events, :account_id
    add_index :events, :slug
  end

  def self.down
    drop_table :events
  end
end
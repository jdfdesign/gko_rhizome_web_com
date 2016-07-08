# This migration comes from gko_core (originally 20160708102500)
class AddAuthorToImages < ActiveRecord::Migration
  def change
    add_column :images, :author, :string
  end
end

class AddTime < ActiveRecord::Migration
  def change
    add_column :posts, :time, :string
  end
end

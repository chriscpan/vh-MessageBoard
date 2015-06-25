class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.text :content, null: false
      t.string :title, null: false
      t.string :username, null: false

      t.datetime :created_at
      t.datetime :updated_at
    end
  end
end

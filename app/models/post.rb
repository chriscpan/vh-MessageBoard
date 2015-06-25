class Post < ActiveRecord::Base
  validates :content, :title, :username, presence: true 
end

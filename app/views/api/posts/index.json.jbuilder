json.array! @posts do |post|
  post.extract! post, :id, :username, :content, :created_at, :title, :updated_at
end

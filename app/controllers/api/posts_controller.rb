module Api
  class PostsController < ApiController
    def index
      @post = Post.all
      render :json => @post
    end

    def create
      @post = Post.new(post_params)
      if @post.save
        render :json => @post
      else
        render :json => @post.errors.full_messages, status: :unprocessable_entity
      end
    end

    def show
      @post = Post.find(params[:id])
      render :json => @post
    end

    def update
      @post = Post.find(params[:id])
      if @post.update(post_params)
        render :json => @post
      else
        render :json => @post.errors.full_messages, status: :unprocessable_entity
      end
    end

    private

    def post_params
      params.require(:post).permit(:username, :content, :title)
    end
  end
end

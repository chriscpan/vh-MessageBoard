class PostsController < ApplicationController
  def index
    @post = Post.all
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      render :json => @post
    else
      render :json => @post.errors.full_messages, status: :unprocessable_entity
    end
  end

  # def new
  #
  # end

  def show
    @post = Post.find(params[:id])
    render :json => @post
  end

  # def edit
  #
  # end

  def update
    @post = Post.find(params[:id])
    if @post.update(post_params)
      render :json => @post
    else
      render :json => @post.errors.full_messages, status: :unprocessable_entity
  end

  def destroy

  end

  private

  def post_params
    params.require(:post).permit(:username, :content, :title)
  end
end

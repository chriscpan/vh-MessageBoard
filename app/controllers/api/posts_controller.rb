module Api
  class PostsController < ApiController
    def index
      @post = Post.all.order(created_at: :desc)
      render :json => @post
    end

    def create
      @post = Post.new(post_params)
      time = parse_date(Time.now.to_s)
      @post[:time] = time
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

    def destroy
      @post = Post.find(params[:id])
      @post.destroy if @post
      render :json => {}
    end

    def months(num)
      months = {
        "1" => "January",
        "2" => "February",
        "3" => "March",
        "4" => "April",
        "5" => "May",
        "6" => "June",
        "7" => "July",
        "8" => "August",
        "9" => "September",
        "10" => "October",
        "11" => "November",
        "12" => "December"
      }
      months[num]
    end

    def parse_date(time)
      # debugger
      groups = time.to_s.split(" ")
      date = groups.first.split("-")
      month = date[1]
      time = groups[1].split(":")
      hours = time.first
      is_pm = false
      if hours.to_i > 12
        hours = hours.to_i % 12
        is_pm = true
      else
        hours = hours.to_i
      end
      day_or_night = ""
      if is_pm
        day_or_night = "PM"
      else
        day_or_night = "AM"
      end
      minutes = time[1]
      date_string = "#{month} #{date.last}, #{date.first} @ #{hours}:#{minutes} #{day_or_night}"
    end

    private

    def post_params
      params.require(:post).permit(:username, :content, :title)
    end
  end
end

VhMessageBoard.Views.MessageIndex = Backbone.View.extend({
  template: JST['posts/postsIndex'],

  initialize: function(options) {
    this.posts = options.posts;
    this.listenTo(this.posts, 'sync remove', this.render);
  },

  events: {
    'click .delete': 'destroyPost',
    'click .glypicon': 'editPost'
  },

  render:function(){
    var content = this.template({
      posts: this.posts
    });
    this.$el.html(content);
    return this;
  },

  destroyPost: function(event) {
    var $target = $(event.currentTarget);
    var post = this.posts.get($target.attr("data-id"));
    this.posts.remove(post);
    post.destroy();
  },

  editPost: function() {
    Backbone.history.navigate('/posts/' + this.post.id + "/:edit", {trigger: true});
  }


});

VhMessageBoard.Views.MessageIndex = Backbone.View.extend({
  template: JST['posts/postsIndex'],

  initialize: function(options) {
    this.posts = options.posts;
    this.listenTo(this.posts, 'sync', this.render);
  },

  render:function(){
    var content = this.template({
      posts: this.posts
    });
    this.$el.html(content);
    return this;
  }

});

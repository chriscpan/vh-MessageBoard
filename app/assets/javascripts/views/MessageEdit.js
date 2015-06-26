VhMessageBoard.Views.MessageEdit = Backbone.View.extend({
  template: JST['posts/postEdit'],

  events: {
    'submit form': 'updatePost'
  },

  initialize: function(options) {
    this.posts = options.posts;
    this.post = options.post;
    this.listenTo(this.post, 'sync', this.render);
  },

  render: function() {
    var content = this.template({
      post: this.post
    });
    this.$el.html(content);
    return this;
  },

  updatePost: function(event) {
    event.preventDefault();
    var data = $(event.target).serializeJSON();
    debugger
    this.post.save(data, {
      success: function() {
        // debugger
        this.posts.add(this.post, {merge: true});
        Backbone.history.navigate("posts/" + this.post.id, {trigger: true});
      }.bind(this),
      error: function() {
        // debugger
        var err = $('.error-edit-message');
        err.html($('<p>Something went wrong</p>'));
      }.bind(this)
    })
  }
});

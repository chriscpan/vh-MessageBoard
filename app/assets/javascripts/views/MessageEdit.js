VhMessageBoard.Views.MessageEdit = Backbone.View.extend({
  template: JST['posts/postEdit'],

  events: {
    'submit form': 'updatePost',
    'click .delete-message': 'destroyPost'
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
    debugger
    var data = $(event.target).serializeJSON();
    this.post.save(data, {
      success: function() {
        this.posts.add(this.post, {merge: true});
        Backbone.history.navigate("posts/" + this.post.id, {trigger: true});
      }.bind(this),
      error: function() {
        var err = $('.error-edit-message');
        err.html($('<p>All inputs must be filled!</p>'));
      }.bind(this)
    });
  },

  destroyPost: function(event) {
    event.preventDefault();
    this.post.destroy({
      success: function() {
        Backbone.history.navigate("/", {trigger:true});
      }
    });
  },
});

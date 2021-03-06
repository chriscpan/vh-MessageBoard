VhMessageBoard.Views.MessageNew = Backbone.View.extend({
  template: JST['posts/postNew'],

  initialize: function(options) {
    this.posts = options.posts;
    this.post = options.post;
    this.listenTo(this.post, 'sync', this.render);
  },

  events: {
    'submit form': 'createPost'
  },

  render: function() {
    var content = this.template({
      post: this.post
    });
    this.$el.html(content);
    return this;
  },

  createPost: function(event) {
    event.preventDefault();
    var data = $(event.target).serializeJSON();
    this.post.save(data, {
      success: function() {
        this.posts.add(this.listing, {merge: true});
        Backbone.history.navigate('/', {trigger: true});
      }.bind(this),
      error: function(model, response) {
        var err = $('.post-new-error');
        err.html($('<p>All inputs must be filled!</p>'));
      }.bind(this)
    });
  }
});

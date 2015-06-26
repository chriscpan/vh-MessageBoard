VhMessageBoard.Views.MessageNew = Backbone.View.extend({
  template: JST['posts/postNew'],

  initialize: function(options) {
    this.posts = options.posts;
    this.post = options.post;
    // debugger
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
    debugger
    this.post.save(data, {
      success: function() {
        debugger
        this.posts.add(this.listing, {merge: true});
        Backbone.history.navigate('/', {trigger: true});
      }.bind(this),
      error: function(model, response) {
        debugger
        var err = $('.post-new-error');
        err.html($('<p>Something went wrong</p>'));
      }.bind(this)
    });
  }
});

VhMessageBoard.Views.MessageShow = Backbone.View.extend({
  template: JST['posts/postShow'],

  initialize: function(options) {
    this.post = options.post;
    this.listenTo(this.post, 'sync', this.render);
  },

  render: function() {
    var content = this.template({
      post: this.post
    });
    this.$el.html(content);
    return this;
  }
});

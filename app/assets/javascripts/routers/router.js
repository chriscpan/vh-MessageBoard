VhMessageBoard.Routers.Router = Backbone.Router.extend({
    initialize: function(options) {
      this.$rootEl = options.$rootEl;
      this.posts = options.posts;
    },

    routes: {
      '': 'index',
      'posts/new': 'new',
      'posts/:id': 'show',
      'posts/:id/:edit': 'edit'
    },

    index: function() {
      this.posts.fetch();
      var v = new VhMessageBoard.Views.MessageIndex({
        posts: this.posts
      });
      this._swapView(v);
    },

    new: function(){
      // debugger
      var post = new VhMessageBoard.Models.Post();
      // debugger
      var v = new VhMessageBoard.Views.MessageNew({
        post: post,
        posts: this.posts
      });
      this._swapView(v);
    },

    show: function(){

    },

    edit: function(){

    },

    _swapView: function(view) {
      this._currentView && this._currentView.remove();
      this._currentView = view;
      this.$rootEl.html(view.$el);
      view.render();
    }
});

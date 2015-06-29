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
      var post = new VhMessageBoard.Models.Post();
      var v = new VhMessageBoard.Views.MessageNew({
        post: post,
        posts: this.posts
      });
      this._swapView(v);
    },

    show: function(id){
      var post = this.posts.getOrFetch(id);
      var v = new VhMessageBoard.Views.MessageShow({
        post: post,
        posts: this.posts
      });
      this._swapView(v);
    },

    edit: function(id){
      var post = this.posts.getOrFetch(id);
      var v = new VhMessageBoard.Views.MessageEdit({
        posts: this.posts,
        post: post
      });
      this._swapView(v);
    },

    _swapView: function(view) {
      this._currentView && this._currentView.remove();
      this._currentView = view;
      this.$rootEl.html(view.$el);
      view.render();
    }
});

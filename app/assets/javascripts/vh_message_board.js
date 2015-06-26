window.VhMessageBoard = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var posts = new VhMessageBoard.Collections.Posts();
    new VhMessageBoard.Routers.Router({
      $rootEl: $('#main'),
      posts: posts
    });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  VhMessageBoard.initialize();
});

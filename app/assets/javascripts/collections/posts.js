VhMessageBoard.Collections.Posts = Backbone.Collection.extend({
  url: 'api/posts',

  model: VhMessageBoard.Models.Post
});

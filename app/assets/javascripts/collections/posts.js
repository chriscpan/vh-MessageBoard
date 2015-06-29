VhMessageBoard.Collections.Posts = Backbone.Collection.extend({
  url: '/api/posts',

  model: VhMessageBoard.Models.Post,

  getOrFetch: function(id) {
    var model = this.get(id);
    var that = this;
    if (model) {
      model.fetch();
    } else {
      model = new VhMessageBoard.Models.Post({
        id: id
      });
      model.fetch({
        success: function(){
          that.add(model);
        }
      });
    }
    return model;
  }
});

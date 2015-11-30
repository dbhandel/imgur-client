var Api = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');

//TopicStore fetches our data on request via getTopics
module.exports = Reflux.createStore({
  listenables: [Actions], //if this module has any method with the same name as a method on the Actions object, this module will call that method
  getTopics: function() {
    return Api.get('topics/defaults')
      .then(function(json){
        this.topics = json.data //data is the property in the object returned from imgur
        this.triggerChange();
      }.bind(this));
  },
  triggerChange: function(){
    this.trigger('change', this.topics);
  }
});

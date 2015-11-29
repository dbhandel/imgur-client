var React = require('react');
var Api = require('../utils/api');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      topics: []
    }
  },
  render: function () {
    return (
      <div className="list-group">
        Topic List
        {this.renderTopics()}
      </div>
    )
  },
  componentWillMount: function () {
      Api.get('topics/defaults')
        .then(function(data){
          this.setState({
            topics: data.data
          })
        }.bind(this));
    },
  renderTopics: function () {
    return this.state.topics.map(function(topic){
      return <li>
          {topic}
      </li>
    });
  }
});

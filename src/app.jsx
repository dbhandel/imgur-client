var React = require('react');
var Routes = require('./routes');

var Hello = React.createClass({
  render: function() {
    return <h1 className="red">
      {this.props.children}
    </h1>
  }
});

var  Child1 = React.createClass({

  render: function() {
    return (
      <h1>
        I'm child1
        {this.props.children}
      </h1>
    );
  }

});
var  Child2 = React.createClass({

  render: function() {
    return (
      <h1>I'm the other child, I'm child12</h1>
    );
  }

});


// var element = React.createElement(Hello, {});
React.render(Routes, document.querySelector('.container'));
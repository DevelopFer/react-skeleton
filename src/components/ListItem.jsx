var React = require('react');
var ListItem = React.createClass({
  click:function(){

  },
  render:function(){
    return(
      <li>
        <h4>{this.props.ingredients}</h4>
      </li>
    );
  }
});

module.exports = ListItem;

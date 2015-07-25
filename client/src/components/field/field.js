import React from 'react';

export default React.createClass({

  render() {

  	console.log('<Field> – this.props.data -> ', this.props.data)

    return (
    	<input type="text" placeholder={this.props.key} />
    )
  }
});

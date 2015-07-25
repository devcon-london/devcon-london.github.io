import './field.css';

import React from 'react';

export default React.createClass({

  render() {

  	console.log('<Field> – this.props.data -> ', this.props.data)

    return (
    	<div className="Field" dangerouslySetInnerHTML={{__html: this.props.data.html}}></div>
    )
  }
});

import './field.css';

import React from 'react';

export default React.createClass({

  render() {
    return (
    	<div className="Field" dangerouslySetInnerHTML={{__html: this.props.data.html}}></div>
    )
  }
});

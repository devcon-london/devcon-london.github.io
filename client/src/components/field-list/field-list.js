import React from 'react';
import Field from '../field/field.js';

export default React.createClass({
  render() {
  	var fieldNodes = this.props.fields.map(function(field, index) {
	    return (
	    	<div>
	      	<Field data={field} key={index} />
	      </div>
	    );
	  });

    return (
    	<div className="FieldList">
    		{fieldNodes}
    	</div>
    )
  }
});

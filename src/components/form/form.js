import './form.css';

import React from 'react';
import FieldList from '../field-list/field-list.js';

export default React.createClass({
	loadDataFromServer() {
	  $.ajax({
	    url: 'http://localhost:8080/api/google-form?formId=' + this.props.id,
	    dataType: 'json',
	    success: function(data) {
	    	console.log('success -> ', data);
	      this.setState({data: data});
	    }.bind(this),
	    error: function(xhr, status, err) {
	      console.error(status, err.toString());
	    }.bind(this)
	  });
	},

	getInitialState() {
		return {data: []};
	},

	componentDidMount() {
		this.loadDataFromServer();
	},

  render() {
		var submitUrl = 'https://docs.google.com/forms/d/' + this.props.id + '/formResponse';
    return (
      <form className="Form"  action={submitUrl}>
      	<FieldList fields={this.state.data} />
      </form>
    )
  }
});

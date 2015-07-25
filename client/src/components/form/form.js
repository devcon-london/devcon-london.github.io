import './form.css';

import React from 'react';
import FieldList from '../field-list/field-list.js';

export default React.createClass({

	loadDataFromServer() {
		var url = 'http://localhost:8080/api/google-form?formId=' + this.props.id;

	  $.ajax({
	    url: url,
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

	submitForm(e) {
		e.preventDefault();
		var submitUrl = 'https://docs.google.com/a/peduarte.com/' + this.props.id + '/formResponse';
		console.log('submitUrl -> ', submitUrl);
	},

	getInitialState() {
		return {data: []};
	},

	componentDidMount() {
		this.loadDataFromServer();
	},

  render() {
  	console.log('<Form> – this.state.data -> ', this.state.data);
    return (
      <form className="Form"  onSubmit={this.submitForm}>
      	<FieldList fields={this.state.data} />
      </form>
    )
  }
});

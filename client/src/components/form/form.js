import './form.css';

import React from 'react';

export default React.createClass({

	getInitialState() {
		return {data: []};
	},

	componentDidMount() {
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

  render() {
  	console.log('Render() -> ', this.state.data);
    return (
      <form className="form">
        <input type="text" />
      </form>
    )
  }
});

import './form.css';

import React from 'react';
import FieldList from '../field-list/field-list.js';

var endpoint = process.env.NODE_ENV === 'development' ? 'http://localhost:8080/api/google-form?formId=' : 'https://devconlondon-api.herokuapp.com/api/google-form?formId=';

export default React.createClass({
  loadDataFromServer() {
    $.ajax({
      url: endpoint + this.props.id,
      dataType: 'json',
      success: function(data) {
        $('#loading').hide();
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
        <p id="loading">Loading... :)</p>
        <FieldList fields={this.state.data} />
      </form>
    )
  }
});

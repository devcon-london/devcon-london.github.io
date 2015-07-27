import './form.css';

import React from 'react';
import FieldList from '../field-list/field-list.js';

import request from 'browser-request';

var endpoint = process.env.NODE_ENV === 'development' ? 'http://localhost:8080/api/google-form?formId=' : 'https://devconlondon.herokuapp.com/api/google-form?formId=';

export default React.createClass({
  loadDataFromServer() {
    var self = this;

    request(endpoint + this.props.id, function(error, response, body) {
      if (error) { throw error; }

      document.getElementById('loading').style.display = 'none';
      self.setState({data: JSON.parse(body)});
    })
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
      <form className="Form" action={submitUrl}>
        <p id="loading">Loading... :)</p>
        <FieldList fields={this.state.data} />
      </form>
    )
  }
});

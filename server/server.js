var express = require('express');
var cors = require('cors');
var app = express();
var request = require('request');
var cheerio = require('cheerio');

var PORT = process.env.PORT || 8080;
var GOOGLE_FORM_URL = 'https://docs.google.com/a/peduarte.com/forms/d/';

app.use(cors());

function scrapeForm(formId, callback) {
  request(GOOGLE_FORM_URL + formId, function (error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      var $form = $('#ss-form');

      var parsedResults = { formActionUrl: $form.attr('action'), formElements: []};

      $('#ss-form .ss-item').each(function(i, element) {
        parsedResults.formElements.push($(this).html());
      });

      return callback(parsedResults);
    }
  });
}

app.get('/api/google-form', function(req, res) {
  if (req.query.formId) {
    scrapeForm(req.query.formId, function(data) {
      res.json(data);
    });
  }
});


app.listen(PORT);
console.log('Listening at localhost:' + PORT);

var express = require('express');
var cors = require('cors');
var app = express();
var request = require('request');
var cheerio = require('cheerio');

var GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/';
var PORT = process.env.PORT || 8080;

app.use(cors());

function scrapeForm(formId, callback) {
  request(GOOGLE_FORM_URL + formId, function (error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      var $form = $('#ss-form');

      var parsedResults = [];

      $('#ss-form .ss-item').each(function(i, element) {

      	var obj = {
      		title: $('.ss-q-title', this).text(),
      		helpText: $('.ss-secondary-text', this).text(),
      		html: $(this).html()
      	};

        parsedResults.push(obj);
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

var fs = require('fs');
var Faker= require('../index');
var definitions = require('../lib/definitions');

// #######
//  SETUP
// #######

var newsFeedLength = 999;


console.log("Starting  generating news data !");
var deviceFileNameCSV = 'fake-news.csv';
var deviceFileNameJSON = 'fake-news.json';

var from = new Date(2014, 0, 1, 0, 0, 0, 0);
var now = new Date(2014, 11, 31, 23, 59, 59, 999);

fs.unlinkSync(deviceFileNameCSV);
fs.unlinkSync(deviceFileNameJSON);

var countNewsId = 100;

// ##############
//  news trace
// ##############
for (var i = countNewsId; i <= newsFeedLength; i++) {

    var trace = {};

    countNewsId++;
    var traceDate = Faker.Date.between(from, now);

    trace.id = countNewsId;

    trace.producerId = Faker.Helpers.replaceSymbolWithNumber("####-####-####-####");

    trace.published = traceDate;

    trace.actor = {};
    trace.actor.id = "toto";
    trace.actor.objectType = "monObj";
    trace.actor.displayName = "monObj";

    trace.verbe = "add";

    trace.object = {};
    trace.object.id = "tata";
    trace.object.objectType = "monObj";
    trace.object.displayName = "monObj";

    trace.target = {};
    trace.target.id = "tutu";
    trace.target.objectType = "monObj";
    trace.target.displayName = "monObj";


    // var traceRow = '';
    // traceRow = trace.id + ";" +
    //     trace.producerId + ";" +
    //     trace.published + ";" +
    //     trace.weight;
    // traceRow += '\n';
    // fs.appendFileSync(deviceFileNameCSV, traceRow);

    // log the last to console
    if (i == newsFeedLength) {
        console.log("--> Last news");
        console.log(JSON.stringify(trace, null, 2));
    }

    var traceRow = '';
    traceRow += JSON.stringify(trace);
    traceRow += '\n';
    fs.appendFileSync(deviceFileNameJSON, traceRow);


  // log the last to console
  if (i % 100 === 0) {
    process.stdout.write(".");
  }
  if (i % 1000 === 0) {
    console.log(i);
  }

};

var total = parseInt(i)-1;
console.log(" completed " + countNewsId + " news...");
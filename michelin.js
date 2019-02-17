// https://restaurant.michelin.fr/

var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');



//the website to get the restaurant michelin with star:
var url = 'https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin';

//What are the given properties for a starred restaurant :
/*
var Michelin :
restaurant : string
starred : boolen
*/
var listeRestaurants = [{
  'restaurant' : '',
  'isStarred' : '',
  'price' : '',
}];

request(url, function(error, response, body) {
  if(error) {
    console.log("Error: " + error);
  }
  console.log("Status code: " + response.statusCode);

  var $ = cheerio.load(body);

  // to log the entire page :
  //console.log(body);

  var pagerItem = $('.mr-pager-item');
  // console.log(pagerItem);
  // console.log(pagerItem.html());
  // console.log(pagerItem.text());
  //console.log(pagerItem);
  //const output = pagerItem.find('li').text();
  //const output = pagerItem.children('li').next().text();
  //console.log(output);

  $('.mr-pager-item').each(function(i){
    /*
    const item = $(el).text();
    const link = $(el).attr('href');

    console.log(link);
    */
    // all the restaurant on the actual page :
      //poi-search-result
    // The link of the restaurant :
        //poi-card-link
 })
 
});

//https://www.relaischateaux.com/

var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

const writeStream = fs.createWriteStream('castleurl.csv');
writeStream.write(` hotel ; restaurant ; chef ; hote \n`);


// hotel with restaurant starred in the michelin guide :
//https://www.relaischateaux.com/fr/actualites/guide-michelin-france-2019-relais-chateaux-revele-ses-pepites

/*
 the website to get the hotel and restaurant
GET {'https://www.relaischateaux.com/us/destinations/europe/france'}

in the console :
$0


 <a href="/restaurants/france" id="clear-filters">Effacer tous les filtres</a>


 the website to acces the price
https://www.relaischateaux.com/us/france/nameOfTheHotel#bookStayTab
*/

var url = 'https://www.relaischateaux.com/fr/site-map/etablissements';

// Get the list of hotels :
// Get list of restaurants for a given hotel

var listCastle = [{
  'restaurant' : '',
  'chef': '',
  'hote':'',
  'price' : ''
}];

request(url, function(error, reponse , body){
    var $ = cheerio.load(body);

    var hotel ;
    var restaurant;
    var chef;
    var hote ;



    $("#countryF").each(function(i){
      if ($(this).find("h3").text() === 'France'){
        $(this).find("li").each(function(j){
          $(this).find("a").each(function(k){
            if(k==0){
              //name of the restaurant :
                //console.log($(this).filter("a").text());
                hotel = $(this).filter("a").text();

                //url of the restaurant :
                //console.log($(this).attr("href").trim());
                restaurant = $(this).attr("href").trim();
            }
            if (k==1){

              //console.log($(this).attr("href").trim());
              chef = $(this).attr("href").trim();
            }
            if (k==2){
              //console.log($(this).attr("href").trim());
              hote = $(this).attr("href").trim();
            }

          })
          writeStream.write(`${hotel} ; ${restaurant} ; ${chef} ; ${hote} \n`);


        })
              console.log("scraping done"); 
      }

    })
})

// Get list of restaurants for a given hotel

// JSON schema for Hotel

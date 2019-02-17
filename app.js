// How to create a connection between Relais&Chateaux and the starred restaurant ?


const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


const michelin = require('michelin');
const castle = require('castle');




executor.executeAsync({
  url: "https://www.relaischateaux.com/us/destinations/europe/france/_api/SP.AppContextSite(@target)/web/lists/getbytitle('Access Requests').
    ?@target='8080'",
  method: "GET",
  headers: { "accept": "application/json; odata=verbose" },
  success: successHandler,
  error: errorHandler
});

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);

// Méthode pour récupérer les paramètre d'un url

function $_GET(param) {
	var vars = {};
	window.location.href.replace( location.hash, '' ).replace(
		/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
		function( m, key, value ) { // callback
			vars[key] = value !== undefined ? value : '';
		}
	);

	if ( param ) {
		return vars[param] ? vars[param] : null;
	}
	return vars;
}

var $_GET = $_GET(),
    name = $_GET['name'], // parametre a recuperer
    age = $_GET['age'];


/*
const property = {...};


const properties = castle.getProperties();
const prices = castle.getPrices(property);

...



const starred = michelin.get();

...

*/

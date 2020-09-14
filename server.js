const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
//Import Services
var yahooStockPrices = require('yahoo-stock-prices');
var googleStocks = require('google-stocks');
var stockscraper = require('stockscraper');

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
	console.log('Got poked!!!!!!!!!');
	res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.get('/stocks', async (req, res) => {
	console.log('Inside Stocks Route');
	const result = await googleStocks('TSLA');
	console.log('result', result);
	/* yahooStockPrices.getCurrentPrice('BCP.LS', function (err, price) {
		console.log(price);
		res.send({ company: 'BCP', price: price });
	}); */
});

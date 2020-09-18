const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;

//Import Services
var yahooStockPrices = require('yahoo-stock-prices');
var moment = require('moment');

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

//This line of code was put here to deployment
app.use(express.static(path.join(__dirname, 'client/build')));

// create a GET route
app.get('/api/express_backend', (req, res) => {
	console.log('Got poked!!!!!!!!!');
	res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.get('/api/stocks', async (req, res) => {
	console.log('Inside Stocks Route');
	const result = await yahooStockPrices.getHistoricalPrices(
		Number(moment().format('M')) - 1,
		Number(moment().format('D')) - 1,
		Number(moment().format('YYYY')),
		Number(moment().format('M')),
		Number(moment().format('D')),
		Number(moment().format('YYYY')),
		'BCP.LS',
		'1d',
		function (err, prices) {
			console.log(prices);
			if (prices.length > 1) {
				const variation =
					(prices[0].adjclose - prices[1].adjclose) / prices[1].adjclose;
				const value = Math.round(variation * 10000) / 100;
				const price = Math.round(prices[0].adjclose * 1000) / 1000;
				console.log('Got here');
				res.send({ value, price });
			} else {
				res.send({});
			}
		}
	);
});

app.get('*', (req, res) => {
	console.log('This is serving React');
	console.log(__dirname + '/client/build/index.html');
	res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

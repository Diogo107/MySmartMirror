const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
//Import Services
var yahooStockPrices = require('yahoo-stock-prices');

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
	console.log('Got poked!!!!!!!!!');
	res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.get('/stocks', async (req, res) => {
	console.log('Inside Stocks Route');
	const result = await yahooStockPrices.getHistoricalPrices(
		8,
		14,
		2020,
		9,
		15,
		2020,
		'BCP.LS',
		'1d',
		function (err, prices) {
			console.log(prices);
			const variation =
				(prices[0].adjclose - prices[1].adjclose) / prices[1].adjclose;
			console.log(variation * 100);
		}
	);
});

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

//Import Services
var yahooStockPrices = require('yahoo-stock-prices');
var moment = require('moment');

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

//This line of code was put here to deployment
app.use(express.static(join(__dirname, './client/build')));

// create a GET route
app.get('/express_backend', (req, res) => {
	console.log('Got poked!!!!!!!!!');
	res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.get('/stocks', async (req, res) => {
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

//This line of code was put here to deployment
app.get('*', (req, res, next) => {
	res.sendFile(join(__dirname, './../client/build/index.html'));
});

// Catch missing routes and forward to error handler
app.use((req, res, next) => {
	next(createError(404));
});

// Catch all error handler
app.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.json({ type: 'error', error: { message: error.message } });
});
